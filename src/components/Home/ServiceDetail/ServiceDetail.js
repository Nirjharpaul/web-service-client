import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userLogIn } from "../../../App";

const ServiceDetail = ({ service }) => {
  const { title, price, description, imageUrl, _id } = service;
  const [user, setUser] = useContext(userLogIn);

  const handleOrder = (id) => {
    fetch(`http://localhost:5000/addOrder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify()
    });
  };
  return (
    <div className="col-md-4 text-center mt-3">
      <div className="p-3 shadow border">
        <Link
          to={`/order/${_id}`}
          onClick={() => handleOrder(service._id)}
          style={{ textDecoration: "none" }}
        >
          <div>
            <img className="w-25" src={imageUrl} alt="" />
            <h5 className="mt-3">{title}</h5>
            <h5 className="mt-3">${price}</h5>
            <p className="mt-3">{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
