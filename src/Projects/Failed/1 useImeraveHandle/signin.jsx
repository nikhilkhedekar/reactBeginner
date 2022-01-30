import {  useRef } from 'react'

import Input from './input'

const SignIn = (props) => {
    const callName = useRef()
    const callCode = useRef() 

    return(
        <div>
            <form onSubmit={props.onSubmitHandler} >
            <Input onChange={props.nameChange} onBlur={props.nameBlur} value={props.nameValue} id='name' ref={callName} isValid={props.nameIsValid} />
            <Input onChange={props.codeChange} onBlur={props.codeBlur} value={props.codeValue} id='code' ref={callCode} isValid={props.codeIsValid} />
            <input type='submit' value='Sign In' />  
            </form>
        </div>
    )
}

export default SignIn