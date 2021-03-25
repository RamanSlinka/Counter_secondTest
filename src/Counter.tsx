import React from "react";
import {Button} from "./Button";


type CounterPropsType = {
    value: number
    errorValue: string
    enterValue: string
    maxValue: number
    increment: () => void
    resetValue: () => void
    errorIncorrectValue: boolean
    isSettings: boolean
}



export function Counter(props: CounterPropsType) {

    let valueSelection = () => {
        if (props.isSettings ) {
            return  props.enterValue
        } else if (props.errorIncorrectValue ) {
            return props.errorValue
        } else {
            return  props.value
        }
    }



    const error = (props.value === props.maxValue)
    return (
        <div className={'container'}>
            <div className={'setting-field'}>
                <h2 className={error ? 'red' : ''}>
                    {valueSelection}
                    {/*{props.isSettings ? props.enterValue : props.value}*/}
                   {/* {props.isSettings ? props.errorIncorrectValue : props.value}*/}
                    {/*{props.value || props.errorValue || props.enterValue}*/}
                </h2>
            </div>
            <div className={'button-field'}>
                <Button title={'inc'}
                        onClick={props.increment}
                        disabled={props.value === props.maxValue || props.errorIncorrectValue || error} />
                <Button title={'reset'}
                        onClick={props.resetValue}
                        disabled={(props.errorIncorrectValue)}/>
            </div>
        </div>
    )
}
