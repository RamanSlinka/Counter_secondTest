import React, {ChangeEventHandler, useState} from 'react';

import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./CounterSetting";

function App() {
    let [value, setValue] = useState(0)                     // значение передаваемое на экран счётчика
    let [maxValue, setMaxValue] = useState(0)            // значения макс. (input1)
    let [startValue, setStartValue] = useState(0)            // значения стартовые (input2)


    const increment = () => {
         startValue = value;
        setValue(value + 1)                     // как выводить сообщение:  enter values and press 'set' ?
        if ((value < 0) || (maxValue === startValue)) {
            return 'Incorrect value !'
        }
    }

    const resetValue = () => {
        setValue(0)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('convertValue', JSON.stringify(startValue))
        getFormLocalStorage()                            // как реализовать одной 'set' кнопкой  getSt. и setSt. ?
    }

    const getFormLocalStorage = () => {
        let valueAsString = localStorage.getItem('convertValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    let getMaxValueFromInput = (e: ChangeEventHandler<HTMLInputElement>) =>
        setMaxValue(e.currentTarget.value)

    let getStartValueFromInput = (e: ChangeEventHandler<HTMLInputElement>) =>
        setStartValue(e.currentTarget.value)


    return (
        <div className="App">
            <CounterSetting value={value}
                            maxValue={maxValue}
                            startValue={startValue}
                            getMaxValueFromInput={getMaxValueFromInput}
                            getStartValueFromInput={getStartValueFromInput}
                            setToLocalStorageHandler={setToLocalStorageHandler}/>
            <Counter value={value}
                     maxValue={maxValue}
                     increment={increment}
                     resetValue={resetValue}
            />
        </div>
    );
}

export default App;



