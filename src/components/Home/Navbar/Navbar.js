import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand" href="#"> <img style={{ height: '4rem' }} src={logo} alt="" /> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active me-5">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="#">Admin</a>
                        </li>

                    </ul>

                    <Link to='/login'><button class="btn button-style" type="submit">Login</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;