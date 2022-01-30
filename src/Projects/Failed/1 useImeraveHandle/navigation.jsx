import { useContext } from 'react'
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom'

import AuthContext from './authcontext'
import Home from './home'
import Contact from './contact'
import About from './about'

const Nav = () => {
    const ctx = useContext(AuthContext)
    return (
        <div>
            {ctx.isValid &&
                <Router>
                    <NavLink exact to='/' activeStyle={{ color: 'red' }}>Home</NavLink>
                    <NavLink to='/about' activeStyle={{ color: 'red' }}>About</NavLink>
                    <NavLink to='/contact' activeStyle={{ color: 'red' }}>Contact</NavLink>
                    <Route exact to='/' ><Home /></Route>
                    <Route to='/about' ><About /></Route>
                    <Route to='/contact' ><Contact /></Route>
                </Router>


            }
        </div>
    )
}

export default Nav