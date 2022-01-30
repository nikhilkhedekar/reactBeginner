import './Styles/counter.css'

const App = () => {
    return(
        <div>
        <ol>
            <li>item</li>
            <li>
                <ol>
                    <li>item</li>
                    <li>item</li>
                    <li>item
                        <ol>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        </ol>
                    </li>
                    <li>item</li>
                </ol>
            </li>
            <li>item</li>
            <li>item</li>
        </ol>
        <ol>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        </ol>
    </div>
    )
}

export default App