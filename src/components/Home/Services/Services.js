import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        title: 'Web Design',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        icon: ''
    },
    {
        title: 'Web Design',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        icon: ''
    },
    {
        title: 'Web Design',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        icon: ''
    }
]
const Services = () => {
    return (
        <div className="mt-5 pt-5">
            <div className="text-center">
                <p className="text-color">Services</p>
                <h3 className="text-color"><strong>We are Provide many Services</strong></h3>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.title} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;