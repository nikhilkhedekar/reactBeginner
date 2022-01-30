import { useState } from 'react'

import FilterGroceryForm from './filtergroceryform'
import GroceryChart from './grocerychart'

const FilterGrocery = (props) => {
    const [filter, setFilter] = useState('')
    
    const filterGrocery = (data) => {
        setFilter(data)
    }

    const filterYear = props.grocery.filter((data) => data.date.getFullYear().toString() === filter)

    return(
        <div>
            <FilterGroceryForm filterGrocery={filterGrocery} filter={filter} />
            <GroceryChart filterYear={filterYear} />
        </div>
    )
}

export default FilterGrocery