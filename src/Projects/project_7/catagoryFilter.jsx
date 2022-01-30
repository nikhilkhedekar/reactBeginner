import React from 'react'

const CatagoryFilter = (props) => {

    const filterHandler = (e) => {
        props.filterListHandler(e.target.value)
    }
    return (
        <div>
            <div>
                <label> Select Catagory </label>
                <select onChange={filterHandler} value={props.filterList} >
                    <option value='select' > Select </option>
                    <option value='business' > Business </option>
                    <option value='entertainment' > Entertainment </option>
                    <option value='general' > General </option>
                    <option value='health' > Health </option>
                    <option value='science' > Science </option>
                    <option value='sports' > Sports </option>
                </select>
            </div>
        </div>

    )
}

export default CatagoryFilter