import { createStore } from 'redux'

const counterReducer = (state = {counter: 0, toggle: true}, action) => {
    if(action.type === 'INCREMENT'){
        return{
            counter: state.counter + 1
        }
    }
    if(action.type === 'DECREMENT'){
        return{
            counter: state.counter - 1
        }
    }
    if(action.type === 'INCTEN'){
        return{
            counter: state.counter + action.incValue,
        }
    }
    if(action.type === 'TOGGLE'){
        return{
            toggle: state.toggle = false
        }
    }
    return {
        counter: state.counter,
        toggle: true
    }

}

const store = createStore(counterReducer);

export default store