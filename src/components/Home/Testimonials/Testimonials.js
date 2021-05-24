import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/getReview`)
            .then(res => res.json())
            .then(data => setData(data))
    })

    return (
        <div className='testimonials'>
            <div className="container mt-5">
                <h3 className="text-center">Testimonials</h3>
                <div className="row">

                    {
                        data.map(dataInfo =>
                            <div className="col-md-4 mt-5">
                                <div className="card p-4 shadow rounded">
                                    <div className="image d-flex align-items-center">
                                        <img className="card-img-top w-25 me-3" style={{ borderRadius: "50%" }} src={dataInfo.imageUrl} alt="testimonials-img" />
                                        <div className="status">
                                            <h5 className="card-title float-left">{dataInfo.name}</h5>
                                            <h6 className="card-title">{dataInfo.designation}</h6>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{dataInfo.description}</p>
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
                        )}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;