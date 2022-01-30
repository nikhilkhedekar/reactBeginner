import { useState } from 'react'

import Product from './product'
import FilterList from './filterlist'

const ProductList = (props) => {
    const [filterList, setFilterList] = useState('select');
    const filterListHandler = filterYear => {
        setFilterList(filterYear)
    }
    console.log(filterList)
    return (
        <div>
            <div>
                <FilterList filterList={filterList} filterListHandler={filterListHandler} />
            </div>
            <div>
                {props.list.map((newList) => {
                    return (
                        <Product id={newList.productID}
                            name={newList.productName}
                            date={newList.productImpDate}
                            price={newList.productPrice} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList