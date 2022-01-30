import { useState } from 'react'

import Item from './item'
import FilterList from './filterlist'

const ItemList = (props) => {
    const [filterItem, setFilterItem] = useState('select')
    const onChangeHandler = (selectedValue) => {
        setFilterItem(selectedValue);
    }
    const filteredList = props.list.filter((items) => {
        return items.date.getFullYear().toString === filterItem
    })
    let getFilteredList = null
    if (filteredList.length > 0) {
        getFilteredList = filteredList.map((list) => {
            return (
            <Item key={list.id}
                title={list.title}
                price={list.price}
                date={list.date}
            /> 
          
            )
        })

    }


    return (
        <div>
            <FilterList onChangeHandler={onChangeHandler} value={filterItem} />
            <div>{getFilteredList}</div>
        </div>
    )
}

export default ItemList