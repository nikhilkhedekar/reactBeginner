const HistoryChart = props => {
    let progressAmount = 0
    if(props.amount > 0){
        progressAmount = Math.round((props.amount / props.maxAmount) * 100) 
       
    }
    return(
        <div>
            <progress value={progressAmount} min='0' max='100' ></progress>
            <div>
                {props.month}{props.amount}
            </div>
        </div>
    )
}

export default HistoryChart