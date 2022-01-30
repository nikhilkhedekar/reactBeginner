import ItemList from './Itemlist'

const App = () => {
    const list = [
        {
            id: 0,
            title: 'Samsung M12',
            price: 15000,
            date: new Date(2020, 6, 1)
        },
        {
            id: 1,
            title: 'Samsung M32',
            price: 18000,
            date: new Date(2020, 8, 1)
        },
        {
            id: 3,
            title: 'Samsung A32',
            price: 23000,
            date: new Date(2021, 2, 1)
        }
    ] 
    return(
        <div>
            <ItemList list={list} />
        </div>
    )
}

export default App