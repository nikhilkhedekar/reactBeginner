import HistoryChart from './historychart'

const OrderHistoryList = (props) => {
    const mapHistoryList = props.historyList.map((data) => data.amount );
    const maxAmount = Math.max(...mapHistoryList);
    return(
        <div>
            {
                props.historyList.map((data) => (
                    <HistoryChart 
                    key={data.month}
                    maxAmount={maxAmount} 
                    month={data.month}
                    amount={data.amount} />
                ))
            }
            
        </div>
    )
}

export default OrderHistoryList