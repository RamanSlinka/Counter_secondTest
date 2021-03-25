import React, {ChangeEvent} from "react";
import {Button} from "./Button";


type CounterSettingPropsType = {
    maxValue: number
    startValue: number
    setSetting: () => void
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    errorIncorrectValue: boolean
    errorInputMaxValue: boolean
    errorStartValue: boolean
    setIsSettings: any
}

export function CounterSetting(props: CounterSettingPropsType) {

    let setIsSettings = () => {
        debugger
        props.setIsSettings(true)
    }

    let changeMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    let changeStartInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
    }

    debugger

    return (
        <div className={'container'}>
            <div className={'setting-field'}>
                <div className={'row'}>
                    <p>max value : </p>
                    <input
                        className={props.errorInputMaxValue
                            ? 'input-incorrect-value' : ''}
                        type="number"
                        onChange={changeMaxInput}
                        value={props.maxValue}
                        onFocus={setIsSettings}
                    />
                </div>

                <div className={'row'}>
                    <p>start value : </p>
                    <input
                        type="number"
                        className={props.errorStartValue
                            ? 'input-incorrect-value' : ''}
                        onChange={changeStartInput}
                        value={props.startValue}
                        onFocus={setIsSettings}
                    />
                </div>


            </div>
            <div className={'button-field'}>
                <Button title={'set'}
                        onClick={props.setSetting}
                        disabled={props.errorIncorrectValue}/>
            </div>
        </div>
    )
}
