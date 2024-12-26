import React,{useState} from "react";
import emailjs from '@emailjs/browser';
import './email.css';

const EmailForm = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_refbbeu';
        const templateId = 'template_antaw4g';
        const publicKey = 'hr8a9xli5hue0-hgj';

            const templateParams = {
                from_name:name,
                from_email:email,
                to_name:'Dhanesh',
                message:message,
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) =>{
                console.log('Email Send Successfully!',response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:',error);
            });
    }

    return (
        <form onSubmit={handleSubmit} className="emailForm">
            <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
            placeholder="Your Message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            <button type="submit">Send Email</button>
        </form>
    );
}

export default EmailForm;