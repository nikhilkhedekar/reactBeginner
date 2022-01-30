const Date = (props) => {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'short'})
    const year = props.date.getFullYear();
    console.log(day)
    return(
        <div>
            <h4>{year}</h4>
            <h3>{day}</h3>
            <h4>{month}</h4>
        </div>
    )
}

export default Date