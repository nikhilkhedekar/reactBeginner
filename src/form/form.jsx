import React, { useState,  } from 'react';


const First = (props) => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [feedback, setFeedback] = useState('');
    function onChangeHandlerName(e) {
        setName(e.target.value)
    }
    function onChangeHandlerAbout(e){
        setAbout(e.target.value)
    }
    function onChangeHandlerFeedback(e){
        setFeedback(e.target.value)
    }
    const getForm = {
       
    }

    return(
        <div>
            <label>
                username: <input onChange = {onChangeHandlerName} value = {name} />
            </label>
            <label>
                About: <input onChange = {onChangeHandlerAbout} value = {about}  />
            </label>
            <label>
                Feedback: <input onChange = {onChangeHandlerFeedback} value = {feedback} />
            </label>
            <App  
                getName = {name}
                getAbout = {about}
                getFeedback = {feedback} />
            
        </div>
    );
}

export default First;