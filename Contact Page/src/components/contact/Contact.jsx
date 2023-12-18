import './Contact.css';
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from 'react';

const Contact = () => {
  const handleOnCall = () => {
    console.log("onCall");
  }
  const handleOnChat = () => {
    console.log("onChat");
  }
  const handleOnEmail = () => {
    console.log("onEmail");
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };


  return (
    <div className='contactMain'>
      <div className='contactHeader'>
        <h1 className='heading'>CONTACT US</h1>
        <p className='para'>Let's connect: We're here to help and we'd love to hear from you! Whether you have a question, comment or just want to chat, you can reach out to us through the contact form of this page or by phone, email, social media.</p>
      </div>
      <div className='contactBody'>

        <div className='contactFormHead'>
          <div className='buttonSupport'>
            <button onClick={handleOnChat} className='btnChat'><MdOutlineMessage fontSize="24px" />VIA SUPPORT CHAT</button>
            <button onClick={handleOnCall} className='btnCall'><IoCallOutline fontSize="24px" />VIA SUPPORT CALL</button>
          </div>
          <button onClick={handleOnEmail} className='btnEmail'><MdOutlineEmail fontSize="24px" />VIA EMAIL FORM</button>

          <form onSubmit={handleOnSubmit} className='contactFormBody'>
            <div className='contactFormName'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' />
            </div>
            <div className='contactFormEmail'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' />
            </div>
            <div className='contactFormText'>
              <label htmlFor='Text'>Text</label>
              <textarea type='text' name='text' />
            </div>
            <button type='submit' className='submitBtn'>SUBMIT</button>
          </form>
        </div>
        <div className='contactLogo'>
          <img src='/public/images/contact-logo.jpg' alt='contact-logo-image' className='contactlogoImg' />
        </div>
      </div>
      <div>
        {name + " " + email + " " + text}
      </div>
    </div>
  )
}

export default Contact
