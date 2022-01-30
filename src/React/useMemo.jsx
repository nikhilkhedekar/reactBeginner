import { useMemo } from 'react'

const Example = (props) => {
    const { arr } = props;
    const sorted = useMemo(() => {
        console.log('sorted');
        return arr.sort((a, b) => a - b)
    }
    ,[arr])
    const onclickhandler = () =>{
        
        return sorted
    }
    return(
        <div>
            <span>{sorted}</span>
            <button onClick={onclickhandler} > sort </button>
        </div>
    )
}

export default Example 