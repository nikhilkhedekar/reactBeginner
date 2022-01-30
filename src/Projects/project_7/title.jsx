import axios from "axios";
import React from "react";

import TitleList from './titleList'

const Title = () => {
    
    const [results, setResults] = useState([]);

    useEffect(() => {
        let timerId = null;
        
            timerId = setTimeout(
                async() =>
                {
                    const {data} = await axios.get('https://newsapi.org',{
                        params: {
                            API_KEY: '262ca29f445840a596e6301fc64290dd',
                        }
                    });
                    setResults(data);
                }, 1000);
        
        return() => {
            clearTimeout(timerId);
        }
    },[]);
    return(
        <div>
            
            <TitleList results={results} />
            </div>
    )
}

export default Title

/* componentDidMount(){
    axios.get('https://reqres.in/api/users?page=2')
    .then(response => {
        const data = response.data;
        const users = data.data.map((userData) => userData.first_name);
        this.setState({users});
    })
}*/