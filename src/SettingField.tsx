import React from "react";


type SettingFieldPropsType ={
    paragraph: string
    getValueInput:()=> void
}
export function SettingField (props: SettingFieldPropsType) {

 /*   let inputValue = (e:ChangeEventHandler<HTMLInputElement>)=>{ e.currentTarget.value}*/
    return (
        <div className={'row'}>
            <p>{props.paragraph} </p>
            <input type="number"
                   onChange={props.getValueInput}/>
        </div>
    )
}