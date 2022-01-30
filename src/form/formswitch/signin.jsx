import React from 'react';
import Header from './header'

const SignIn = (props) => {
    return(
        <div>
            <Header signOut={props.signOut} isSignedOut={props.isSignedOut} />
            <input placeholder="username" />
            <input placeholder="password" />
            <button onClick={props.isSignedIn} > Sign In </button>
        </div>
    )
}

export default SignIn;