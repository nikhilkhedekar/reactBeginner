import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
    return(
        <div>
            <label htmlFor={props.id} > {props.label} </label>
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default Input