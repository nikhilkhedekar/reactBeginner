import { useSelector, useDispatch } from 'react-redux'

const App = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    
    const incrementHandler = () => {
        dispatch({
            type: 'INCREMENT'
        })
    } 
    const decrementHandler = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    return(
        <div>
            <span>{count}</span>
            <button onClick={incrementHandler} > Increment </button>
            <button onClick={decrementHandler} > Decrement </button>
        </div>
    )
}

export default App