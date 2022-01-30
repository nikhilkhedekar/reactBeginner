import { useReducer, useState, useEffect } from 'react'

import { nameReducer, codeReducer } from './reducer'
import SignIn from './signin'
import Home from './home'
import AuthContext from './authcontext'
import Header from './header'

const App = () => {
    const [name, dispName] = useReducer(nameReducer, {
        value: '',
        isValid: false,
    })
    const [code, dispCode] = useReducer(codeReducer, {
        value: '',
        isValid: false,
    })
    const [validForm, setValidForm] = useState(false)


    const nameChange = (e) => {
        dispName({
            type: 'NAME_CHANGE',
            val: e.target.value,
        })
    }
    const nameBlur = () => {
        dispName({
            type: 'NAME_BLUR'
        })
    }

    const codeChange = (e) => {
        dispCode({
            type: 'CODE_CHANGE',
            val: e.target.value,
        })
    }
    const codeBlur = () => {
        dispCode({
            type: 'CODE_BLUR'
        })
    }

    useEffect(() => {
        const userSession = localStorage.getItem('user')
        if (userSession === 'isLoggedIn') {
            setValidForm(true)
        }
    },[])

    const signOutHandler = () => {
        setValidForm(false)
        localStorage.removeItem('user')
    }


    const signInHandler = (e) => {
        e.preventDefault();
        if (name.isValid && code.isValid) {
            setValidForm(true)
            localStorage.setItem('user', 'isLoggedIn')
        } else {
            setValidForm(false)
        }
        
        console.log(validForm)
    }
    return (
        <AuthContext.Provider value={{
            isValid: validForm,
            onSignIn: signInHandler,
            onSignOut: signOutHandler,
        }}>
            <Header />
            {!validForm && <SignIn nameValue={name.value} codeValue={code.value}
                nameChange={nameChange} nameBlur={nameBlur}
                codeChange={codeChange} codeBlur={codeBlur}
                onSubmitHandler={signInHandler}
                nameIsValid={name.isValid} codeIsValid={code.isValid} /> }
            {validForm && <Home /> }
        </AuthContext.Provider>
    )
}

export default App