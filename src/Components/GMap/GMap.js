import React from 'react';
import styles from './GMap.module.css';
import GoogleMapReact from 'google-map-react';
import {LocationPin} from '../../Components';
const GMap = ({zoomLevel}) => {
    
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      } // our location object from earlier

    return (
        <>
            <div className='google-map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ Key:'' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin 
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>

            </div>
        </>
    );
};

export default GMap;