import { useState } from 'react'

import FoodList from './foodlist'
import FoodOrder from './foodorder'

const Home = () => {
    const [foodList, setFoodList] = useState([
        {
            id: 0,
            name: 'Pizza',
            price: 350,
            date: new Date(2021, 4, 12),
        },{
            id: 1,
            name: 'Burger',
            price: 350,
            date: new Date(2021, 4, 12),
        },{
            id: 2,
            name: 'Wrapper',
            price: 350,
            date: new Date(2021, 4, 12),
        },
    ]);

    const foodListHandler = data => {
        setFoodList((prevFoodList) =>  [data, ...prevFoodList])
    }

 

    return (
        <div>
            <FoodOrder foodListHandler={foodListHandler} />
            <FoodList foodList={foodList}  />
            
        </div>
    )
}

export default Home