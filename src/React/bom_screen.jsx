import { useState } from 'react'

const App = () => {

     
    const onClickAlertHandler = () => {
        alert('text')
    }
  
    const onClickPromptHandler = () => {
        prompt('press no ok'? console.log('true') : null)
    }

    const onClickLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(showLocation)
    }

    return (
        <div>
            {/*<span>{screenWidth}</span>
            {screen.availWidth}
            {screen.height}
            {screen.availHeight}
            {screen.orientation.type}
            {screen.pixelDepth}
    {screen.colorDepth}*/}
            {navigator.platform}<br />
            {navigator.language}<br />
            {navigator.appName}<br />
            {navigator.appCodeName}<br />
            {navigator.appVersion}<br />
            {navigator.onLine}<br />
            <div>
                <button onClick={onClickAlertHandler} > Alert </button>
                
                <button onClick={onClickPromptHandler} > Prompt </button>
                <button onClick={onClickLocationHandler} > Location </button>
             </div>
        </div>
    )
}

export default App