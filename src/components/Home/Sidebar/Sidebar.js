import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'
import logo from "../../../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faCommentDots, } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
// import {   } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    const { name } = useParams();
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-dark">
                        <img style={{ height: "50px" }} className="img-fluid ml-5" src={logo} alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="/order/:`${name}`" className="text-dark">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service" className="text-dark">
                        <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-dark">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;