import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'

const ManageService = () => {
    return (
        <section className="container-fluid row">
            <div className="col-md-4">
                <AdminSidebar />
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Manage Service</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </section>
    );
};

export default ManageService;