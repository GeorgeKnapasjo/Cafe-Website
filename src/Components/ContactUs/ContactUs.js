import React, {useState} from 'react';
import { FormContainer, FormWrapper, LoadingSpinnerContainer, LoadingSpinnerWrapper } from './ContactUs.styled';
import {Button, Form} from 'react-bootstrap';
import emailJs from 'emailjs-com';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ContactUs = () => {
    const [name,setName] = useState('');
    const [message, setMessage] = useState('');
    const [email,setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(true);
    // const [nameError, setNameError] = useState(false);
    // const [emailError, setEmailError] = useState(false);
    // const [messageError, setMessageError] = useState(false);

    const validateForm = (e) => {
        setLoading(true);
        e.preventDefault();
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validEmail = regex.test(email.toLowerCase())
        const validName = name.length !== 0;
        const validMessage = message.length !== 0;
        if(validEmail && validName && validMessage){
            sendEmail(e);
        } else if(!validName){
            setLoading(false);
            // setNameError(true);
            document.getElementById('name').focus();
        } else if(!validMessage){
            setLoading(false);
            // setMessageError(true);
            document.getElementById('name').focus();
        }else{
            console.log('deez nuts')
            // setEmailError(true);
            setLoading(false);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailJs.sendForm('service_78qqv1f', 'template_9ftt2d6', e.target,'user_TrzbbZdtFDUPIWpgZ3G1Y')
        .then((response)=>{
            console.log('success', response.status, response.text)
            setName('');
            setEmail('');
            setMessage('');
            setForm(false);
            setLoading(false);
        }, (error)=>{
            console.log('failed', error)
        });

    }

    return (
        <FormWrapper>
        <FormContainer disabled={loading}>
            <h1>Contact Us</h1>
            <Form onSubmit={validateForm}>
            {loading &&
            <LoadingSpinnerWrapper>
                <LoadingSpinnerContainer>
                    <LoadingSpinner style={{position:'relative'}}/>
                </LoadingSpinnerContainer>
                </LoadingSpinnerWrapper>
            }
            {form && <>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control disabled={loading} onChange={(e) => setName(e.target.value)} value={name} name='name' id='name'/>
                    {/* {nameError && <Form.Text>Please enter a name</Form.Text>} */}
                <Form.Group style={{marginTop:'0.5rem'}}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control disabled={loading} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='name@example.com' name='email' id='email'/>
                    {/* {emailError && <Form.Text>Please enter a email</Form.Text>} */}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control disabled={loading} onChange={(e) => setMessage(e.target.value)} value={message} as='textarea' rows={6} name='message' id='message'/>
                    {/* {messageError && <Form.Text>Please enter a email</Form.Text>} */}
                </Form.Group>
                </Form.Group>
                <Button type='submit' style={{float:'right'}} variant='outline-secondary'>Submit</Button>
            </>
            }
            </Form>
         </FormContainer> 
         </FormWrapper>
    );
};

export default ContactUs;

// padding:1rem;
// border: 1px solid #dee3e5;
// box-shadow: '0 0 4px 2px #dee3e5'