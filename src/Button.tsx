import React from "react";
import './App.css'

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

export function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.onClick} className='button'
                disabled={props.disabled}>{props.title}</button>
    )
}