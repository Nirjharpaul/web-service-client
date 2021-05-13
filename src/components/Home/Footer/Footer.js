import React from 'react';

import fb from '../../../images/fb.png'
import ni from '../../../images/in.png'
import ld from '../../../images/ld.png'
import yt from '../../../images/yt.png'


const Footer = () => {

    return (
        <footer class="text-center text-lg-start" style={{ backgroundColor: '#344fa1', color: 'white' }}>
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Address</h5>
                        <p>H 10/A, Road: 454, Dhaka, Bangladesh-1230.</p>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Company</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" class="text-white">About</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Project</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Our Team</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Terms and Condition</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Quick Links</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" class="text-white">Policy</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Contact</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Analytics</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">About Us</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias.</p>
                        <div>
                            <img className="me-3" style={{ height: '25px' }} src={fb} alt="" />
                            <img className="me-3" style={{ height: '25px' }} src={ni} alt="" />
                            <img className="me-3" style={{ height: '25px' }} src={ld} alt="" />
                            <img className="me-3" style={{ height: '25px' }} src={yt} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center p-3">
                <small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
            </div>
        </footer>

    );
};

export default Footer;