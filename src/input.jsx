import { useRef, forwardRef, useImperativeHandle } from 'react'

const Input = forwardRef((props, ref) => {
    const callRef = useRef()
    const focusHandle = () => {
        callRef.current.focus()
    }
    useImperativeHandle(ref,() => {
        return{
            focus: focusHandle
        }
    })
    const validHandler = () =>{
        if(props.id === 'name' && !props.isValid){
            document.getElementById('name').style.backgroundColor = 'red'
        }else{
            document.getElementById('code').style.backgroundColor = 'red'
        }
    }
    return(
        <div>
            <input ref={callRef} 
            onChange={props.onChange}
            onBlur={validHandler}
            value={props.value}
            id={props.id}

            />
        </div>
    )
})

export default Input