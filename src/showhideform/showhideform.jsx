import React, { useState } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom';
import Form from './eg';

//using this node to access root indirectly 
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: '',
            flag: true
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        const {flag} = this.state;
        if (flag === true) {
            return (
                this.setState(findDOMNode(document.getElementById('form').innerHTML = <Form />        
                ))
            ); 
        }
        else {
            return (
                this.setState(findDOMNode(document.getElementById('form').innerHTML = ''))
            );
        }
    }
    render() {
        return(
            <div>
                <span key = {0} id = 'form' >  </span>
                <button onClick={this.onClickHandler} > Show/Hide </button>
            </div>
        );
    }
}

export default App