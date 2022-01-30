import { useState, useCallback } from 'react'
import SendMovieList from './fetch_POST';
import './movie.css'

//firebase ?

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const getMovieList = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://swapi.dev/api/films')
                if (response.ok === !response.ok) {
                    throw new Error('link does not exist')
                }
                const list = await response.json();
                //const uploadData = [];
                const movieList = list.results.map((movies) => {
                    return (<ul key={movies.episode_id} className='list' >
                        <li className='id' >{movies.episode_id}</li>
                        <li className='title'>{movies.title}</li>
                        <li className='opening-crawl' >{movies.opening_crawl}</li>
                        <li className='release-date' >{movies.release_date}</li>
                        <li className='director' >{movies.director}</li>
                    </ul>)
                });
                //console.log(movieList);
                //uploadData.push([...movieList]);
                //console.log(uploadData)
                setData(movieList);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        },
        [],
    )

    const sendMovieList = async (data) => {
        const response = await fetch('https://react-fetch-req-default-rtdb.firebaseio.com/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const list = await response.json();
        console.log(list)
    }

    return (
        <div>
            <h1 className='header' >Movie List</h1>
            <button onClick={getMovieList} className='btn' > GeT </button>
            <section className='loading' >
                {!isLoading && data.length > 0 && <div className='movie-list' >{data}</div>}
                {!isLoading && data.length === 0 && !error && <p>  No Movies Available </p>}
                {!isLoading && error && <p>{error}</p>}
                {isLoading && <p> Loading... </p>}
            </section>
           {/*<SendMovieList data={data} />*/}
        </div>
    )
}

export default App


