import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Review from './components/Home/Review/Review';
import Order from './components/Home/Order/Order';
import OrderList from './components/Home/OrderList/OrderList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import DetailOrderList from './components/Admin/DetailOrderList/DetailOrderList';
import ManageService from './components/Admin/ManageService/ManageService';




function App() {

  return (

    <Router>
      <Switch>
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/review" >
          <Review />
        </Route>
        <Route path="/order" >
          <Order />
        </Route>
        <Route path="/orderList" >
          <OrderList />
        </Route>
        <Route path="/detailOrderList" >
          <DetailOrderList />
        </Route>
        <Route path="/addService" >
          <AddService />
        </Route>
        <Route path="/makeAdmin" >
          <MakeAdmin />
        </Route>
        <Route path="/manageService" >
          <ManageService />
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
