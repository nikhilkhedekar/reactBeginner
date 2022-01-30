import { useState } from 'react'

import './Styles/tooltips.css'

//need to add handler 
const App = () => {
    const [tooltip, setTooltip] = useState('')
    const mouseOverHandler = () => {
        setTooltip('tooltip here')
    }
    return(
        <div>
            <h1> Here is our tooltip </h1>
            <div className='container' >
                <span className='tooltip' onMouseOver={mouseOverHandler} >
                    mouseover me
                    <span className='tooltip-content' > {tooltip} </span>
                </span>
            </div>
        </div>
    )
}

export default App