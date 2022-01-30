import {createContext} from 'react'

const SignInContext = createContext({
    onSignIn: () => {},
    onSignOut: () => {},
    isValid: false,
})

export default SignInContext