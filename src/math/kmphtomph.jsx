import React, { useState } from 'react';

const App = () => {
    const [val, setVal] = useState(0);
    const [result, setResult] = useState(0);
    function onChangeHandler(e) {
        setVal(e.target.value)
    }
    function onClickHandler() {
        setResult((5 / 18) * val);
        return (
            <div>
                { val > 200 ? <div>Invalid Input</div> : result }
            </div>
        );
    }
    const Out = onClickHandler;
    return (
        <div>
            <h1>KMPH to MPH</h1>
            <input onChange={onChangeHandler} value={val} type="number" />
            <h2> <Out /> </h2>
            <button onClick={onClickHandler} > Enter </button>
        </div>

    );
}

export default App;