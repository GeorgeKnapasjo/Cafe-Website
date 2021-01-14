import React, {useState} from 'react';
import { FormContainer, FormWrapper } from './ContactUs.styled';
import {Button, Form} from 'react-bootstrap';


const ContactUs = () => {
    const [name,setName] = useState('');
    const [message, setMessage] = useState('');
    const [email,setEmail] = useState('');
    return (
        <FormWrapper>
        <FormContainer>
            <h1>Contact Us</h1>

            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} value={name}/>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='name@example.com'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control onChange={(e) => setMessage(e.target.value)} value={message} as='textarea' rows={6}/>
                </Form.Group>
                </Form.Group>
                <Button onClick={()=>console.log(name + message + email)} style={{float:'right'}} variant='outline-secondary'>Submit</Button>
            </Form>
         </FormContainer> 
         </FormWrapper>
    );
};

export default ContactUs;

// padding:1rem;
// border: 1px solid #dee3e5;
// box-shadow: '0 0 4px 2px #dee3e5'