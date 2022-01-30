import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import './navigation.css'

const Nav = (props) => (
    <BrowserRouter>
        <div className='nav' >
            <NavLink to='/'
                onClick={props.rootHome} activeStyle={{ color: 'red' }} className='home'> Home </NavLink>
            <NavLink to='/about.jsx'
                activeStyle={{ color: 'red' }} className='about'> About </NavLink>
            <NavLink to='/contact.jsx'
                activeStyle={{ color: 'red' }} className='contact'> Contact </NavLink>

            <Route exact path='/'
                component={Home} />
            <Route exact path='/about.jsx'
                component={About} />
            <Route exact path='/contact.jsx'
                component={Contact} />
        </div>
    </BrowserRouter>
)


export default Nav
