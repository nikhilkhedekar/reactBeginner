import React from 'react';

 
function App(props) {
    
    
    function SubmitForm() {
        console.log(
            props.getName,
            props.getAbout,
            props.getFeedback
        )
        return(
            <div> 
                {props.getName}
                {props.getAbout}
                {props.getFeedback}
            </div>
        );
    }
    return(
        <div>
            <button type = 'submit' onClick = {SubmitForm} > Submit </button>
            <SubmitForm/>           
        </div>
    );
}

export default App;