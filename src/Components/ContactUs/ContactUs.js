import React from 'react';
import { FormContainer, FormWrapper } from './ContactUs.styled';
import {Form} from 'react-bootstrap'

const ContactUs = () => {
    return (
        <FormWrapper>
        <FormContainer>
            <Form style={{marginBottom:'10rem'}}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control/>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' rows={6}/>
                </Form.Group>
                </Form.Group>
            </Form>
         </FormContainer> 
         </FormWrapper>
    );
};

export default ContactUs;