import React, { useState, useRef } from 'react'
import './ContactUs.css';
import { Email } from '../../services/email';

const ContactUs = () => {
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const form = useRef();

    const emailService = new Email();

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailService.sendEmail({
            name: inputName,
            to_name: "רובין",
            message: `${inputPhone} - ${inputName}`
        }).then((res) => {
            console.log('Email was send successfully', res);
            alert("תודה, נציג מטעמנו יחזור אליך בהקדם.");
        }).error((e)=>{
            alert("קיימת תקלה במערכת , אנא התקשר לפרטים נוספים");
        }).
         e.target.reset();
    };


    const onClickSendHandler = () => {
        console.log();
        if (inputName !== "" && inputPhone !== "" && inputEmail !== "") {
            if (inputPhone.length < 8 || inputPhone.length > 10) {
                alert("הכנס מספר טלפון תקין בבקשה");
            }
            else if (!(inputEmail.includes("@") || inputEmail.includes(".") || inputEmail.includes("com"))) {
                alert("יש להכניס אימייל תקין");
            }
        
        }
        else {
            alert("יש למלא את כל השדות");
        }
        

    }

    return (
        <div className="contact-container">
            <img className="contact-bg" src={require("../../assets/peppers.jpg")}/>
            <form ref={form} id="Contact" onSubmit={sendEmail} dir="rtl">
                <div className="contact-form">
                    <div className="contact-form-header">
                        <h3>למידע נוסף והזמנות השאירו פרטים</h3>
                        <h5>אנו מציעים קייטרינג בשירות מלא לכל אירוע, גדול כקטן. אנו מבינים את הצרכים שלך ואנו נדאג לאירוע שלא ישכח ולענות על הקריטריונים הגדולים מכולם, הן במראה והן בטעם. אל תהסס ליצור איתנו קשר.</h5>
                    </div>
                    <div className="contact-us-inputs">
                        <input placeholder='אימייל' type="email" id="email" onChange={onInputNameHandler} className="app-input" />
                        <input placeholder='טלפון' type="phone" id="phone" onChange={onInputNameHandler} className="app-input" />
                        <input placeholder='שם' type="text" id="name" onChange={onInputNameHandler} className="app-input" />
                        <button onClick={onClickSendHandler} className="app-btn">שלח</button>
                    </div>
                </div>
            </form >
        </div>

    )
}

export default ContactUs