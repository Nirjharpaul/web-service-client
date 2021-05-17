import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center p-3 border">
            <Link to="/order" style={{ textDecoration: "none" }} >
                <div>
                    <img className='w-25' src={service.icon} alt="" />
                    <h5 className="mt-3">{service.title}</h5>
                    <h5 className="mt-3">{service.price}</h5>
                    <p className="mt-3">{service.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;