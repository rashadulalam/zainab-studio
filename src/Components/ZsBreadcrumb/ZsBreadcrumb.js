import React from 'react';
import styles from './ZsBreadcrumb.module.css';
import { Breadcrumb } from 'react-bootstrap';
import {Link } from 'react-router-dom';

const ZsBreadcrumb = (props) => {
    return (
        <>
            <Breadcrumb>
            <Breadcrumb.Item as={Link} href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item as={Link} href="/">Contact</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
};

export default ZsBreadcrumb;