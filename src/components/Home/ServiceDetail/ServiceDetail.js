import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center p-3 border">
            <div className=''>
                <img className='w-25' src={service.icon} alt="" />
                <h5 className="mt-3">{service.title}</h5>
                <p className="mt-3">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;