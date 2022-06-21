import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    // Create form object with useState
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, name, and message

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const serviceId = process.env.REACT_APP_SERVICE_KEY;
    const publicKey = process.env.REACT_APP_API_KEY;
    // https://www.emailjs.com/docs/examples/reactjs/ to send emails from a form
    const sendEmail = (e) => {
        e.preventDefault();

        let formValue = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send(serviceId, 'template_pru9th7', formValue, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setEmail('');
        setName('');
        setMessage('');
    };

    return (
        <div className="justify-center">
            <h2>Contact me</h2>
            <div>
                <form className="form my-2">
                    <label>Name</label><br />
                    <input className="my-1 p-1 w-full border-gray-300 focus:border-blue-400 rounded-sm" value={name} onChange={handleInputChange} type="text" name="name" placeholder="Jason" /><br />
                    <label>Email</label><br />
                    <input className="p-1 my-1 w-full border-gray-300 focus:border-blue-400 rounded-sm" value={email} onChange={handleInputChange} type="email" name="email" placeholder="Jason@email.com" /><br />
                    <label>Message</label><br />
                    {/* Example 7 from https://larainfo.com/blogs/tailwind-css-forms-examples */}
                    <textarea className="w-full h-32 my-1 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400" value={message} onChange={handleInputChange} name="message" placeholder="Jason's message" /><br />
                    <button type="button" className="text-slate-100 p-2 rounded bg-gray-800 hover:text-gray-400" onClick={sendEmail}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact