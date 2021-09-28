import React, { Component } from "react";
// import css
import "./App.css";

// install bootstrap framework and react router
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import all component here
import Header from "./components/header";
import CustomerCreateUpdate from "./components/CustomerCreateUpdate";
import CustomersList from "./components/CustomersList";
import Details from "./components/Details";
import Default from "./components/Default";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
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
