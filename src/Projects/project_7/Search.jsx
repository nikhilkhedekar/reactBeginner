import React from "react";
import axios from 'axios';
import NewsAPI from 'newsapi';

import SearchList from './searchList';

const Search = () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
        useEffect(() => {
        let timerId = null;
        if(value){
            timerId = setTimeout(
                async() =>
                {
                    const {data} = await axios.get('https://newsapi.org',{
                        params: {
                            API_KEY: '262ca29f445840a596e6301fc64290dd',
                            SEARCH_PARAM: value
                        }
                    });
                    setResults(data.SEARCH_PARAM);
                }, 1000);
        }
        return() => {
            clearTimeout(timerId);
        }
    },[value]);
    return(
        <div>
            <form>
                <input type='text' placeholder='search' value={value} onChange={(e) => setValue(e.target.value)}/>
            </form>
            <SearchList results={results} />
            </div>
    )
}

export default Search