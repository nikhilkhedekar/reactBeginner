import { Component } from 'react'

class SignIn extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>

                <input onChange={this.props.onUsernameChange} onBlur={this.props.onUsernameBlur} value={this.props.usernameValue} />
                <input onChange={this.props.onPasswordChange} onBlur={this.props.onPasswordBlur} value={this.props.passwordValue} />
                <button onClick={this.props.onClickHandler} > SignIn </button>

            </div>
        )
    }
}

export default SignIn