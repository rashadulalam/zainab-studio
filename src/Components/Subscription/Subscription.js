import classNames from 'classnames';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Subscription.module.css';

const Subscription = () => {
    return (
        <section className={classNames(styles.subscriptionArea, 'py-5')}>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col lg='6' className='text-white text-lg-start text-sm-center mb-lg-0 mb-sm-4'>
                        <h4 className='fs-4 fw-normal'>Our Newsletter</h4>
                        <p className='mb-0'>Integer vitae libero ac risus egestas placerat.</p>
                    </Col>
                    <Col lg='6' className='text-white'>
                        <div className={classNames(styles.sFormOuter, 'd-flex align-items-center')}>
                            <input type='text' id='email' className={classNames(styles.sInput, 'w-100', 'p-2', 'rounded-start-2')} />
                            <Button variant='secondary' className={classNames(styles.sButton, 'flex-shrink-1', 'p-2', 'rounded-0')}>Subscribe</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Subscription;