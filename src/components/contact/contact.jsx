import { useState } from "react";
import "./contact.scss"

import emailjs from "emailjs-com";

export default function Contact() {

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_lqgfnz9', 'template_u3sfhry', e.target, 'user_cErXWDEMZty7ZEFL7z0dr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    const [msg,setMsg]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMsg(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/contactMe.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit && sendEmail}>
                    <input type="text" placeholder="Email" name="email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit" >Send</button>
                    {msg && <span>Thankyou. I'll reply to you soon 😇</span>}
                    <div className="social">
                        <a href="https://github.com/TrailblaZer132" target="#blank"><img src="assets/gh.png" alt="" /></a>
                        <a href="https://www.linkedin.com/in/udit-nath-b54305173/" target="#blank"><img src="assets/li.png" alt="" /></a>
                        <a href="https://www.facebook.com/TrailblaZer132/" target="#blank"><img src="assets/fb.png" alt="" /></a>
                        <a href="https://www.instagram.com/udit.nath/" target="#blank"><img src="assets/ig.png" alt="" /></a>
                        <a href="https://drive.google.com/drive/u/4/folders/1PVSqpI8CYIgJJb-5M3DWepJLxU_JJ-MU" target="#blank"><img src="assets/dr.png" alt="" /></a>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
