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
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
