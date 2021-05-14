import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'

const ManageService = () => {
    return (
        <section className="container-fluid row">
            <AdminSidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Manage Service</h5>

            </div>
        </section>
    );
};

export default ManageService;