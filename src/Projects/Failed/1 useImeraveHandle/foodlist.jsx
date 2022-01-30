import { useState } from 'react'

import FoodItem from './fooditem'
import FilterHistory from './filterHistory'
import OrderHistory from './orderhistory'

const FoodList = (props) => {
    const [filterYear, setFilterYear] = useState('select');

    const filterYearHandler = data => {
        setFilterYear(data)
        console.log(filterYear)
    }

    const filterYearData = props.foodList.filter((data) => {
        return data.date.getFullYear().toString() === filterYear
    })

    return(
        <div>
            <FilterHistory filterYearHandler={filterYearHandler} filterYear={filterYear} />
            <OrderHistory filterYearData={filterYearData} />
            <div>
            {
                props.foodList.map((data) => (
                    <FoodItem key={data.id}
                    name={data.name}
                    price={data.price}
                    date={data.date}/>
                ))
            }
            </div>
        </div>
    )
}

export default FoodList