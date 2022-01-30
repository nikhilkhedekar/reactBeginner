import { useMemo } from 'react'

import Example from './example'

const App = () => {
    const arr =  [5, 2, 8, 9, 3, 7, 1, 4, 6]
    return(
        <div>
            <Example arr={arr} />
        </div>
    )
}

export default App