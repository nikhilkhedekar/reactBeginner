const Item = (props) => {
    const { date } = props.date
    const day = date.toLocaleString('en-US', {day: '2-digit'})
    const month = date.toLocaleString('en-US', {month: 'short'})
    const year = date.getFullYear()
    return(
        <div  >
            <div>
                <span>{year}</span>
                <span>{day}</span>
                <span>{month}</span>
            </div>
            <div>
                <span>{props.title}</span>
                <span>{props.price}</span>
                <span>{console.log(props.title)}</span>
            </div>
        </div>
    )
}

export default Item