import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomersHelper from "./CustomersHelper.js";
import swal from "sweetalert";

const customer_helper = new CustomersHelper();

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    var self = this;
    customer_helper.getCustomers().then(function(result) {
      self.setState({
        customers: result
      });
    });
  }

  handleDelete(e, id) {
    swal({
      title: "Are you sure?",
      text: "Customer will be deleted permanently!",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        var self = this;
        customer_helper.deleteCustomer({id: id}).then(() => {
          var newArr = self.state.customers.filter(function(obj) {
            return obj.id !== id;
          });
          self.setState({ customers: newArr });
        });
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="add_new_btn">
            <Link className="btn btn-primary" to={`/createUpdate/`}>
              Add New
            </Link>
          </div>
        </div>
        <div className="col-lg-12">
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th className="text-center" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map(customer => (
                <tr key={customer.id}>
                  <td>#{customer.id} </td>
                  <td>{customer.username}</td>
                  <td>{customer.full_name}</td>
                  <td>{customer.email}</td>
                  <td className="text-center">
                    <Link  className="btn btn-primary margin_right5" to={`/details/${customer.id}`}>Detail</Link>
                    <Link className="btn btn-info margin_right5" to={`/createUpdate/${customer.id}`}>Update</Link>
                    <button className="btn btn-danger" onClick={e => this.handleDelete(e, customer.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
