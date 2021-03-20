import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./CounterSetting";

function App() {
    let [value, setValue] = useState(0)
    const increment = () => {setValue(value + 1)}
    const resetValue = () => { setValue(0)}





    return (
        <div className="App">
            <CounterSetting value={value}/>
            <Counter value={value} increment={increment} resetValue={resetValue} />
        </div>
    );
}

export default App;



