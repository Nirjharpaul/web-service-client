import React from 'react';

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h5>Contact</h5>
                    <h3 className="text-color"><strong>Let Us handle Your Project</strong></h3>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" placeholder="Full Name *" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group mt-3">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center mt-3">
                            <button type="button" className="btn button-style"> Send Massage </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;