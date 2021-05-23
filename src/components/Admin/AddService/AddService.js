import axios from 'axios';
import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
const AddService = () => {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState({
      title: "",
      description: "",
      price: "",
      message: ""
  })
  const handleChange = (e) => {
    const newInfo = { ...value };
    newInfo[e.target.name] = e.target.value;
    setValue(newInfo);
  };
  const handleFileChange = (e) => {
    const imageData = new FormData();
    imageData.set("key", "cde753ff113ae6fb392cb4252780269b");
    imageData.append("image", e.target.files[0]);
    axios.post(`https://api.imgbb.com/1/upload`, imageData).then((result) => {
        setImage(result.data.data.display_url);
    });
  };
  const handleSubmit = (e) => {
      e.preventDefault();
    const fieldData = {...value};
    fieldData.imageUrl = image;
    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: {
          "content-type":"application/json"
      },
      body: JSON.stringify(fieldData)
    })
      .then((response) => response.json())
      .then(() => {
        const msg = {...value};
        msg.message = "Product Inserted Successfully"
        setValue(msg)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="container-fluid row">
      <AdminSidebar />
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0 }}
      >
        <h5>Add Service</h5>
        <form onSubmit={handleSubmit}>
            {
                value.message && <p className="alert alert-success">{value.message}</p>
            }
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Service Title</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              onChange={handleChange}
              type="description"
              className="form-control"
              name="description"
              placeholder="Enter Description"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Price</label>
            <input
              onChange={handleChange}
              type="number"
              className="form-control"
              name="price"
              placeholder="Enter price"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              name="file"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="btn button-style mt-3">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
