import './Styles/accordion.css'

const App = () => {
    return(
        <div>
            <div className='container' >
                <div className='accordion' >
                    <input checked type='radio' name='accordion' id='accordion1' />
                    <label htmlFor='accordion1'> Accordion #1 </label>
                    <div className='accordion-content'> No 1 </div>
                </div>
                <div className='accordion' >
                    <input type='radio' name='accordion' id='accordion2' />
                    <label htmlFor='accordion2'> Accordion #2 </label>
                    <div  className='accordion-content' > No 2 </div>
                </div>
            </div>
        </div>
    )
}

export default App