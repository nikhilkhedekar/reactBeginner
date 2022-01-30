import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

const SignIn = () => {
    const [isLoadign, setIsLoading] = useState(false)
    const [isSignIn, setIsSignIn] = useState(true)
    const history = useHistory()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const username = username.current.value;
    const password = password.current.value;
    const switchSignIn = () => {
        setIsSignIn(prev => !prev)
    }


    const submitHandler = () => {
        setIsLoading(true)
        //const signInUrl =
        //const signUpUrl = 
        //const API_key = 
        if (isSignIn) {
            fetch(signInUrl);
        } else {
            fetch(signUpUrl, {
                method: 'POST',
                body: ({
                    username: username,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (response.ok) {
                        setIsLoading(false)
                        return response.json();
                    } else {
                        let errMsg = 'Request Failed'
                        throw new Error(errMsg)
                    }
                })
                .then((data) => {
                    const expirationTime = new Date(new Date().getTime() + (+expiresIn) * 1000);
                    authCtx.onSignIn({
                        data.tokenId,
                        expirationTime
                    })
                    history.replace('/')
                })
                .catch((err) => err.message)
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <input required ref={usernameRef} />
                <input required ref={passwordRef} />
                <button> {isSignIn? <div>SignIn</div> : <div>SignUp</div>} </button>
                <button> {isSignIn? <div>SignIn with your ACC</div> : <div>Create New Acc</div>} </button>
            </form>

        </div>
    )
}

export default SignIn