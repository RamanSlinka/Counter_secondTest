import React from "react";
import {Button} from "./Button";
import {SettingField} from "./SettingField";

type CounterSettingPropsType = {

    value: number

}

export function CounterSetting(props: CounterSettingPropsType) {
    return (
        <div className={'container'}>
            <div className={'setting-field'}>
                <SettingField paragraph={'max value :'}/>
                <SettingField paragraph={'start value :'}/>
            </div>
            <div className={'button-field'}>
                <Button title={'set'} onClick={() => {}} disabled={props.value === 5}/>
            </div>
        </div>
    )
}
