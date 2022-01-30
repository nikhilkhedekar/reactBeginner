import React from 'react';

const Nav = (props) => {
    return(
        <div>
            { props.signIn === true ?
                <div>
                    <span>Home</span>
                    <span>About</span>
                    <span>User Profile</span>
                </div> : null }
            
        </div>
    )
}

export default Nav