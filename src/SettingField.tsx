import React, {ChangeEventHandler} from "react";


type SettingFieldPropsType ={
    paragraph: string
}
export function SettingField (props: SettingFieldPropsType) {

 /*   let inputValue = (e:ChangeEventHandler<HTMLInputElement>)=>{ e.currentTarget.value}*/
    return (
        <div className={'row'}>
            <p>{props.paragraph} </p>
            <input type="number"
                  /* onChange={inputValue}*//>
        </div>
    )
}