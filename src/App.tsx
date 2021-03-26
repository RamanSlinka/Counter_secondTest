import React, {useEffect, useState} from 'react';

import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./CounterSetting";

function App() {

    let [value, setValue] = useState< number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [isSettings, setIsSettings] = useState<boolean>(true)



    const increment = () => {
        setValue(value + 1)
    }

    const resetValue = () => {
        setValue(startValue)
    }
    const setSetting = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        value = startValue
        setValue(value)
        setIsSettings(false)

    }


    const errorValue = 'Incorrect value!'
    const enterValue = 'enter values and press set ?'
    const errorIncorrectValue = ((startValue < 0) || (maxValue < 0)
        || (startValue === maxValue) || (startValue > maxValue))
    const errorInputMaxValue = ((maxValue < 0) || ((startValue === maxValue) && (maxValue !== 0)))
    const errorStartValue = ((startValue < 0) || ((startValue === maxValue) && (startValue !== 0)))



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
                errorIncorrectValue={errorIncorrectValue}
                errorInputMaxValue={errorInputMaxValue}
                errorStartValue={errorStartValue}
                setIsSettings={setIsSettings}

               />
            <Counter value={value}
                     startValue={startValue}
                     errorValue={errorValue}
                     enterValue={enterValue}
                     maxValue={maxValue}
                     increment={increment}
                     resetValue={resetValue}
                     errorIncorrectValue={errorIncorrectValue}
                     isSettings={isSettings}

            />
        </div>
    );
}

export default App;



