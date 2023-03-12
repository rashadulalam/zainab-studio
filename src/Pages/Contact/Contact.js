import classNames from 'classnames';
import React from 'react';
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import {GMap, ZsBreadcrumb} from '../../Components';
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
                        <Col lg={6} md={6}>
                            <div className='contactWidget text-center shadow-sm p-5'>
                                <div className='cwicon'>
                                    {/* icon */}
                                </div>
                                <h4>Our Address</h4>
                                <p className='mb-0'>Laksam-3570, Cumilla, BD</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='contactWidget text-center shadow-sm p-5'>
                                <div className='cwicon'>
                                    {/* icon */}
                                </div>
                                <h4>Email Us</h4>
                                <Link to='mailto:rashadul91@gmail.com'>rashadul91@gmail.com</Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='contactWidget text-center shadow-sm p-5'>
                                <div className='cwicon'>
                                    {/* icon */}
                                </div>
                                <h4>Call Us</h4>
                                <Link to='tel:+8801748950648'>(+880) 1748 950648</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-2 mb-4'>
                        <Col lg={6} md={12}>
                            <div className='contactWidget text-center shadow-sm p-5'>
                                <GMap zoomLavel={17} />
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default Contact;