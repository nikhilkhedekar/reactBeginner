import NewsFeed from "./newsfeed"
import Nav from './navigation'

const Home = (props) => {
    return (
        <div>
            <div>
                <h1>
                    Home
                </h1>
                <button onClick={props.onClickSignOut} > Sign Out </button>
            </div>
            <div>
                <Nav signIn={props.signIn}  />
            </div>
            <div>
                <NewsFeed />
            </div>

        </div>

    )
}

export default Home