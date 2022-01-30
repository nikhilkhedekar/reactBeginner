import React, { useState } from 'react';


const List = (props) => {

    const [emailList, setEmailList] = useState([]);
    const [passwordList, setPasswordList] = useState([]);
    function ClickHandler() {
        setEmailList([...emailList, props.email]);
        setPasswordList([...passwordList, props.password]);
        console.log(emailList, passwordList);
    }

    return (
        <div>
            <input onClick={ClickHandler} type="submit" />
            <div>
                <ul>
                    <li> {emailList} </li>
                    <li> {passwordList} </li>
                </ul>
            </div>
        </div>
    );
}

export default List;