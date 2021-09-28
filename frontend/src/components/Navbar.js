import React, { Component } from "react";

export default class Navbar extends Component {
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/">Django React Demo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" href="/">CUSTOMERS</a>
                                <a className="nav-item nav-link" href={`/createUpdate/`}>CREATE CUSTOMER</a>
                            </div>
                        </div>
                    </nav>  
                </div>
            </div>
        );
    }
}
