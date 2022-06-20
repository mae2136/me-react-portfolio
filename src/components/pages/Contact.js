import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    // Create form object with useState
    const form = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_KEY;
    const publicKey = process.env.REACT_APP_API_KEY;
    // https://www.emailjs.com/docs/examples/reactjs/ to send emails from a form
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("ENV: ", serviceId, publicKey);
        emailjs.sendForm(serviceId, 'template_pru9th7', form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <h2>Contact me</h2>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
    )
}

export default Contact