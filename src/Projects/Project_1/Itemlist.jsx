import Item from './item'
import Card from './card'
import './Itemlist.css'

const ItemList = (props) => {
    
    return(
        <Card className='itemlist' >
            <Item 
            id={props.list[0].id}
            title={props.list[0].title}
            price={props.list[0].price}
            date={props.list[0].date}/>
            <Item 
            id={props.list[1].id}
            title={props.list[1].title}
            price={props.list[1].price}
            date={props.list[1].date}/>
            <Item 
            id={props.list[2].id}
            title={props.list[2].title}
            price={props.list[2].price}
            date={props.list[2].date}/>
        </Card>
    )
}

export default ItemList