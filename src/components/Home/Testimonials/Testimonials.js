import React from 'react';
import image1 from '../../../images/Ellipse 01.png'
import image2 from '../../../images/Ellipse 02.png'
import image3 from '../../../images/Ellipse 03.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="container mt-5">
                <h3 className="text-center">Testimonials</h3>
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <div className="card p-4 shadow rounded">
                            <div className="image d-flex align-items-center">
                                <img className="card-img-top w-25 me-3" src={image1} alt="testimonials-img" />
                                <div className="status">
                                    <h5 className="card-title float-left">Nash Patrik</h5>
                                    <h6 className="card-title">CEO, Firebase</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="star p-3" style={{ color: 'orange' }}>
                                <span> <AiFillStar /> </span>
                                <span> <AiFillStar /> </span>
                                <span> <AiFillStar /> </span>
                                <span> <AiFillStar /> </span>
                                <span> <AiFillStar /> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;