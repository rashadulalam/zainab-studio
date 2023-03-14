import classNames from 'classnames';
import React from 'react';
import { Breadcrumb, Container, Row, Col, Button} from 'react-bootstrap';
import {GMap} from '../../Components';
import {BiMap, BiEnvelope} from 'react-icons/bi';
import {TbPhoneCall} from 'react-icons/tb';
import {Link} from 'react-router-dom';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <header className={classNames(styles.headerArea)}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            
                        <Breadcrumb>
                            <Breadcrumb.Item as={Link} href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Contact</Breadcrumb.Item>
                        </Breadcrumb>
                            <h1 className={classNames('text-start display-5 my-2 text-uppercase')}>Contact us</h1>
                        </Col>
                    </Row>
                </Container>
            </header>
            
            <main className='py-5'>
                <Container>
                    <Row className='py-2 mb-4'>
                        <Col lg={6}  className='mb-0 mb-sm-4'>
                            <div className='contactWidget text-center shadow-sm p-5'>
                                <div className='cwicon'>
                                    <BiMap className={styles.contactIcon} />
                                </div>
                                <h4>Our Address</h4>
                                <p className='mb-0'>Laksam-3570, Cumilla, BD</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='mb-0 mb-sm-4'>
                            <div className='contactWidget text-center shadow-sm p-5'>
                                <div className='cwicon'>
                                    <BiEnvelope className={styles.contactIcon} />
                                </div>
                                <h4>Email Us</h4>
                                <Link to='mailto:rashadul91@gmail.com'>rashadul91@gmail.com</Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='mb-0 mb-sm-4'>
                            <div className='contactWidget text-center shadow-sm p-5'>
                                <div className='cwicon'>
                                    <TbPhoneCall className={styles.contactIcon} />
                                </div>
                                <h4>Call Us</h4>
                                <Link to='tel:+8801748950648'>(+880) 1748 950648</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-2 mb-4'>
                        <Col lg={6} md={12} className='mb-0 mb-sm-4'>
                            <div className='contactWidget text-center shadow-sm p-5'>
                                <GMap />
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='contact-form-outer shadow-sm p-5'>
                                <Row>
                                    <Col md={6}>
                                        <div className='mb-3'>
                                            <input type="text" className='w-100 p-2' id="name" placeholder='Your Name' />
                                            <label for="name" className='d-none'>Your Name</label>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='mb-3'>
                                            <input type="email" className='w-100 p-2' id="email" placeholder='Your Email' />
                                            <label for="email" className='d-none'>Your Name</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className='mb-3'>
                                            <input type="text" className='w-100 p-2' id="subject" placeholder='Subject' />
                                            <label for="subject" className='d-none'>Subject</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className='mb-3'>
                                            <textarea rows="4" id='message' className='w-100 p-2' placeholder='Message'/>
                                            <label for="message" className='d-none'>Message</label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <Button variant='secondary'>Send Message</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default Contact;