const SignIn = (props) => {
    return(
        <div>
            <h1>Sign In</h1>
            <input onChange={props.onChangeEmail} onBlur={props.onBlurEmail} value={props.emailState.value} />
            <input onChange={props.onChangePassword} onBlur={props.onBlurPassword} value={props.passwordState.value} />
            <button onClick={props.onClickSignIn} > Sign In </button>
            <span>{props.signInAuth}</span>
        </div>
    )
}

export default SignIn