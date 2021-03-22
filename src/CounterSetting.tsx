import React, {ChangeEvent} from "react";
import {Button} from "./Button";

type CounterSettingPropsType = {
    /* setToLocalStorageHandler: () => void*/
    value: number
    maxValue: number
    startValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
}

export function CounterSetting(props: CounterSettingPropsType) {
    let changeStartInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
    }

    let changeMaxInput2 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
    }


    return (
        <div className={'container'}>
            <div className={'setting-field'}>
                <div className={'row'}>
                    <p>'max value :' </p>
                    <input
                        // className={((props.maxValue === props.startValue) || (props.maxValue < 0)) ? 'input-incorrect-value' : ''}
                        type="number"
                        /*value={props.maxValue}*/
                        onChange={changeMaxInput2}/>
                </div>
                <div className={'row'}>
                    <p>'start value :' </p>
                    <input
                        // className={((props.maxValue === props.startValue) || (props.maxValue < 0)) ? 'input-incorrect-value' : ''}
                        type="number"
                        /*value={props.startValue}*/
                        onChange={changeStartInput}
                        />
                </div>


            </div>
            <div className={'button-field'}>
                <Button title={'set'}
                        onClick={() => {
                        }}
                        disabled={false}
                    /* onClick={props.setToLocalStorageHandler}*/
                    /*disabled={((props.maxValue < 0) && (props.startValue === props.maxValue))}*//>
            </div>
        </div>
    )
}
