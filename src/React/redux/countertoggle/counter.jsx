import { useSelector, useDispatch } from 'react-redux'

const App = () => {
    const counter = useSelector(state => state.counter);
    const toggle = useSelector(state => state.toggle);
    const dispatchCounter = useDispatch();
    
    const incrementHandler = () => {
        dispatchCounter({
            type: 'INCREMENT',
        })
    }
    const decrementHandler = () => {
        dispatchCounter({
            type: 'DECREMENT',
        })
    }
    const incTenHandler = () => {
        dispatchCounter({
            type: 'INCTEN',
            incValue: 10,
        })
    }
    const toggleButton = () =>{
        dispatchCounter({
            type: 'TOGGLE',
        })
    }
    return(
    <div>
        <h1>{counter}</h1>
        <button onClick={incrementHandler} > Increment </button>
        <button onClick={decrementHandler} > Decrement </button>
        <button onClick={incTenHandler} > Increment By 10 </button>
        <button onClick={toggleButton} > Toggle </button>
    </div>
    )
}

export default App