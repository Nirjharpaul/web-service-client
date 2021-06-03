import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../Admin/AdminSidebar/AdminSidebar';



const OrderList = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getSpecificOrder`,)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, []);

    return (
        <section className="container-fluid row">
            <AdminSidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Order List</h5>
                {
                    order.map(data => (
                        <div className='w-50 p-4 border mt-5'>
                            <div className="d-flex align-items-center justify-content-between mb-5">
                                <img className="w-25" src={data.imageUrl} alt="" />
                                <p className="p-2" style={{ backgroundColor: 'pink', color: 'red' }}>{data.button}</p>
                            </div>
                            <h5>${data.price}</h5>
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default OrderList;