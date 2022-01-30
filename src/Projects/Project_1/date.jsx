import './date.css'

const Date = (props) => {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'short'})
    const year = props.date.getFullYear();
    return(
        <div className='item-date' >
            <div className='item-date-month' >{month}</div>
            <div className='item-date-year' >{year}</div>
            <div className='item-date-day' >{day}</div>
        </div>
    )
}

export default Date