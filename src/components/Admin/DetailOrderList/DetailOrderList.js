import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'

const DetailOrderList = () => {

    // const [details, setDetails] = useState([])
    // console.log(details)
    // useEffect(() => {
    //     fetch('https://afternoon-beach-11581.herokuapp.com/orders')
    //     .then(res => res.json())
    //     .then(result => {
    //         setDetails(result)
    //     })
    // }, [])

    return (
        <section className="container-fluid row">
            <div className="col-md-4">
                <AdminSidebar />
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0 }}>
                <h5>Detail Order List</h5>
                <div style={{ width: '100%' }} className="row mt-5 table-content">
                    <table className="table table-borderless">
                        <thead className="table-head">
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary w-25" scope="col">Project Details</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {
                                details.map((details) =>
                                    <tr>
                                        <td>{details.name}</td>
                                        <td>{details.email}</td>
                                        <td>{details.service}</td>
                                        <td className="text-justify">{details.description}</td>
                                        <td className="text-danger">Pending</td>
                                    </tr>
                                )
                            }
                        </tbody> */}
                    </table>
                </div>
            </div>

        </section >
    );
};

export default DetailOrderList;