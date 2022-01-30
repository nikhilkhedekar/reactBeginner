import ChartItem from './chartitem'

const ChartList = (props) => {
    const chartList = props.dataPoints.map((data) => data.value)
    const maxPrice = Math.max(...chartList)
    console.log(chartList)
    console.log(maxPrice)
    return(
        <div>
            {props.dataPoints.map((data) => (
                <ChartItem key={data.month} maxPrice={maxPrice} month={data.month} value={data.value} />
            ))}
        </div>
    )
}

export default ChartList