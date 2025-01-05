import React,{useState} from "react";
import emailjs from '@emailjs/browser';
import './email.css';

const EmailForm = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [subject,setSubject] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_refbbeu';
        const templateId = 'template_antaw4g';
        const publicKey = 'hr8a9xli5hue0-hgj';

            const templateParams = {
                from_name:name,
                from_email:email,
                from_number:phoneNumber,
                subject:subject,
                to_name:'Dhanesh',
                message:message,
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) =>{
                console.log('Email Send Successfully!',response);
                setName('');
                setEmail('');
                setMessage('');
                setPhoneNumber('');
                setSubject('');
                setSuccessMessage(true);
                setTimeout(() => setSuccessMessage(false), 5000);
            })
            .catch((error) => {
                console.error('Error sending email:',error);
            });
    }

    return (
        <div id="Contact">
    <h2>Where Creativity Meets Functionality—Let’s Collaborate!</h2>
    <p>Have a project in mind? Let’s connect and bring your vision to life!</p>

    {successMessage && (
          <div class="notification">
          Mail Sent Successfully!
        </div>
        )}

        <form onSubmit={handleSubmit} className="emailForm">
            <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <input 
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
            type="tel"
            placeholder="Your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            />
            <input 
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            />
            <textarea
            placeholder="Your Message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            >
            </textarea>
            <button type="submit">Send</button>
        </form>
   </div> );
}

export default EmailForm;