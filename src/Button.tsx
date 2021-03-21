import React from "react";

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

export function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.onClick}
                disabled={props.disabled}>{props.title}</button>
    )
}