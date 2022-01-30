import { useContext } from 'react'

import AuthContext from './authcontext'
import SignOut from './signoutbutton'
import Nav from './navigation'

const Header = () => {
    const ctx = useContext(AuthContext)
    const header = <h1>Order Food</h1>
    return(
        <div>
            {!ctx.isValid && header}
            {ctx.isValid &&
            <div>
                {header}
                <SignOut />
            </div>
             }
             <Nav />
        </div>
    )
}

export default Header