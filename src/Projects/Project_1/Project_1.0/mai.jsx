import { useState } from 'react'

import ItemList from './itemlist'
import NewItem from './newitem'

const itemlist = [
    {
    id: 1,
    title: 'Samsung M12',
    price: 15000,
    date: new Date(2020, 6, 1),
},
{
    id: 2,
    title: 'Samsung M32',
    price: 18000,
    date: new Date(2020, 9, 1),
},
{
    id: 3,
    title: 'Samsung A32',
    price: 21000,
    date: new Date(2021, 2, 1),
}
]

const App = () => {
    const [list, setList] = useState(itemlist);

    const listHandler = (datalist) => {
        setList((prevList) => {
            return [...prevList, datalist];
        });
    }
    
    return(
        <div>
            <NewItem listHandler={listHandler} />
            
            <ItemList list={list} />
        </div>
    )
}

export default App