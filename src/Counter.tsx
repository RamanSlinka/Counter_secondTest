import React from "react";
import {Button} from "./Button";


type CounterPropsType = {
    value: number
    increment: () => void
    resetValue: () => void

}
export function Counter(props: CounterPropsType) {
    return (
        <div className={'container'}>
            <div className={'setting-field'}>
                <h2 className={props.value === 5 ? 'red' : ''}>{props.value}</h2>
            </div>
            <div className={'button-field'}>
                <Button title={'inc'} onClick={props.increment} disabled={props.value === 5} />
                <Button title={'reset'}  onClick={props.resetValue} disabled={props.value < 5}/>

            </div>
        </div>
    )
}
