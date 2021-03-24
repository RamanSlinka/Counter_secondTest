import React, {useEffect, useState} from 'react';

import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./CounterSetting";

function App() {

    let [value, setValue] = useState< number>(0)

    let [maxValue, setMaxValue] = useState<number>(1)
    let [startValue, setStartValue] = useState<number>(1)
    let [error, setError] = useState<boolean>(false)



    const increment = () => {
        setMaxValue(maxValue)
        if (errorIncorrectValue) {
            return errorValue
        } else if (!error) {
            return  enterValue
        }
        else if (value < maxValue) {
            setValue(value + 1)            // как выводить сообщение:  enter values and press 'set' ?
        }
    }

    const resetValue = () => {
        setValue(0)
    }
    const setSetting = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        value = startValue
        setValue(value)
    }


    const errorValue = 'Incorrect value!'
    const enterValue = 'enter values and press set ?'
    const errorIncorrectValue = ((startValue < 0) || (maxValue < 0) || (startValue === maxValue))
    const errorInputMaxValue = ((maxValue < 0) || (startValue === maxValue))
    const errorStartValue = ((startValue < 0) || (startValue === maxValue))

  /*  const setToLocalStorageHandler = () => {
        localStorage.setItem('convertValue', JSON.stringify(startValue))

    }

    const getFormLocalStorage = () => {
        let minValueAsString = localStorage.getItem('minValueAsString')
        let maxValueAsString = localStorage.getItem('maxValueAsString')
        if (minValueAsString && maxValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            let newMaxValue = JSON.parse(maxValueAsString)
            setStartValue(newMinValue && newMaxValue)
        }
    }*/

    useEffect(() => {

        let maxValueAsString = localStorage.getItem('maxValue')
        if ( maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue( newMaxValue)
        }
    },[])

    useEffect(() => {

        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [ maxValue])

    useEffect(() => {

        let minValueAsString = localStorage.getItem('startValue')
        if (minValueAsString ) {
            let newMinValue = JSON.parse(minValueAsString)
            setStartValue(newMinValue)
        }
    },[])

    useEffect(()=> {

        localStorage.setItem('startValue', JSON.stringify(startValue))
    },[startValue])






    return (
        <div className="App">
            <CounterSetting
                maxValue={maxValue}
                startValue={startValue}
                setSetting={setSetting}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setError={setError}
                errorIncorrectValue={errorIncorrectValue}
                errorInputMaxValue={errorInputMaxValue}
                errorStartValue={errorStartValue}

               />
            <Counter value={value}
                     errorValue={errorValue}
                     maxValue={maxValue}
                     increment={increment}
                     resetValue={resetValue}
                     errorIncorrectValue={errorIncorrectValue}

            />
        </div>
    );
}

export default App;



