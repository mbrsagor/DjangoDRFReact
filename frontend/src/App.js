import React, { Component } from "react";
// import css
import "./App.css";

// install bootstrap framework and react router
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import all component here
import Navbar from "./component/Navbar";
import CustomerCreateUpdate from "./component/CustomerCreateUpdate";
import CustomersList from "./component/CustomersList";
import Details from "./component/Details";
import Default from "./component/Default";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={CustomersList} />
            <Route path="/createUpdate/:id" component={CustomerCreateUpdate} />
            <Route path="/createUpdate/" component={CustomerCreateUpdate} />
            <Route path="/details/:id" component={Details} />
            <Route component={Default} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
