import React, {ChangeEvent, FocusEventHandler} from "react";
import {Button} from "./Button";

type CounterSettingPropsType = {
    /* setToLocalStorageHandler: () => void*/

    maxValue: number
    startValue: number
    setSetting: () => void


    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    errorIncorrectValue: boolean
    errorInputMaxValue: boolean
    errorStartValue: boolean
}

export function CounterSetting(props: CounterSettingPropsType) {


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

                    />
                </div>

                <div className={'row'}>
                    <p>start value : </p>
                    <input
                        type="number"
                        className={props.errorStartValue
                            ? 'input-incorrect-value' : ''}

                        onChange={changeStartInput}
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
