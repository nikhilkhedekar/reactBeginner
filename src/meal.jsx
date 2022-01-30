import MealList from './meallist'

const Meal = () => {
    const Meal = [
        {
            id: 'm1',
            name: 'pizza',
            description: 'pizza pizza',
            price: 230
        }, {
            id: 'm2',
            name: 'burger',
            description: 'pizza pizza',
            price: 230
        }, {
            id: 'm3',
            name: 'wrapper',
            description: 'pizza pizza',
            price: 230
        },
    ]
    const mealList = Meal.map((data) => (
        <MealList key={data.id}
            id={data.id}
            name={data.name}
            description={data.description}
            price={data.price} />
    ))
    return (
        <div>
            {mealList}

        </div>
    )
}

export default Meal