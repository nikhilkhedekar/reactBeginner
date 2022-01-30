import { useRef, forwardRef, useImperativeHandle, useEffect } from 'react'

const Input = forwardRef((props, ref) => {
    const callRef = useRef()
    const refHandler = () => {
        callRef.current.focus()
    }
    useImperativeHandle(ref, () => {
        return{
            focus: refHandler
        }
    })
    useEffect(() => {
        if (props.id === 'name' && !props.isValid){
            document.getElementById('name').style.backgroundColor = 'red'
        }else if(props.id === 'code' && !props.isValid){
            document.getElementById('code').style.backgroundColor = 'red'
        }else{
            return null
        }
    })
    return(
        <div>
            <input onChange={props.onChange} onBlur={props.onBlur} value={props.value} id={props.id} ref={callRef} />
        </div>
    )
})

export default Input