import AuthContext from './authcontext'

const Nav = (props) => {
    return (
        <AuthContext.Consumer>
            {
                (ctx) => {
                    return (
                        <div>
                            {ctx.signIn && <div>Home</div>}
                            {ctx.signIn && <div>About</div>}
                            {ctx.signIn && <div>Contact</div>}
                        </div>
                    )
                }
            }
        </AuthContext.Consumer>
    )
}

export default Nav