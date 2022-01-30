import React from 'react'

const TitleList = (props) => {
    return (
      
        <div>{props.results.map((item) => {
            return (
                <div key={item.articles.source.id}>
        <h1>
            <a href={'https://newsapi.org/v2/top-headlines?apiKey=262ca29f445840a596e6301fc64290dd'}>
                {item.articles.title}
            </a>
        </h1>
    </div>
            )
        })}</div>
            
       
    )
}

export default TitleList