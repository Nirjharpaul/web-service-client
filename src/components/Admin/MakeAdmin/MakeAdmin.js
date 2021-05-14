import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'

const MakeAdmin = () => {
    return (
        <section className="container-fluid row">
            <AdminSidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Make an Admin</h5>
                <form>
                    <div className="form-group mt-5">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn button-style mt-3">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;