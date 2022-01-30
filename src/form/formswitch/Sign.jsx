import React, { useState } from 'react';
import SignIn from './signin';
import Home from './home';

const App = () => {
    const [signIn, setSignIn] = useState(false)
    const [signOut, setSignOut] = useState(true)
    const signInHandler = () => {
        if (signIn === false && signOut === true){
            setSignIn(true)
            setSignOut(false)
            console.log(' sign in ' + signIn + ' sign out ' + signOut )   
        }
    }
    const signOutHandler = () => {
        if (signOut === false && signIn === true){
            setSignOut(true)
            setSignIn(false)
            console.log(' sign out ' + signOut + ' sign in ' + signIn )
        }
    }
    return(
        <div>
                { signOut === true ? 
                <SignIn isSignedIn={signInHandler} isSignedOut={signOutHandler} signIn={signIn} signOut={signOut} /> : 
                signOut === false ? 
                <Home isSignedOut={signOutHandler} isSignedIn={signInHandler} signIn={signIn} signOut={signOut} /> : 
                null }

        </div>
    )
}

export default App