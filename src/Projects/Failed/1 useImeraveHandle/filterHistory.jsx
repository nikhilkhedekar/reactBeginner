const Filter = (props) => {
    const filterHandler = (e) => {
        props.filterYearHandler(e.target.value)
    }
    return(
        <div>
            <label> Select Year </label>
            <select onChange={filterHandler} value={props.filterYear} >
                <option value='select'> Select </option>
                <option value='2021'> 2021 </option>
                <option value='2020'> 2020 </option>
                <option value='2019'> 2019 </option>
            </select>
        </div>
    )
}

export default Filter