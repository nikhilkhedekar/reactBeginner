import Date from './date'
import Card from './card'
import './item.css'

const Item = (props) => {
    return (
        <Card className='item'>
            <Date date={props.date} />
            <div className='item-discription'>
                <h2>{props.title}</h2>
                <div className='item-price' >
                    {props.price}
                </div>
            </div>
        </Card>
    )
}

export default Item