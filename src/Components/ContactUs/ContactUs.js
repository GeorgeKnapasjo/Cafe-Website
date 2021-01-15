import React, {useState} from 'react';
import { FormContainer, FormWrapper } from './ContactUs.styled';
import {Button, Form} from 'react-bootstrap';
import emailJs from 'emailjs-com';

const ContactUs = () => {
    const [name,setName] = useState('');
    const [message, setMessage] = useState('');
    const [email,setEmail] = useState('');

    const sendEmail = (e) => {
        const emailFormat = {name, message, email}
        e.preventDefault();
        console.log(e.target)
        emailJs.sendForm('service_78qqv1f', 'template_9ftt2d6', e.target,'user_TrzbbZdtFDUPIWpgZ3G1Y')
        .then((response)=>{
            console.log('success', response.status, response.text)
            setName('');
            setEmail('');
            setMessage('');
        }, (error)=>{
            console.log('failed', error)
        });

    }
    return (
        <FormWrapper>
        <FormContainer>
            <h1>Contact Us</h1>

            <Form onSubmit={sendEmail}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} value={name} name='name'/>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='name@example.com' name='email'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control onChange={(e) => setMessage(e.target.value)} value={message} as='textarea' rows={6} name='message'/>
                </Form.Group>
                </Form.Group>
                <Button type='submit' style={{float:'right'}} variant='outline-secondary'>Submit</Button>
            </Form>
         </FormContainer> 
         </FormWrapper>
    );
};

export default ContactUs;

// padding:1rem;
// border: 1px solid #dee3e5;
// box-shadow: '0 0 4px 2px #dee3e5'