import React from 'react';
import {Row, Form} from 'react-bootstrap';
const CForm = () => {
    return (
        <>
            <Row>
                <Form>
                    <Form.Group className='col-md-6 mb-3' controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Your Name'></Form.Control>
                    </Form.Group>
                    <Form.Group className='col-md-6 mb-3' controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='text' placeholder='Your Email'></Form.Control>
                    </Form.Group>
                </Form>
            </Row>
        </>
    );
};

export default CForm;