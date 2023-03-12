import classNames from 'classnames';
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import styles from './SocialLinks.module.css';
const SocialLinks = () => {
    return (
        <div className={classNames(styles.socialLinks, 'd-flex')}>
            <Link to="https://facebook.com"><BsFacebook /></Link>
            <Link to="https://twitter.com"><BsTwitter /></Link>
            <Link to="https://instagram.com"><BsInstagram /></Link>
            <Link to="https://linkedin.com" ><BsLinkedin /></Link>
        </div>
    );
};

export default SocialLinks;