import ProductForm from './productform'

const NewProduct = (props) => {
    const newProduct = item => {
        const product = {
            ProductID: Math.ceil(Math.random() * 10) + 1,
            ...item,
        }
        console.log(product)
        props.listHandler(product)
    }
    
    return(
        <div>
           <ProductForm newProduct={newProduct} />
        </div>
    )
}

export default NewProduct