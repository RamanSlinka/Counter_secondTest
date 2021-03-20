import React from 'react';

import './App.css';

function App() {
    return (
        <div className="App">
            <CounterSetting/>
            <div></div>

        </div>
    );
}

export default App;

 function CounterSetting() {
    return (
        <div>
            <div>
                <p>max value</p>
                <input type="number"/>
                <p>start value</p>
                <input type="number"/>
            </div>
            <div>
                <button>set</button>
            </div>
        </div>
    )
}
export default  CounterSetting