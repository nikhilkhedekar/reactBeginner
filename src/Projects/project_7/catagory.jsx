import CatagoryList from './catagoryList'

const Catagory = () => {
    
    const [results, setResults] = useState([]);
    const [catagory, setCatagory] = useState('');  

    const catagoryHandler = filterList => {
        setCatagory(filterList)
    }

    useEffect(() => {
        let timerId = null;
        
            timerId = setTimeout(
                async() =>
                {
                    const {data} = await axios.get('https://newsapi.org',{
                        params: {
                            API_KEY: '262ca29f445840a596e6301fc64290dd',
                            CATAGORY_PARAM: catagory,
                        }
                    });
                    setResults(data.CATAGORY_PARAM);
                }, 1000);
        
        return() => {
            clearTimeout(timerId);
        }
    },[]);
    return(
        <div>
            
            <CatagoryList results={results} catagoryHandler={catagoryHandler} />
            </div>
    )
}

export default Catagory