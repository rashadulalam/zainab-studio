import React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {BiChevronRight} from 'react-icons/bi'
import {SocialLinks} from '../../Components';


const Footer = () => {
    return (
        
        <>
            <footer>
                <div className={classNames('py-5', styles.footerWidgets)}>
                    <Container>
                        <Row>
                            <Col lg={3} md={6} className='mb-md-4'>
                                <div className={classNames(styles.footerWidgetItem)}>
                                <h4 className='text-white text-uppercase my-3'>Useful Links</h4>
                                <div className={classNames('d-flex flex-column', styles.footerWidgetItem)}>
                                    <Link to='/' className=''> <BiChevronRight /> Home</Link>
                                    <Link to='/about' className=''> <BiChevronRight /> About</Link>
                                    <Link to='/services' className=''> <BiChevronRight /> Services</Link>
                                    <Link to='/contact' className=''> <BiChevronRight /> Contact</Link>
                                </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className='mb-md-4'>
                                <div className={classNames(styles.footerWidgetItem)}>
                                <h4 className='text-white text-uppercase my-3'>OUR SERVICES</h4>
                                <div className={classNames('d-flex flex-column', styles.footerWidgetItem)}>
                                    <Link to='/' className=''> <BiChevronRight /> Web Design</Link>
                                    <Link to='/' className=''> <BiChevronRight />Web Development</Link>
                                    <Link to='/' className=''> <BiChevronRight /> Product Management</Link>
                                    <Link to='/' className=''> <BiChevronRight />Marketing</Link>
                                </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className='mb-md-4'>
                                <div className={classNames(styles.footerWidgetItem)}>
                                <h4 className='text-white text-uppercase my-3'>CONTACT US</h4>
                                    <address className='text-white'>
                                        Laksam-3570, Cumilla, BD <br />
                                        <div className='my-3'></div>
                                        <b>Phone: </b> (+880) 1748 950648 <br />
                                        <b>Email: </b> rashadul91@gmail.com <br />
                                    </address>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className='mb-md-4'>
                                <div className={classNames(styles.footerWidgetItem)}>
                                <h4 className='text-white text-uppercase my-3'>About Zainab</h4>
                                    <p className='m-0 text-white'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                                    <div className='my-3'></div>
                                    <SocialLinks />
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>

                <div className={classNames(styles.footerCopyright)}>
                    <Container className="text-center py-3">
                        <p className='m-0'>&copy; Copyright Zainab. All Rights Reserved</p>
                        <p className='m-0'>Designed by <Link to="https://rashadul.com">Rashadul Alam</Link></p>
                    </Container>
                </div>

            </footer>
            
        </>
        
    );
};

export default Footer;