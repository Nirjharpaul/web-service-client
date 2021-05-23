import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const ManageService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getService`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteService/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/getService`)
        .then((res) => res.json())
        .then((data) => setData(data));
    });
  };
  return (
    <section className="container-fluid row">
      <div className="col-md-4">
        <AdminSidebar />
      </div>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0 }}
      >
        <h5>Manage Service</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {data.map((service) => (
              <tr>
                <td>{service.title}</td>
                <td>{service.price}</td>
                <td>
                  <button
                    onClick={()=>handleDelete(service._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </section>
  );
};

export default ManageService;
