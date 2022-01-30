import { useState } from 'react'

import ErrorModal from './errormodal'

const AddUser = (props) => {
    const [uName, setUName] = useState('');
    const [uAge, setUAge] = useState(0);
    const [err, setErr] = useState([]);

    const nameHandler = (e) => {
        setUName(e.target.value)
    }

    const ageHandler = (e) => {
        setUAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (uName.trim().length === 0) {
            setErr({
                eTitle: 'Invalid UserName',
                eMsg: 'Pls Provide valid Username'
            })
            return;
        }
        if (+uAge < 18) {
            setErr({
                eTitle: 'Invalid Age',
                eMsg: 'Pls Provide valid Age'
            })
            return;
        }
        props.addUserHandler(uName, uAge)

        setUName('')
        setUAge(0)
    }




    console.log(err.eTitle)
    console.log(err.eMsg)
    return (
        <div>
            <form onSubmit={submitHandler} >
                <input type='text' onChange={nameHandler} value={uName} />
                <input type='number' onChange={ageHandler} value={uAge} />
                <input type='submit' value='Submit' />
            </form>
            <ErrorModal err={err} />
        </div>
    )
}

export default AddUser