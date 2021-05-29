import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const DetailOrderList = () => {

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
      <div className="col-md-4">
        <AdminSidebar />
      </div>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0 }}
      >
        <h5>Detail Order List</h5>
        <div style={{ width: "100%" }} className="row mt-5 table-content">
          <table className="table table-borderless">
            <thead className="table-head">
              <tr>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Email ID
                </th>
                <th className="text-secondary" scope="col">
                  Service
                </th>
                <th className="text-secondary" scope="col">
                  Description
                </th>
                <th className="text-secondary" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {
                order.map((details) =>
                  <tr>
                    <td>{details.name}</td>
                    <td>{details.email}</td>
                    <td>{details.title}</td>
                    <td className="text-justify">{details.description}</td>
                    <td className="text-danger">
                      <select name="button" className="btn button-style">
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Done">Done</option>
                      </select>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DetailOrderList;
