import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

type Props = {
    /**
     * 커스텀 CSS
     */
    css?: React.CSSProperties
    /**
     * 열림 여부
     */
    open?: boolean
    /**
     * 닫기
     */
    onClose?: () => void
    /**
     * 클릭 이벤트
     */
    onClick?: () => void
    /**
     * 자식 NODE
     */
    children?: React.ReactNode[] | React.ReactNode
    /**
     * 높이
     * @default 100%
     */
    height?: string
}

const Backdrop = ({
    css,
    open,
    onClick,
    children,
    onClose,
    height,
    ...props
}: Props) => {

    const draw = {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0,
            display: "none"
        },
    };


    return (
        <AnimatePresence>
            {
                open &&
                <motion.div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 99999,
                }}

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    variants={draw}>
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            position: "relative",
                            backgroundColor: "rgb(9, 30, 66, 0.6)",
                        }} >
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: height ? height : "100%",
                                bottom: 0,
                                left: 0
                            }} >
                            {children}
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Backdrop;