import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const Review = () => {

    const [image, setImage] = useState(null);
    const [value, setValue] = useState({
        name: "",
        designation: "",
        description: "",
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
        const fieldData = { ...value };
        fieldData.imageUrl = image;
        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(fieldData)
        })
            .then((response) => response.json())
            .then(() => {
                const msg = { ...value };
                msg.message = "Product Inserted Successfully"
                setValue(msg)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Review</h5>
                <form onSubmit={handleSubmit}>
                    {
                        value.message && <p className="alert alert-success">{value.message}</p>
                    }
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onChange={handleChange} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Designation</label>
                        <input onChange={handleChange} type="designation" className="form-control" name="description" placeholder="Designation" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onChange={handleChange} type="description" className="form-control" name="description" placeholder="Description" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn button-style mt-3">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Review;