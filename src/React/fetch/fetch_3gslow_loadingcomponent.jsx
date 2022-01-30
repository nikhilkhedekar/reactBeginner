import { useState } from 'react'
import './movie.css'

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getMovieList = async () => {
        setIsLoading(true);
        const response = await fetch('https://swapi.dev/api/films')
        const list = await response.json();
        const movieList = list.results.map((movies) => {
            return (<ul key={movies.episode_id} className='list' >
                <li className='id' >{movies.episode_id}</li>
                <li className='title'>{movies.title}</li>
                <li className='opening-crawl' >{movies.opening_crawl}</li>
                <li className='release-date' >{movies.release_date}</li>
                <li className='director' >{movies.director}</li>
            </ul>)
        });
        setData(movieList);
        setIsLoading(false);
    };
    return (
        <div>
            <h1 className='header' >Movie List</h1>
            <button onClick={getMovieList} className='btn' > Movie List </button>
            <section className='loading' >
                {!isLoading && data.length > 0 && <div className='movie-list' >{data}</div>}
                {!isLoading && data.length === 0 && <p>  No Movies Available </p>}
                {isLoading && <p> Loading... </p>}
            </section>

        </div>
    )
}

export default App