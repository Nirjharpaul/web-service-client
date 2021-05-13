import React from 'react';
import image1 from '../../../images/project01.jpg'
import image2 from '../../../images/project02.jpg'
import image3 from '../../../images/project03.jpg'


const Projects = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="text-center mb-5">
                <p className="text-color">Projects</p>
                <h4><strong>Latest web Design <br />available here</strong> </h4>
            </div>
            <div className="d-flex justify-content-around mt-5">
                <img className="ms-4" style={{ height: '250px' }} src={image1} alt="" />
                <img className="ms-4" style={{ height: '250px' }} src={image2} alt="" />
                <img className="ms-4" style={{ height: '250px' }} src={image3} alt="" />
            </div>
        </div>
    );
};

export default Projects;