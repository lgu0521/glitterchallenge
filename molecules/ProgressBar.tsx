type Props = {
    percent: number;
    color: string;
    backgroundColor: string;
}

const ProgressBar = ({
    percent,
    color,
    backgroundColor
}: Props) => {
    
    return (
        <div style={{
            width: "100%",
            height: "1.5rem",
            borderRadius: "1rem",
            background: backgroundColor
        }}>
            <div style={{
                width: `${percent}%`,
                height: "1.5rem",
                borderRadius: "1rem",
                background: color
            }}></div>
        </div>
    )
}

export default ProgressBar;