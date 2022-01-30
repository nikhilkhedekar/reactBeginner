import React from "react"

const SearchList = ({results}) => {
    const renderedList = results.map((item) => {
        return(
            <div key={item.articles.source.id}>
                <h1>
                    <a href={'https://newsapi.org/v2/everything?q=SEARCH_PARAM&apiKey=262ca29f445840a596e6301fc64290dd'}>
                        {item.articles.title}
                        {item.articles.description}
                        {item.articles.author}
                        {item.arcticles.urlToImage}
                        {item.articles.publishedAt}
                    </a>
                </h1>
            </div>
        )
    })
    return renderedList
}

export default SearchList