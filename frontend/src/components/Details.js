import React, { Component } from "react";
import CustomersHelper from "./CustomersHelper";
// import axios from "axios";

const customer_helper = new CustomersHelper();

export default class Details extends Component {
  state = {
    customer: {}
  };

  componentDidMount() {
    const {match: {params}} = this.props;
    customer_helper.getCustomer(params.id)
    .then(response => {this.setState({customer: response});
      console.log({customer: response});
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 offset-3">
          <h1>Name: {this.state.customer.username}</h1>
          <h1>Full name: {this.state.customer.full_name}</h1>
          <h1>Email: {this.state.customer.email}</h1>
        </div>
      </div>
    );
  }
}
