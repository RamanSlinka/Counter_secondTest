import React from "react";
import {Button} from "./Button";
import {SettingField} from "./SettingField";

type CounterSettingPropsType = {
    setToLocalStorageHandler: () => void
    value: number
    getMaxValueFromInput:()=> void
    getStartValueFromInput: () => void
}

export function CounterSetting(props: CounterSettingPropsType) {
    return (
        <div className={'container'}>
            <div className={'setting-field'}>
                <SettingField paragraph={'max value :'}
                              getValueInput={props.getMaxValueFromInput}/>
                <SettingField paragraph={'start value :'}
                              getValueInput={props.getStartValueFromInput}/>
            </div>
            <div className={'button-field'}>
                <Button title={'set'} onClick={props.setToLocalStorageHandler}
                        disabled={props.value === 5}/>
            </div>
        </div>
    )
}
