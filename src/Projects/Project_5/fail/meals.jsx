import MealList from './meallist'

const Meals = () => {
    const mealList = [
        {
            id: 'm1',
            name: 'pizza',
            description: 'pizza description',
            price: 350, 
        },{
            id: 'm2',
            name: 'burger',
            description: 'burger description',
            price: 150, 
        },{
            id: 'm3',
            name: 'wrapper',
            description: 'wrapper description',
            price: 250, 
        },
    ]
    const mapMealList = mealList.map((item) => (
        <MealList key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} />
    ))
    return(
        <div>
            {mapMealList}
        </div>
    )
}

export default Meals