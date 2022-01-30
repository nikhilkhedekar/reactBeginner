import React from 'react'
//import NewsAPI from 'newsapi';

import CatagoryFilter from './catagoryFilter';

const CatagoryList = (props) => {
    const [filterList, setFilterList] = useState('');
    //const newsapi = new NewsAPI('262ca29f445840a596e6301fc64290dd')
    const filterListHandler = filterCatagory => {
        setFilterList(filterCatagory)
    }
    
    props.catagoryHandler(filterList)
    
    const filterData = props.results.filter((newList) => {
        //return newList.newsapi.V2.sources.catagory === filterList
        return newList.sources.catagory === filterList
    })

    return (
        <div>
            
            <div>
                <CatagoryFilter filterList={filterList} filterListHandler={filterListHandler} />
            </div>
           
            <div>
                {(filterList.length === 0)? <h2> No Items Found </h2> : <div>{props.results.map((newList) => {
                    return (
                        <div key={newList.articles.source.id}>
                <h1>
                    <a href={'https://newsapi.org/v2/top-headlines?catagory=CATAGORY_PARAM&apiKey=262ca29f445840a596e6301fc64290dd'}>
                        {newList.articles.title}
                    </a>
                </h1>
            </div>
                    )
                })}</div>}
            </div>
            
        </div>
    )
}

export default CatagoryList