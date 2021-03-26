import React from "react";
import {Button} from "./Button";


type CounterPropsType = {
    value: number
    startValue: number
    errorValue: string
    enterValue: string
    maxValue: number
    increment: () => void
    resetValue: () => void
    errorIncorrectValue: boolean
    isSettings: boolean
}


export function Counter(props: CounterPropsType) {

    const displayValue = () => {
        if (props.errorIncorrectValue) {
            return props.errorValue
        } else if (props.isSettings){
            return  props.enterValue
        } else {
            return props.value || props.startValue
        }
    }

    const error = (props.value === props.maxValue)

    return (
        <div className={'container'}>
            <div className={'setting-field'}>
                <h2 className={(error && !props.isSettings)? 'red' : ''}>
                    {displayValue()}
                </h2>
            </div>
            <div className={'button-field'}>
                <Button title={'inc'}
                        onClick={props.increment}
                        disabled={props.value === props.maxValue || props.errorIncorrectValue || error}/>
                <Button title={'reset'}
                        onClick={props.resetValue}
                        disabled={(props.errorIncorrectValue)}/>
            </div>
        </div>
    )
}
