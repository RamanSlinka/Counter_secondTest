import React, {useEffect, useState} from 'react';

import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./CounterSetting";

function App() {

    let [value, setValue] = useState< number>(0)

    let [maxValue, setMaxValue] = useState<number>(1)
    let [startValue, setStartValue] = useState<number>(1)



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

    }

    const errorIncorrectValue = ((startValue < 0) || (maxValue < 0) || (startValue === maxValue))
    const errorInputMaxValue = ((maxValue < 0) || (startValue === maxValue))
    const errorStartValue = ((startValue < 0) || (startValue === maxValue))

/*
    const setToLocalStorageHandler = () => {
        localStorage.setItem('convertValue', JSON.stringify(startValue))
        setSetting()
    }

    const getFormLocalStorage = () => {
        let minValueAsString = localStorage.getItem('minValueAsString')
        let maxValueAsString = localStorage.getItem('maxValueAsString')
        if (minValueAsString && maxValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            let newMaxValue = JSON.parse(maxValueAsString)
            setStartValue(newMinValue && newMaxValue)
        }
    }

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [ maxValue])

    useEffect(() => {
        let minValueAsString = localStorage.getItem('minValueAsString')
        if (minValueAsString ) {
            let newMinValue = JSON.parse(minValueAsString)
            setStartValue(newMinValue)
        }
    },[])


    useEffect(()=> {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    },[startValue])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValueAsString')
        if ( maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setStartValue( newMaxValue)
        }
    },[])*/




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

                /*setToLocalStorageHandler={setToLocalStorageHandler}*//>
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



