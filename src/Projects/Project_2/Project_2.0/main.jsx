import { useState } from 'react'

import Input from './input'
import TextList from './textlist'


const App = () => {
    const [arr, setArr] = useState([{
        text: 'text1',
        id: 0,
    },
    {
        text: 'text2',
        id: 1,
    }]);
    const arrHandler = (newArr) => {
        setArr(prevArr => {
            const data = [...prevArr]
            const newData = { text: newArr, id: Math.random()}
            data.unshift(newData)
            return data
        })
    }

    const onDeleteHandler = textid => {
        setArr(prevArr => {return prevArr.filter(newArr => newArr.id !== textid)})
    }
    return (
        <div>
            <Input arrHandler={arrHandler} />
            <TextList arr={arr} onDeleteHandler={onDeleteHandler} />
        </div>
    )
}

export default App