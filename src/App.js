import './App.css';
import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';


export const userLogIn = createContext();

function App() {

  const [user, setUser] = useState({});

  return (

    <userLogIn.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <PrivateRoute path="/review" >
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/order" >
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/orderList" >
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/detailOrderList" >
            <DetailOrderList />
          </PrivateRoute>
          <PrivateRoute path="/addService" >
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin" >
            <MakeAdmin />
          </PrivateRoute>
          <Route path="/manageService" >
            <ManageService />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </userLogIn.Provider>

  );
}

export default App;
