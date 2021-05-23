import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/getService`)
        .then(res=>res.json())
        .then(data=>setData(data))
    })
  return (
    <section className="services-container container mt-5">
      <div className="text-center">
        <p className="text-color">Services</p>
        <h3 className="text-color">
          <strong>We are Provide many Services</strong>
        </h3>
      </div>
      <div className="container">
        <div className="row mt-5">
          {data.map((service) => (
            <ServiceDetail service={service} key={service._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
