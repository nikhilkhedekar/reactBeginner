const History = (props) => {
    const orderPrice = props.year.map(data => data.amount);
    const maxPrice = Math.max(...orderPrice);
    return(
        <div>
            {
                props.year.map((data) => (
                    <YearBar 
                    key={data.id}
                    amount={data.amount}
                    maxPrice={maxPrice}
                    maonth={data.month} />
                ))
            }
        </div>
    )
}

export default History