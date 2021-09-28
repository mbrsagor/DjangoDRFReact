import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              ref="userName"
              placeholder="Enter your Username"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              ref="fullName"
              placeholder="Enter Full name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              ref="email"
              placeholder="Enter your email address"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
