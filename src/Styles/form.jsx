import './Styles/form.css'

const App = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}} > Contact Form </h2>
            <div className='form-container' >
                <form action='#'>
                    <div className='input-cnt'>
                        <i className='#' > Personal </i>
                        <input placeholder='Name' type='text' />
                    </div>
                    <div className='input-cnt'>
                        <i className='#' > Email </i>
                        <input  placeholder='Email' type='text' />
                    </div>
                    <div className='input-cnt'>
                        <i className='#' > Message </i>
                        <textarea placeholder='your message here...' ></textarea>
                    </div>
                    <div className='input-cnt'>
                        <input type='submit' />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default App