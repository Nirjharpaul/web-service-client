import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import icon1 from '../../../images/design.png'
import icon2 from '../../../images/development.png'
import icon3 from '../../../images/social-media.png'

const serviceData = [
    {
        title: 'Web Design',
        description: 'It is a long established fact that a reader will be distracted by the readable',
        icon: icon1
    },
    {
        title: 'Web Development',
        description: 'It is a long established fact that a reader will be distracted by the readable',
        icon: icon2
    },
    {
        title: 'Social Media Marketing',
        description: 'It is a long established fact that a reader will be distracted',
        icon: icon3
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <p className="text-color">Services</p>
                <h3 className="text-color"><strong>We are Provide many Services</strong></h3>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row mt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;