import React from "react";
import {Button} from "./Button";


type CounterPropsType = {
    value: number
    maxValue: number
    increment: () => void
    resetValue: () => void
    errorIncorrectValue: boolean
}



export function Counter(props: CounterPropsType) {

    const error = (props.value === props.maxValue)
    return (
        <div className={'container'}>
            <div className={'setting-field'}>
                <h2 className={error ? 'red' : ''}>{props.value}</h2>
            </div>
            <div className={'button-field'}>
                <Button title={'inc'}
                        onClick={props.increment}
                        disabled={props.value === props.maxValue} />
                <Button title={'reset'}
                        onClick={props.resetValue}
                        disabled={(props.errorIncorrectValue && error)}/>
            </div>
        </div>
    )
}
