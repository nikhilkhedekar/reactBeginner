import { Route } from 'react-router-dom'

import User from './user'

const Welcome = () => {
    return(
        <div>

            <div>
            Welcome
            </div>
            <section>
            <Route to='/welcome/new-user' exact>
                <User />
            </Route>
            </section>
            
        </div>
    )
}

export default Welcome