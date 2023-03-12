import React from 'react';
import {FiMapPin} from 'react-icons/fi'
import styles from './LocationPin.module.css'
const LocationPin = ({text}) => {
    return (
        <div>
            <FiMapPin className={styles.pinIcon} />
            <p className={styles.pinText}>{text}</p>
        </div>
    );
};

export default LocationPin;