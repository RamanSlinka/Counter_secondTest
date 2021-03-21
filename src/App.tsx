import React, {ChangeEventHandler, useState} from 'react';

import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./CounterSetting";

function App() {
    let [value, setValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)


    const increment = () => {setValue(value + 1)
    if (value === maxValue) {
        return maxValue
    }}
    const resetValue = () => { setValue(0)}

const setToLocalStorageHandler = () => {
        localStorage.setItem('convertValue', JSON.stringify(value))
    getFormLocalStorage()
}

const getFormLocalStorage = () => {
        let valueAsString = localStorage.getItem('convertValue')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        setValue(newValue)
    }
}

let getMaxValueFromInput = (e:ChangeEventHandler<HTMLInputElement>) =>
    setMaxValue(e.currentTarget.value)

    let getStartValueFromInput = (e:ChangeEventHandler<HTMLInputElement>) =>
    setValue(e.currentTarget.value)


    return (
        <div className="App">
            <CounterSetting value={value}
                            getMaxValueFromInput={getMaxValueFromInput}
                            getStartValueFromInput={getStartValueFromInput}
                            setToLocalStorageHandler={setToLocalStorageHandler}/>
            <Counter value={value}
                     increment={increment}
                     resetValue={resetValue}
                     />
        </div>
    );
}

export default App;



