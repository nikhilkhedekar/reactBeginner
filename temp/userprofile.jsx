import { useContext } from 'react'

import AuthContext from './authcontext.jsx'

const UserProfile = () => {
    const authCtx = useContext(AuthContext); 
    const passwordRef = useRef();
    const password = passwordRef.current.value
    const submitHandler = () => {
        fetch(    ,{
            method: 'POST',
            body: ({
                tokenId: authCtx.token,
                password: passwordRef,
                returnSecureToken: false,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            return response.json()
        })
    }
    return(
        <div>
            <form onSubmit={submitHandler} >
            <input ref={password} />
            <button>Create New Password</button>
            </form> 
        </div>
    )
}