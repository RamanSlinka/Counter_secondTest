import React from "react";


type SettingFieldPropsType ={
    paragraph: string
}
export function SettingField (props: SettingFieldPropsType) {
    return (
        <div className={'row'}>
            <p>{props.paragraph} </p>
            <input type="number"/>
        </div>
    )
}