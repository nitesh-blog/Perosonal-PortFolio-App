import React, { useState } from 'react';
import "./Contact.css";
import Phone from "../../assist/phone.png"
import Email from "../../assist/email.png"
import Address from "../../assist/address.png"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { ThemeContext } from '../../Context';

const Contact = () => {

    const formRef = useRef()
     const [done,setDone] = useState(false);
     const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_mv8711h', 

        'template_w1rg2d6', 

        formRef.current, 'Uk0R_PyxmcayrW5Qs')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }

// const formRef = UseRef()
// const handleSubmit = (e) =>{
//     e.preventDefault();
// }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's Discuss Your Project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    +91-7517686178
                    </div>
                    <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" />
                    niteshghubde67@gmail.com
                    </div>
                    <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon" />
                    Vitthal Mandir Ward ,Chandrapur-442401
                    </div>

                   
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc" >
                ᴵᶠ ʸᵒᵘ ʷᵃⁿᵗ ᵗᵒ ᵈⁱˢᶜᵘˢˢ ʷⁱᵗʰ ᵐᵉ? ʸᵒᵘ ᶜᵃⁿ ᵐᵃⁱˡ ᵐᵉ, ᶠⁱˡˡ ᵗʰᵉ ᶠᵒʳᵐ ᵇᵉˡᵒʷ :)
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                <input  style={{backgroundColor: darkMode && "#222"}}  type="text" placeholder='Enter Name' name='user_name' /><br></br>
                <input  style={{backgroundColor: darkMode && "#222"}} type="text" placeholder='Enter Subject' name='user_subject' /><br></br>
                <input  style={{backgroundColor: darkMode && "#222"}} type="text" placeholder='Enter Email' name='user_email' />
                <textarea style={{backgroundColor: darkMode && "#222"}}  name="message" placeholder='Message'  rows="5"></textarea>
                <button>Submit</button>
                {done && "Thank You..! :)"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;