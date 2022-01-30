import { forwardRef } from 'react'

const MealInput = forwardRef((props, ref) => {
    return(
        <div>
             <label htmlFor={props.input.id} > {props.label} </label>
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default MealInput