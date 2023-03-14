import classNames from 'classnames';
import React from 'react';
// import img from './assets/images/slide-2.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import img from './about.jpg';
import styles from './TeamWork.module.css';
import {BsCheck2Circle} from 'react-icons/bs';
const TeamWork = () => {
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col lg={6}>
                        <img src={img} alt='Our team' className='w-100' />
                    </Col>

                    <Col lg={6}>
                        <div className={classNames(styles.teamtext)}>
                            <h2 className='fw-normal'>Our Team Members</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            <div className='my-2'>
                                <div><BsCheck2Circle className='text-danger' /> Consectetur adipiscing elit, sed do</div>
                                <div><BsCheck2Circle className='text-danger' /> Consectetur adipiscing elit, sed do</div>
                                <div><BsCheck2Circle className='text-danger' /> Consectetur adipiscing elit, sed do</div>
                                <div><BsCheck2Circle className='text-danger' /> Consectetur adipiscing elit, sed do</div>
                                
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default TeamWork;