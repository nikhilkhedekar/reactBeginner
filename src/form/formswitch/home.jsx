import React from 'react'
import Header from './header'
import Nav from './navigation'
 
const Home = (props) => {
    return (
        <div>
            <Header signIn={props.signIn} isSignedIn={props.isSignedIn} />
           <Nav signIn={props.signIn} isSignedIn={props.isSignedIn} />
           <button onClick={props.isSignedOut} > Sign Out </button>
        </div>
    );
}
export default Home;
