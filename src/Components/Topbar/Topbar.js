import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Topbar.module.css';
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsFillEnvelopeFill, BsPhone} from 'react-icons/bs';

const Topbar = () => {
    return (
        <>
            <section className={classNames(styles.topbarArea)}>
                <Container> 
                    <Row>
                        <Col sm={6}>
                            <div className={classNames(styles.contactInfo)}>
                                <Link to="mailto:someone@example.com" className="d-inline-flex align-items-center"><BsFillEnvelopeFill className={classNames(styles.contactInfoIcons)} /> someone@example.com</Link>
                                <Link to="tel:123-456-7890" className="d-inline-flex align-items-center"><BsPhone className={classNames(styles.contactInfoIcons)} />123-456-7890</Link>
                            </div>
                        </Col>
                        <Col sm={6} className="">
                            <div className='social-info d-flex justify-content-end'>
                                <Link to="https://facebook.com"><BsFacebook /></Link>
                                <Link to="https://twitter.com"><BsTwitter /></Link>
                                <Link to="https://instagram.com"><BsInstagram /></Link>
                                <Link to="https://linkedin.com"><BsLinkedin /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Topbar;