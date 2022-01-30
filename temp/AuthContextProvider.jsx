import { useContext } from 'react'

import AuthContext from './authcontext'

const calculateTime = (expirationTime) => {
    const currentTime = new Date().getTime()
    const expiredTime = expirationTime
    const remainingTime = expiredTime - currentTime
}

const storedToken = () => {
    const token = localStorage.getItem('token')
    const expirationTime = localstorage.getItem('expirationTime')
    const remainingTime = calculateTime(expirationTime)
    if(remainingTime <= 3000){
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
    } 
    return{
        token: token,
        duration: remainingTime
    }
}

const AuthContextProvider = () => {
    const AuthCtx = useContext(AuthContext)
    const tokenData = storedToken
    let initialToken
    let TimeOut
    let TimeOutTimer
    if(tokenData){
        initialToken = tokenData
    }
    const [token, setToken] = useState(initialToken)
    
    const isSignedIn = !!token


    const signInHandler = (token, expirationTime) => {
        setToken('token')
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)
        const remainingTime = calculateTime(expirationTime)
        TimeOut = 
            setTimeout(signOutHandler, remainingTime)
        useEffect(() => {
            TimeOutTimer = setTimeout(signOutHandler, storedToken.duration)
        }, [])
        
    }
    const signOutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        if(TimeOut){
            clearTimeout(TimeOutTimer)
        }
    }

    const authcontextProvider = {
        token: token,
        isSignedIn: isSignedIn,
        onSignIn: signInHandler,
        onSignOut: signOutHandler
    }
    return(
        <AuthContext value={authcontextProvider} >
            {props.children}
        </AuthContext>
    )
}