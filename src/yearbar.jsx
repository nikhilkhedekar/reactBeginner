const YearBar = (props) => {
    const progressHeight = '0'
    if(props.maxPrice > 0){
        progressHeight = Math.round((props.amount / props.maxPrice)*100)
    }
    return(
        <div>
            <div>
                <progress value={progressHeight} min='0' max='100' ></progress>
            </div>
        </div>
    )
}

export default YearBar