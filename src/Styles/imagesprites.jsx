import './Styles/imagesprites.css'

const App = () => {
    return(
        <div>
            <div>
                <button className='dd-btn' > Click </button>
                <div className='dd-content' >
                    <a href='#'><i className='home-icon'></i> Home </a>
                    <a href='#'><i className='dashboard-icon'> Dashboard </i></a>
                    <a href='#'><i className='envelope-icon'></i> Messages </a>
                    <a href='#'><i className='bell-icon'></i> Notification </a>
                </div>
            </div>
        </div>
    )
}

export default App