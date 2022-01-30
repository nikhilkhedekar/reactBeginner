const ProductDate = (props) => {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'short'})
    const year = props.date.getFullYear()
    return(
        <div>
            <div>
                {year}
            </div>
            <div>
                {day}
            </div>
            <div>
                {month}
            </div>
        </div>
    )
}

export default ProductDate