const FilterList = (props) => {
    const changeHandler = (e) => {
        props.onChangeHandler(e.target.value)
    }
    return(
        <div>
            <label>Select Date</label>
            <select onChange={changeHandler} value={props.value} >
                <option value='select'> select </option>
                <option value='2019' > 2019 </option>
                <option value='2020' > 2020 </option>
                <option value='2021' > 2021 </option>
            </select>
        </div>
    )
}

export default FilterList