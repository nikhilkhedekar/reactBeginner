import React from 'react';

const Header = (props) => {
    return(
        <div>
            { props.signOut === true ? <div> MEDlab </div> : props.signIn === true ? <div> WELCOME </div> : null }
        </div>
    )
}

export default Header