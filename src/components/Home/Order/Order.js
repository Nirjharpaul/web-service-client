import React, { useContext, useEffect, useState } from 'react';
import CheckoutForm from '../../CheckoutFrom/CheckoutForm';
import AdminSidebar from '../../Admin/AdminSidebar/AdminSidebar';
import CreditCard from '../../../images/credit-card 1.png'
import { userLogIn } from '../../../App'
import { useParams } from 'react-router';

const Order = () => {

    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userLogIn);
    const [service, setService] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/getOrder/${id}`,)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, []);

    return (
        <section className="container-fluid row">
            <AdminSidebar></AdminSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Order</h5>
                <form>
                    <div className="form-group mt-5">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" defaultValue={loggedInUser.email} placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" name="name" defaultValue={loggedInUser.name} placeholder="Name" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Service Name</label>
                        <input type="description" className="form-control" name="service" defaultValue={service.title} placeholder="Service Name" />
                    </div>
                </form>

                <div className="mt-3">
                    <h5>Your Cost will be:${service.price}</h5>
                </div>
                <div className="mt-5">
                    <h4>Pay with stripe <img src={CreditCard} alt="" /></h4>
                    <CheckoutForm service={service} />
                </div>
            </div>
        </section>
    );
};

export default Order;