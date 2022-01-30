import { createContext } from 'react'

const AuthContext = createContext({
    token: '',
    isSignedIn: false,
    onSignIn: (token, expirationTime) => {},
    onSignOut: () => {},
})