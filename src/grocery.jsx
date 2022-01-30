import { useState } from 'react'

import GroceryList from './grocerylist'
import Header from './header'
import AddGrocery from './addgrocery'
import FilterGrocery from './filtergrocery'

const Grocery = () => {
    const [grocery, setGrocery] = useState([
        {
            id: 'g1',
            name: 'Oil',
            price: 200,
            date: new Date(2019, 0, 1),
        },{
            id: 'g2',
            name: 'Grains',
            price: 300,
            date: new Date(2020, 0, 1),
        },{
            id: 'g3',
            name: 'Nuts',
            price: 400,
            date: new Date(2021, 0, 1),
        },        
    ]) 

    const addToGrocery = (data) => {
        setGrocery(prevGrocery => {
            const newGrocery = [...prevGrocery];
            newGrocery.push(data);
            return newGrocery;
        })
    }

    return(
        <div>
            <Header />
            <GroceryList grocery={grocery} />
            <AddGrocery addToGrocery={addToGrocery} />
            <FilterGrocery grocery={grocery} />
        </div>
    )
}

export default Grocery