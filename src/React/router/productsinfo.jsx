import { useParams } from 'react-router-dom'

const Products = () => {
    const params = useParams();
    return(
        <div>
            <div>
            Products
            </div>
            <div>
            <span>{params.productID}</span>
            </div>
            
        </div>
    )
}

export default Products