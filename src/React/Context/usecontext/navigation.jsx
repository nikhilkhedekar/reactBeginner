import { useContext } from 'react'

import AuthContext from './authcontext'

const Nav = () => {
    const ctx = useContext(AuthContext);
    return (
        <div>
            {ctx.signIn && <div>Home</div>}
            {ctx.signIn && <div>About</div>}
            {ctx.signIn && <div>Contact</div>}
        </div>
    )
}

export default Nav