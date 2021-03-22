import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./CounterSetting";

function App() {

    let [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState(false)


    const increment = () => {
        setMaxValue(maxValue)
        if (value < maxValue) {
            setValue(value + 1)                  // как выводить сообщение:  enter values and press 'set' ?
        }
    }
    const resetValue = () => {
        setValue(0)
    }
    const setSetting = () => {
        setStartValue(startValue)
        value = startValue
        setValue(value)
        getFormLocalStorage()
    }

    const getError = () => {
    }                   //setError(error)

    const errorIncorrectValue = ((startValue < 0) || (maxValue < 0)
        || (startValue === maxValue))
    const errorInputMaxValue = ((maxValue < 0) || (startValue === maxValue))
    const errorStartValue = ((startValue < 0) || (startValue === maxValue))


       const setToLocalStorageHandler = () => {
           localStorage.setItem('convertValue', JSON.stringify(startValue))
           setSetting()                          // как реализовать одной 'set' кнопкой  getSt. и setSt. ?
       }

       const getFormLocalStorage = () => {
           let valueAsString = localStorage.getItem('convertValue')
           if (valueAsString) {
               let newValue = JSON.parse(valueAsString)
               setStartValue(newValue)
           }
       }


    return (
        <div className="App">
            <CounterSetting
                maxValue={maxValue}
                startValue={startValue}
                setSetting={setSetting}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                errorIncorrectValue={errorIncorrectValue}
                errorInputMaxValue={errorInputMaxValue}
                errorStartValue={errorStartValue}
                 setToLocalStorageHandler={setToLocalStorageHandler}/>
            <Counter value={value}
                     maxValue={maxValue}
                     increment={increment}
                     resetValue={resetValue}
                     errorIncorrectValue={errorIncorrectValue}


            />
        </div>
    );
}

export default App;



