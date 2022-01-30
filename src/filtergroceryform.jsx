const FilterGroceryForm = (props) => {
    const filterHandler = (e) => {
        props.filterGrocery(e.target.value);
    }
    
    return(
        <div>
            <label></label>
            <select onChange={filterHandler} value={props.value} >
                <option value='select' > Select </option>
                <option value='2019' > 2019 </option>
                <option value='2020' > 2020 </option>
                <option value='2021' > 2021 </option>
            </select>
        </div>
    )
}

export default FilterGroceryForm