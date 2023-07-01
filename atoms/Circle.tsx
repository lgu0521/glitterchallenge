import { theme } from "../styles/theme";


type CircleProps = {
    diameter: number;
    active: boolean;
    onClick: () => void;
};

const Circle = ({ diameter, active, onClick }: CircleProps) => {
    const strokeWidth = 2;
    const radius = diameter / 2 - strokeWidth;

    const activeStyle = {
        fill: active ? "#ffffff" : "rgba(9, 30, 66, 0.25)",
        stroke: active ? "#ffffff" : "rgba(9, 30, 66, 0.25)",
    };

    return (
        <svg
            width={diameter}
            height={diameter}
            onClick={onClick}
            style={{ cursor: "pointer" }}
        >
            <circle
                r={radius}
                cx={diameter / 2}
                cy={diameter / 2}
                strokeWidth={strokeWidth}
                style={activeStyle}
            />
        </svg>
    );
};

export default Circle