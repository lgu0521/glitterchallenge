import { motion, PanInfo, useAnimation } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

type Props = {
    children: React.ReactNode
}

const SwipeableDrawer = ({
    children
}: Props) => {
    const controls = useAnimation();

    function onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
        const shouldClose =
            info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
        if (shouldClose) {
            controls.start("hidden");
        } else {
            controls.start("visible");
        }
    }

    useEffect(() => {
        controls.start("start");
    }, [controls]);

    return (
        <motion.div
            drag="y"
            dragElastic={{ top: 0, bottom: 0.3 }}
            onDragEnd={onDragEnd}
            initial="hidden"
            animate={controls}
            transition={{
                type: "spring",
                damping: 40,
                stiffness: 400
            }}
            variants={{
                start : { y:"50%" },
                visible: { y: "15%" },
                hidden: { y: "60%" }
            }}
            dragConstraints={{ top: 0 }}
            style={{
                position: "absolute",
                bottom: 0,
                display: "inline-block",
                backgroundColor: "white",
                width: "100%",
                height: "fit-content",
                zIndex: 99999,
                borderTopLeftRadius: "1.6rem",
                borderTopRightRadius: "1.6rem",
                cursor: "s-resize"
            }}>
            {/* <Header>
                <img src={CloseIcon} />
            </Header> */}
            {children}
        </motion.div>
    );
}


const Header = styled.div`
    height: 4.8rem;
    display: flex;
    justify-content: flex-end;
    padding: 1.3rem 1.6rem;
`
export default SwipeableDrawer