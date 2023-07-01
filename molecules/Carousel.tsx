import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Indicator from "./Indicator";
import Box from "./Box";

type CarouselProps = {
    showIndicators?: boolean,
    indicatorsPosition?: "inner" | "outer",
    swipeable?: boolean,
    children: React.ReactNode[],
    maxHeight?: string,
}

const Carousel = ({
    showIndicators = true,
    indicatorsPosition = "outer",
    swipeable = true,
    children,
    maxHeight
}: CarouselProps) => {
    const slideRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ToLastPosition = useRef<any>(false);
    const ToFirstPosition = useRef<any>(false);
    const totalNumberOfSlides = children.length;

    const nextSlide = () => {
        const slideWidth = slideRef.current.clientWidth;

        setCurrentIndex((prevIndex) => {
            if (prevIndex === totalNumberOfSlides - 1) {
                ToFirstPosition.current = true;
                slideRef.current.style.transitionDuration = "200ms";
                slideRef.current.style.transform = `translate3d(-${(totalNumberOfSlides * slideWidth)}px, 0px, 0px)`;
            }
            return prevIndex === totalNumberOfSlides - 1 ? 0 : prevIndex + 1
        });
    };

    const prevSlide = () => {
        const slideWidth = slideRef.current.clientWidth;

        setCurrentIndex((prevIndex) => {
            if (prevIndex - 1 < 0) {
                ToLastPosition.current = true;
                slideRef.current.style.transitionDuration = "200ms";
                slideRef.current.style.transform = `translate3d(${slideWidth}px, 0px, 0px)`;
            }
            return (prevIndex - 1) < 0 ? totalNumberOfSlides - 1 : prevIndex - 1
        });
    };

    const handleOnClickIndicator = (index: number) => {
        if (index === currentIndex) return;

        const slideWidth = slideRef.current.clientWidth;

        setCurrentIndex((prevIndex) => {
            if (prevIndex - index < 0) {
                slideRef.current.style.transitionDuration = "200ms";
                slideRef.current.style.transform = `translate3d(${slideWidth * (index - currentIndex)}px, 0px, 0px)`;
            } else {
                slideRef.current.style.transitionDuration = "200ms";
                slideRef.current.style.transform = `translate3d(${slideWidth * (index - currentIndex)}px, 0px, 0px)`;
            }
            return index;
        });
    }

    useEffect(() => {
        const slideWidth = slideRef.current.clientWidth;

        if (currentIndex === 0 && ToFirstPosition.current) {
            ToFirstPosition.current = false;
            setTimeout(() => {
                slideRef.current.style.transitionDuration = "0ms";
                slideRef.current.style.transform = `translate3d(-${(currentIndex * slideWidth)}px, 0px, 0px)`;
            }, 200)
        } else if (currentIndex === totalNumberOfSlides - 1 && ToLastPosition.current) {
            ToLastPosition.current = false;
            setTimeout(() => {
                slideRef.current.style.transitionDuration = "0ms";
                slideRef.current.style.transform = `translate3d(-${(currentIndex * slideWidth)}px, 0px, 0px)`;
            }, 200);
        } else {
            slideRef.current.style.transitionDuration = "200ms";
            slideRef.current.style.transform = `translate3d(-${(currentIndex * slideWidth)}px, 0px, 0px)`;
        }
    }, [currentIndex])

    const handleTouchStart = (event: any) => {
        slideRef.current.startX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event: any) => {
        const diff = slideRef.current.startX - event.changedTouches[0].clientX;
        const slideWidth = slideRef.current.clientWidth;

        if (diff > slideWidth / 4) {
            nextSlide();
        } else if (diff < -slideWidth / 4) {
            prevSlide();
        } else {
            slideRef.current.style.transitionDuration = "300ms";
            slideRef.current.style.transform = `translate3d(-${(currentIndex * slideWidth)}px, 0px, 0px)`;
        }
    };

    const handleTouchMove = (event: any) => {
        const touch = event.touches[0];
        const diff = slideRef.current.startX - touch.clientX;
        const slideWidth = slideRef.current.clientWidth;
        slideRef.current.style.transform = `translate3d(-${(currentIndex * slideWidth) + diff}px, 0px, 0px)`;
    };

    return (
        <Wrapper>
            <div
                ref={slideRef}
                onTouchStart={children.length > 1 && swipeable ? handleTouchStart : undefined}
                onTouchEnd={children.length > 1 && swipeable ? handleTouchEnd : undefined}
                onTouchMove={children.length > 1 && swipeable ? handleTouchMove : undefined}
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                }}>
                {children.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: `${index * 100}%`,
                            width: "100%",
                            height: maxHeight ? maxHeight : "100%",
                            overflow: 'hidden',
                            // padding: "10px"
                        }}>
                        {item}
                    </div>
                ))}
            </div>
            {
                showIndicators && (
                    <Box css={{
                        position: "absolute",
                        bottom: indicatorsPosition === "outer" ? "10px" : "0px",
                        width: "100%",
                    }}>
                        <Indicator
                            indicatorCount={children.length}
                            activeIndex={currentIndex}
                            onClick={handleOnClickIndicator} />
                    </Box>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export default Carousel