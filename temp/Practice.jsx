import React from 'react';


class Pract extends React.Component {
    constructor(){
        super();
        
        
        
    }
    render() {
        return(
            <div>
                <Header/>
                <NavigationBar/>
                <Article/>
                <SignUp/>
                <Footer/>
            </div>
        );
    }
}
class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            header : 'i am header'
        }
  //      this.headerRef = React.createRef();
        this.headerOnClickHandler = this.headerOnClickHandler.bind(this); 
    }
    headerOnClickHandler(){
        this.setState(this.state.header);
    }
    render() {
        return(
            <div>

                <a href="#" head = {this.headerOnClickHandler}> Header </a>
            </div> 
        ) 
        
    }
}
class NavigationBar extends React.Component {
    render() {
        return <div>Nav</div>
    }
} 
class Article extends React.Component {
    render() {
        return (
            <h3>Article</h3>
        )
    }
}
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            signin : '',
            out : '',
            signup : ''
        }
        this.signInHandle = this.signInHandle.bind(this);
        this.signUpHandle = this.signUpHandle.bind(this);
        
    }
    signInHandle(){
        var update = 'your signed in';
        var signOut = 'your signed out';
        const timeout = setTimeout(() => {
            this.setState({
                signIn : signOut
            });
                
        },3000 )
        this.setState({ 
            signin : update,
            out : timeout
        });
        
    }
    signUpHandle(){
        
        var update = 'your signed up';
        this.setState({ 
            isSignUp : false,
            signup : update 
        });
    }
    
    render() {
        return(
            <div>
                <input placeholder="username"/>
                <br/>
                <input placeholder="password" type="password"/>
                <br/>
                <div>{this.logInHandle}
                <button onClick = {this.signInHandle}> Log In </button>
                <div>status: {this.state.signin}</div>
                <br/>
                <button onClick = {this.signUpHandle}> Sign Up </button>
                <div>status: {this.state.signup}</div>
                <br/>
                </div>
            </div>
        );
    }
} 
class Footer extends React.Component {
    render() {
        return <h6>footer</h6>
    }
}
export default Pract;