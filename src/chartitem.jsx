const ChartItem = (props) => {
    let progressVal = 0;
    if(props.maxPrice > 0){
        progressVal = Math.round((props.value/props.maxPrice) * 100)
    }
    console.log(progressVal)
    return(
        <div>
            <progress value={progressVal} min='0' max='100' ></progress>
            <span>{props.month}{props.value}</span>
        </div>
    )
}

export default ChartItem