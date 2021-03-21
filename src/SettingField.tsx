import React from "react";


type SettingFieldPropsType = {
    paragraph: string
    getValueInput: () => void
    maxValue: number
    startValue: number
}

export function SettingField(props: SettingFieldPropsType) {

    /*   let inputValue = (e:ChangeEventHandler<HTMLInputElement>)=>{ e.currentTarget.value}*/
    return (
        <div className={'row'}>
            <p>{props.paragraph} </p>
            <input className=
                       {((props.maxValue === props.startValue) || (props.maxValue < 0)) ? 'input-incorrect-value' : ''}
                   type="number"
                   onChange={props.getValueInput}/>
        </div>
    )
}