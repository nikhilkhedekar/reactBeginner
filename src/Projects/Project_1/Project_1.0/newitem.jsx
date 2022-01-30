

import ItemForm from "./itemfrom"


const NewItem = (props) => {
    
    
    const submittedData = (submitData) => {
        const data = {
            id: Math.ceil(Math.random() * 1000) + 1,
            ...submitData,
        }
        console.log(data)
        props.listHandler(data);
        
    }
    return(
        <div>

            <ItemForm submittedData={submittedData}    />
            
        </div>
    )
}

export default NewItem