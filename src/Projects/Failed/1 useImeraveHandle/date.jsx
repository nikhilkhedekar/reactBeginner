const Date = (props) => {
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    return(
        <div>
            <div>
                <h4>{year}</h4>
            </div>
            <div>
                <h3>{day}</h3>
            </div>
            <div>
                <h4>{month}</h4>
            </div>
        </div>
    )
} 

export default Date