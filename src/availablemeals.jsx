const TODAY_MEAL = [{
    id: 'm1',
    name: 'Cheesy Pizza',
    description: 'Cheesy Pizza with extra toppings',
    price: 230.99,
},{
    id: 'm2',
    name: 'Spicy Pizza',
    description: 'Cheesy Pizza with extra toppings',
    price: 230.99,
},{
    id: 'm3',
    name: 'Veg Pizza',
    description: 'Cheesy Pizza with extra toppings',
    price: 230.99,
},]

const AvailableMeals = () => {
    const mealsList = TODAY_MEAL.map((data) => (
        <MealItem key = {data.id}
        id = {data.id}
        name = {data.name}
        description = {data.description}
        price = {data.price} />

    ))
    return(
        <div>
            <ul> {mealsList} </ul>
        </div>
    )
}

export default AvailableMeals