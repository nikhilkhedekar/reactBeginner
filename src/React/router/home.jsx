import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <div>
                Home
                Products
            </div>
            <div>
                <ol>
                    <Link to='/home/00' >Books</Link>
                    <Link to='home/01' >E-Books</Link>
                    <Link to='/home/02'>Tabs</Link>
                </ol>
            </div>
        </div>
    )
}

export default Home