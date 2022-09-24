import React, { useState, useEffect } from 'react'
import './ContactUs.css';

const ContactUs = () => {
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const onInputNameHandler = (e) => {
        switch (e.target.id) {
            case "name":
                setInputName(e.target.value);
                break;
            case "phone":
                setInputPhone(e.target.value);
                break;
            case "email":
                setInputEmail(e.target.value);
                break;

            default:
                break;
        }
    }

    const sendMail=() =>{

    }
    const onClickSendHandler= () => {
        if(inputName !== "" && inputPhone !== "" && inputEmail !== "" )
        {
            if(inputPhone.length < 8 || inputPhone.length > 10){
                alert("הכנס מספר טלפון תקין בבקשה");
            }
            else if(!(inputEmail.includes("@") || inputEmail.includes(".") || inputEmail.includes("com")))
            {
                alert("יש להכניס אימייל תקין");
            }
            else{

            }
        } 
        else {
            alert("יש למלא את כל השדות"); 
        }
    }

    return (
        <div className="contact-us-container">
            <div className="contact-us-title">
                <h3>למידע נוסף והזמנות השאירו פרטים</h3>
            </div>
            <div className="contact-us-inputs">
                <button onClick={onClickSendHandler} >שלח</button>
                <input placeholder='אימייל' type="email" id="email" onChange={onInputNameHandler} />
                <input placeholder='טלפון' type="number" id="phone" onChange={onInputNameHandler} />
                <input placeholder='שם' type="text" id="name" onChange={onInputNameHandler} />
            </div>
        </div>
    )
}

export default ContactUs