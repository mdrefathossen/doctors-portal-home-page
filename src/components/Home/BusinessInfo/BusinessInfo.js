import React from 'react';
import InfoData from '../InfoData/InfoData';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: "We are open 7 days",
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visite Our Location',
        description: "Brooklyn,NY 1003 USA",
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: "+15697854124",
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row ">
                {
                    infosData.map(info => <InfoData info={info}></InfoData>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;