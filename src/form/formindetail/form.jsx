import React, { useState } from 'react'
//import ReactDOM, { findDOMNode, finDOMNode } from 'react-dom';

const Form = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [passcode, setPasscode] = useState('');
    const [cpasscode, setCPasscode] = useState('');
    const [file, setFile] = useState();
    const [fileSize, setFileSize] = useState(false);
    const [form, setForm] = useState([]);
    const [showForm, setShowForm] = useState([]);
    //const [language, setLanguage] = useState([]);

    //const checkGif = <img src="tenor.gif" height="25" width="30" alt="" />

    function onChangeNameHandler(e) {
        setName(e.target.value);
    }
    function onKeyUpHandler() {
        return (
            <div>
                {
                    name.length < 8 ? 'Usernam > 8' :
                        name.length > 14 ? 'username < 14' : null
                }
            </div>
        );
    }

    function onChangeIdHandler(e) {
        setId(e.target.value)
    }
    function validateUserId() {
        return (
            <div>
                { isNaN(+id) ? 'number only' : id.length < 8 ? 'ID > 8' : id.length > 14 ? 'ID < 14' : null}
            </div>
        );
    }

    function onChangeEmailHandler(e) {
        setEmail(e.target.value)
    }
    function validateEmail() {
        const atPosition = email.indexOf("@");
        const dotPosition = email.lastIndexOf(".");
        return (
            <div>
                {
                    atPosition <= 8 ? 'invalid username' :
                        atPosition > dotPosition - 2 ? 'invalid Email' :
                            dotPosition + 2 >= email.length ? 'invalid Email' :
                                null
                }
            </div>
        );
    }

    function onChangeGenderHandler(e) {
        setGender(e.target.value)
    }
    function validateGender() {
        return (
            <div>
                { gender === "Female" ? gender : null || gender === "Male" ? gender : null}
            </div>
        )
    }

    function onChangePasswordHandler(e) {
        setPasscode(e.target.value)
    }
    function validatePassword() {
        return (
            <div>
                { passcode.length < 8 ? 'length > 8' : passcode.length > 12 ? 'length < 12' : null}
            </div>
        );
    }

    function onChangeConfirmPasswordHandler(e) {
        setCPasscode(e.target.value)
    }
    function confirmPassword() {
        return (
            <div>
                { cpasscode !== passcode ? 'invalid' : 'valid'}
            </div>
        );
    }


    //local file uploads are not allowed so path is not determined so as size also result ll be undefined
    function onSelectFileHandler(e) {
        setFileSize(true);
        setFile(e.target.value);
        console.log(fileSize);
        console.log(file.size);
    }
    function validateFileSize() {
        return (
            <div>
                { fileSize === true ? file.size : null}
            </div>
        );
    }

    function onClickShowFormHandler() {
        setForm([
            name,
            id,
            email,
            gender,
            passcode,
            cpasscode,
            file
        ]);
        console.log(form)
        const showform = form.map((userData) =>
            userData
        );
        setShowForm(showform);
    }

    /*function onCheckedShowLanguage() {
        setLanguage(findDOMNode(document.getElementsByName('language')));
        const languageList = language.checked.map((lang) => <li key={lang.id}> {lang} </li>)
        console.log(languageList);
    }*/
  

    const OnKeyUp = onKeyUpHandler;
    const ValidateUserId = validateUserId;
    const ValidateEmail = validateEmail;
    const ValidatePassword = validatePassword;
    const ConfirmPassword = confirmPassword;
    const ValidateGender = validateGender;
    const ValidateFileSize = validateFileSize;
    //const OnCheckedShowLanguage = onCheckedShowLanguage;

    return (
        <div>
            <input placeholder="username" onChange={onChangeNameHandler} onKeyUp={onKeyUpHandler} value={name} />
            <OnKeyUp />
            <input placeholder="userID" onChange={onChangeIdHandler} validateUserId={validateUserId} value={id} />
            <ValidateUserId />
            <input placeholder="Email" onChange={onChangeEmailHandler} validateEmail={validateEmail} value={email} />
            <ValidateEmail />

            <label>Gender:
                <select id="gender" onChange={onChangeGenderHandler} >
                    <option value="Slect"> Select </option>
                    <option value="Male"> Male </option>
                    <option value="Female"> Female </option>
                </select>
            </label>
            <ValidateGender />
            <input type="datetime-local" /><br />
            <input placeholder="password" onChange={onChangePasswordHandler} validatePassword={validatePassword} value={passcode} />
            <ValidatePassword />
            <input placeholder="confirm password" onChange={onChangeConfirmPasswordHandler} confirmPassword={confirmPassword} value={cpasscode} />
            <ConfirmPassword />
            <input type="file" accept=".pdf, .jpg, .png" onChange={onSelectFileHandler} />
            <img src={file} height="200" width="200" alt="" />
            <ValidateFileSize />
            {/*<label>Language:
                <div>
                    <input id="English" type="radio" name="language" value="English" />
                    <label for="English"> English </label><br />

                    <input id="Hindi" type="radio" name="language" value="Hindi" />
                    <label for="Hindi"> Hindi </label><br />

                    <input id="Marathi" type="radio" name="language" value="Marathi" />
                    <label for="Marathi"> Marathi </label>
                </div>
            </label>
            <OnCheckedShowLanguage />*/}
            <input type="tel" pattern="[+^!@#$%*?]{1}[0-9^a-zA-Z]{2}-[0-9^a-zA-Z]{4}-[0-9^a-zA-Z]{6}" placeholder="+91-1234-567890" />

            <div>
                <button onClick={onClickShowFormHandler}> Details </button>
                <div>{showForm}</div>
            </div>

            <input type="button" value="Sign Up" />
        </div>
    );
}

export default Form;