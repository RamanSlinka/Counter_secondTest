import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./CounterSetting";

function App() {
    let [value, setValue] = useState<number>(0)                     // значение передаваемое на экран счётчика
    let [maxValue, setMaxValue] = useState<number>(0)            // значения макс. (input1)
    let [startValue, setStartValue] = useState<number>(0)            // значения стартовые (input2)


    const increment = () => {
        value =  startValue
        setValue(value + 1)                     // как выводить сообщение:  enter values and press 'set' ?

    }

    const resetValue = () => {
        setValue(0)
    }

    let valueInputMax = maxValue;
    console.log(valueInputMax)
    let valueInputStart = startValue;
    console.log(valueInputStart)

    /*   const setToLocalStorageHandler = () => {
           localStorage.setItem('convertValue', JSON.stringify(startValue))
           getFormLocalStorage()                            // как реализовать одной 'set' кнопкой  getSt. и setSt. ?
       }

       const getFormLocalStorage = () => {
           let valueAsString = localStorage.getItem('convertValue')
           if (valueAsString) {
               let newValue = JSON.parse(valueAsString)
               setStartValue(newValue)
           }
       }
   */


    return (
        <div className="App">
            <CounterSetting value={value}
                            maxValue={maxValue}
                            startValue={startValue}
                            setMaxValue={setMaxValue}
                            setStartValue={setStartValue}
                /* setToLocalStorageHandler={setToLocalStorageHandler}*//>
            <Counter value={value}
                     maxValue={maxValue}
                     increment={increment}
                     resetValue={resetValue}
            />
        </div>
    );
}

export default App;



