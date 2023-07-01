import React from "react"

type Props = {
    id?: string
    css?: React.CSSProperties
    children?: React.ReactNode[] | React.ReactNode
}

const Box = ({
    id,
    css,
    children,
    ...props
}: Props) => {

    return (
        <div id={id} style={css} {...props}>
            {children}
        </div>
    )
}

export default Box;