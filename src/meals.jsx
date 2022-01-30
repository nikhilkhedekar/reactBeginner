import MealList from './meallist'

const MEAL = [
    {
        id: 'm1',
        name: 'pizza',
        description: 'pizza with cheese',
        price: 350
    }, {
        id: 'm2',
        name: 'burger',
        description: 'burger with cheese',
        price: 150
    }, {
        id: 'm3',
        name: 'wrapper',
        description: 'wrapper with cheese',
        price: 250
    },
]

const Meals = () => {
    const meal = MEAL.map((data) => (
        <MealList key={data.id}
            id={data.id}
            name={data.name}
            description={data.description}
            price={data.price} />
    ))
    return (
        <div>
            {meal}
        </div>
    )
}

export default Meals