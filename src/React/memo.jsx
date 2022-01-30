import { memo, useState } from 'react'


//memo dont work on function array/string so dont use, to stop function rerendering which returns rendered output use useCallback and for array use useMemo
const Another = () => {
    const [data, setData] = useState(false)
    const show = () => {
        setData(true)
    }
    return (
        <div>
            <span> {data? console.log('hello') : null } </span>
            <button onClick={show} > show </button>
        </div>
    )
}

export default memo(Another)