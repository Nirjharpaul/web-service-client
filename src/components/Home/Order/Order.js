import React from 'react';
import CheckoutForm from '../../CheckoutFrom/CheckoutForm';
import Sidebar from '../Sidebar/Sidebar';
import CreditCard from '../../../images/credit-card 1.png'

const Order = () => {
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Order</h5>
                <form>
                    <div className="form-group mt-5">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input type="description" className="form-control" name="description" placeholder="Description" />
                    </div>

                </form>
                <div className="mt-5">
                    <h4>Pay with stripe <img src={CreditCard} alt="" /></h4>
                    <CheckoutForm />
                </div>
            </div>
        </section>
    );
};

export default Order;