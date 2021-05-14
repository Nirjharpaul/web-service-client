import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import icon1 from '../../../images/development.png'

const orderData = [
    {
        title: 'Web Design',
        description: 'It is a long established fact that a reader will be distracted by the readable',
        icon: icon1
    }
]

const OrderList = () => {
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Order List</h5>
                <div className='w-50 p-4 border mt-5'>
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <img className="w-25" src={icon1} alt="" />
                        <p className="p-2" style={{ backgroundColor: 'pink', color: 'red' }}>Pending</p>
                    </div>
                    <h4>Web Development</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro inventore est aperiam, laboriosam sint blanditiis!</p>
                </div>
            </div>
        </section>
    );
};

export default OrderList;