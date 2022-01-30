import './Styles/footer.css'
//import './Styles/footer_2.css'

const App = () => {
    return (
        <div>
            <header></header>
            <main></main>
            <footer>
                <div className='footer-body'>
                    <div> Brand </div>
                    <div>
                        <p>Some Text</p>
                        <ul>
                            <li><a href="#"> About </a></li>
                            <li><a href="#"> Contact </a></li>
                            <li><a href="#"> Term </a></li>
                            <li><a href="#"> Privacy </a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-copyright' >
                    &copy; copyright
            </div>
            </footer>
        </div>
    )
}

export default App