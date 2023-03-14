import classNames from 'classnames';
import React from 'react';
import styles from './GMap.module.css'
const GMap = () => {
    return (
        <>
            <iframe title='mylocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583088354!2d-74.11976389828038!3d40.697663748695746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z4Kao4Ka_4KaJIOCmh-Cmr-CmvOCmsOCnjeCmlSwg4Kau4Ka-4Kaw4KeN4KaV4Ka_4KaoIOCmr-CngeCmleCnjeCmpOCmsOCmvuCmt-CnjeCmn-CnjeCmsA!5e0!3m2!1sbn!2sbd!4v1678714709417!5m2!1sbn!2sbd" width="400" height="300" className={classNames('w-100', styles.border)} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default GMap;