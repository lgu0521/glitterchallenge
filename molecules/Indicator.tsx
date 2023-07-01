import Circle from "../atoms/Circle";
import styled from "styled-components";

type IndicatorProps = {
    indicatorCount: number;
    activeIndex: number;
    onClick: (index: number) => void;
};

const Indicator = ({
    indicatorCount,
    activeIndex,
    onClick
}: IndicatorProps) => {
    const indexes = Array.from(Array(indicatorCount).keys());  // [0, 1, 2, ...childrenCount-1]

    return (
        <Wrap>
            {indexes.map((index) => (
                <Button key={index}>
                    <Circle
                        diameter={10}
                        onClick={() => onClick(index)}
                        active={index === activeIndex} />
                </Button>
            ))}
        </Wrap>
    );
};

const Wrap = styled.div`
    width: 100%;
    margin: 2rem 0;
    text-align: center;
`

const Button = styled.button`
    padding: 0px;
    margin: 0px;
    border: 0px;
    background: none;
    margin-right: 1rem;
`

export default Indicator