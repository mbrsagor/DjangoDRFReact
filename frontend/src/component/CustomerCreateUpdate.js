import React, { Component } from "react";
import CustomersHelper from "./CustomersHelper.js";
import {ToastsContainer, ToastsStore} from 'react-toasts';

// This component using customer `create` `update` `retrieve` and `delete` methods.
const customer_helper = new CustomersHelper();

export default class CustomerCreateUpdate extends Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  // show customer information form
    componentDidMount(){
      const {match: {params}} = this.props;
      if(params.id)
      {
        customer_helper.getCustomer(params.id).then((customer)=>{
          this.refs.userName.value = customer.username;
          this.refs.fullName.value = customer.full_name;
          this.refs.email.value = customer.email;
          // console.log(this.refs.userName.value);
        })
      }
    }
  
  // Create customer 
  handleCreate(){
    customer_helper.createCustomer({
      "username": this.refs.userName.value,
      "full_name": this.refs.fullName.value,
      "email": this.refs.email.value
    }).then((result)=>{
      ToastsStore.success('successfully created the customer!');
    }).catch(()=>{
      ToastsStore.warning('Something went wrong while creating the customer.');
    });
  }

  // Update customer 
  handleUpdate(id){
      customer_helper.updateCustomer({
        "id": id,
        "username": this.refs.userName.value,
        "full_name": this.refs.fullName.value,
        "email": this.refs.email.value,
      }).then((result)=>{
        console.log(result);
        ToastsStore.success('The customer updated successfully!');
      }).catch(()=>{
        ToastsStore.success('Something went wrong while updated the customer.');
      });
    }
    
    // Create update customer `handler`
    handleSubmit(event) {
      const {match: {params}} = this.props;
      
      if(params && params.id){
        this.handleUpdate(params.id);
      } else {
        this.handleCreate();
      } event.preventDefault();
    }
  
    render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input className="form-control" type="text" ref='userName' placeholder="Enter your Username" />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" ref='fullName' placeholder="Enter Full name" />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" ref='email' placeholder="Enter your email address" />
              </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-lg-6 text-right">
          <div className="message">
            <ToastsContainer store={ToastsStore} />
          </div>
        </div>
      </div>
    );
  }
}
