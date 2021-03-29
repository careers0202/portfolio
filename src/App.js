import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import Home from './home';
import About from './about';
import MissingPage from './404';
import User from './user';

class Parent extends Component {
  constructor(){
    super();
    this.state = {
      userslist: []
    }
  }


  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/404" component={MissingPage}/>
            <Route path="/user/:ID" component={User}/>
            <Redirect to='/404'/>
          </Switch>
        </Router>
      </div>
    )
  }

}


export default Parent; 

