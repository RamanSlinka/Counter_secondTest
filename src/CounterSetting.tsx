import React, {ChangeEvent, FocusEventHandler} from "react";
import {Button} from "./Button";



type CounterSettingPropsType = {
    maxValue: number
    startValue: number
    setSetting: () => void
    setError: (value: boolean) => void
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    errorIncorrectValue: boolean
    errorInputMaxValue: boolean
    errorStartValue: boolean
}

export function CounterSetting(props: CounterSettingPropsType) {

    let errorHandler = (e: FocusEventHandler<HTMLInputElement>) => {
        props.setError(e.currentTarget.value)
    }

    let changeMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    let changeStartInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
    }



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
                        onBlur={errorHandler}

                    />
                </div>

                <div className={'row'}>
                    <p>start value : </p>
                    <input
                        type="number"
                        className={props.errorStartValue
                            ? 'input-incorrect-value' : ''}
                        onChange={changeStartInput}
                        onBlur={errorHandler}
                    />
                </div>


            </div>
            <div className={'button-field'}>
                <Button title={'set'}
                        onClick={props.setSetting}
                     /*onClick={props.setToLocalStorageHandler}*/
                        disabled={props.errorIncorrectValue}/>
            </div>
        </div>
    )
}
