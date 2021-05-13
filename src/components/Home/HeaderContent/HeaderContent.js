import React from 'react';
import image from '../../../images/header.jpg'

const HeaderContent = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-md-4">
                    <h1 className="text-color"><strong>We build <br /> Your Dream Website</strong> </h1>
                    <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit officia soluta voluptas, provident quam totam?</p>
                    <button className="btn button-style">Order Now</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" style={{ height: "400px" }} src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;