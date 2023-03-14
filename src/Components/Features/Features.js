import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {BsListCheck} from 'react-icons/bs';
import {MdDesignServices, MdDonutLarge} from 'react-icons/md';
import classNames from 'classnames';
import styles from './Features.module.css';


const Features = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={6} >
                        <div className={classNames(styles.featureText, 'p-4', 'rounded', 'shadow')}>
                            <BsListCheck className={classNames(styles.featureIcon)} />
                            <h3 className={classNames(styles.featureTitle, 'fw-normal', 'mt-2')}>Web Design</h3>
                            <p className={classNames('mb-0', 'fw-normal', styles.featureBody)}>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={6} >
                        <div className={classNames(styles.featureText, 'p-4', 'rounded', 'shadow')}>
                            <MdDesignServices className={classNames(styles.featureIcon)} />
                            <h3 className={classNames(styles.featureTitle, 'fw-normal', 'mt-2')}>Graphic Design</h3>
                            <p className={classNames('mb-0', 'fw-normal', styles.featureBody)}>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={6} >
                        <div className={classNames(styles.featureText, 'p-4', 'rounded', 'shadow')}>
                            <MdDonutLarge className={classNames(styles.featureIcon)} />
                            <h3 className={classNames(styles.featureTitle, 'fw-normal', 'mt-2')}>SEO Services</h3>
                            <p className={classNames('mb-0', 'fw-normal', styles.featureBody)}>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Features;