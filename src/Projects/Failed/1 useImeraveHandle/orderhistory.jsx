import OrderHistoryList from './orderhistorylist'

const OrderHistory = (props) => {
    const historyList = [
        {month: 'Jan', amount: 0},
        {month: 'Feb', amount: 0},
        {month: 'Mar', amount: 0},
        {month: 'Apr', amount: 0},
        {month: 'May', amount: 0},
        {month: 'Jun', amount: 0},
        {month: 'Jul', amount: 0},
        {month: 'Aug', amount: 0},
        {month: 'Sep', amount: 0},
        {month: 'Oct', amount: 0},
        {month: 'Nov', amount: 0},
        {month: 'Dec', amount: 0},
    ]
    for(const val of props.filterYearData){
        const monthIndex = val.date.getMonth();
        historyList[monthIndex].amount += val.price
    }
   
    return(
        <div>
            <OrderHistoryList historyList={historyList} />
        </div>
    )
}

export default OrderHistory