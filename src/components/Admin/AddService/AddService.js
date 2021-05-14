import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'



const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <AdminSidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Add Service</h5>
                <form onSubmit={handleSubmit}>

                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter title" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="description" className="form-control" name="description" placeholder="Enter Description" />
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

export default AddService;