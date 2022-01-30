import { useEffect, useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        
    })
    
    return count
}

export default useCounter

/**
 * App jsx
 * 
 * import useCounter from './useCounter'

const App = () => {
    const forward = useCounter()
    
    
    return(
        <div>
            {forward}
        </div>
    )
}

export default App */