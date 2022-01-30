import { Component } from 'react'

import SignIn from './signIn'
import Welcome from './welcome'

class App extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            validate: false,
        } 
    }
    onUsernameChange = (e) => {
        this.setState({username : e.target.value})
    }
    onUsernameBlur = () => {
        if(this.state.username.length > 8 && this.state.username.includes('@')){
            return null
        }else {
            return (
                <div>
                    WrongUsername
                </div>
            )
        }

    }
    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    } 
    onPasswordBlur = () => {
        if(this.state.password.length > 8 ){
            return null
        }else {
            return(
                <div>
                    RightPassword
                </div>
            )
        }
    }
    onClickHandler = () => {
        if(this.state.username.length > 8 && this.state.username.includes('@') && this.state.password.length > 8 ){
            this.setState({validate: true})
            return console.log(this.state.validate)
        }
    } 

    render() {
        const { username, password, validate } = this.state;
        return(
            <div>{!validate? 
                <SignIn onUsernameChange={this.onUsernameChange} onUsernameBlur={this.onUsernameBlur.bind(this)} usernameValue={username}
                onPasswordChange={this.onPasswordChange.bind(this)} onPasswordBlur={this.onPasswordBlur.bind(this)} passwordValue={password}
                onClickHandler={this.onClickHandler}  /> : null }
                {validate? 
                <Welcome /> : null }
            </div>
        )
    }
}

export default App