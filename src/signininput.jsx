import { forwardRef, useRef, useEffect, useImperativeHandle } from 'react'
 
const SignInInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    const inputHandler = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref, () => {
        return{
            focus: inputHandler,
        }
    })
    useEffect(() => {
        if(props.hasError && props.id === 'username'){
            document.getElementById('username').style.backgroundColor = 'red'
        }else if(props.hasError && props.id === 'password'){
            document.getElementById('password').style.backgroundColor = 'red'
        }else{
            return;
        }
    })
    return(
        <div>
            <input ref={inputRef} onChange={props.onChange} onBlur={props.onBlur} value={props.value} id={props.id} />
        </div>
    )
})

export default SignInInput