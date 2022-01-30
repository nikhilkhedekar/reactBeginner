import { createContext } from 'react'

const AuthContext = createContext({
    signIn: null,
    onClickSignIn: () => {},
    onClickSignOut: () => {},
})

export default AuthContext