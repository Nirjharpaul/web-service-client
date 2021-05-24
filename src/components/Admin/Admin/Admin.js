import React from 'react';
import AddService from '../AddService/AddService';
import DetailOrderList from '../DetailOrderList/DetailOrderList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';

const Admin = () => {
    return (
        <div>
            <DetailOrderList></DetailOrderList>
            <AddService></AddService>
            <MakeAdmin></MakeAdmin>
            <ManageService></ManageService>
        </div>
    );
};

export default Admin;