import React from 'react';
import ReactDOM from 'react-dom';

//need to import ReactDOM.findDOMNode method//
const App = () => {
    const myStyle = {
        border: 1,
        width: 200,
        height: 200 
    }
    const image = document.getElementById('image');
    function allowDrop(e) {
        e.preventDefault();
    }
    function drag(e) {
        e.dataTransfer.setData("text", e.target.id);
    }
    function drop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text"); 
        e.target.appendChild(data)
    }
    return(
        
        <div>
            <div
                id="box" 
                onDrop = {drop} 
                onDragOver = {allowDrop} 
                style={myStyle} 
            ></div>
            <img 
                id="image" 
                height="300" 
                width="300" 
                src="IMG-20201105-WA0045.jpg"
                draggable={true}
                onDragStart={drag}
            />
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDom.render(<First/>, document.getElementById('parent'));