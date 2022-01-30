import { useState, useReducer } from 'react'

import { reducerPassword, reducerEmail } from './actions'
import SignIn from './signin'
import Home from './home'
import AuthContext from './authcontext'


const App = () => {
    
    const [signIn, setSignIn] = useState(false)
    
    const [signInAuth, setSignInAuth] = useState('')
    const [emailState, dispatchEmail] = useReducer(reducerEmail, {
        value: '',
        validEmail: false,
    })
    const [passwordState, dispatchPassword] = useReducer(reducerPassword, {
        value: '',
        validPassword: false
    })
    const onChangeEmail = (e) => {
        dispatchEmail({
            emailValue: e.target.value,
            type: 'EMAIL_CHANGE'
        })
    }
    const onBlurEmail = () => {
        dispatchEmail({
            type: 'EMAIL_BLUR'
        })
    } 
    const onChangePassword = (e) => {
        dispatchPassword({
            passwordValue: e.target.value,
            type: 'PASSWORD_CHANGE'
        })
    }
    const onBlurPassword = () => {
        dispatchPassword({
            type: 'PASSWORD_BLUR'
        })
    }

    const onClickSignIn = () => {
        if(emailState.validEmail && passwordState.validPassword){
            setSignIn(true)
            setSignInAuth('signedIn')

        }else{
            setSignIn(false)
            setSignInAuth('plsSignin')
        }
     
    }

    const onClickSignOut = () => {
        setSignIn(false)
        console.log(signIn)
    }
    
    return(
        <AuthContext.Provider value = {{
            signIn: signIn,
            onClickSignIn: onClickSignIn,
            onClickSignOut: onClickSignOut,
        }}>
            {!signIn?
            <SignIn onChangeEmail={onChangeEmail} 
            onBlurEmail={onBlurEmail} 
            onChangePassword={onChangePassword} 
            onBlurPassword={onBlurPassword} 
            onClickSignIn={onClickSignIn}
            emailState={emailState}
            passwordState={passwordState}
            signInAuth={signInAuth}
            signIn={signIn} /> : null
            }
            {signIn? 
            <Home signIn={signIn} onClickSignOut={onClickSignOut} /> : null }
        </AuthContext.Provider>
            
        
    )
}

export default App