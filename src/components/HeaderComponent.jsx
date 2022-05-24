import React, { Component } from "react";
import logo from "../pic/f1_logo.svg";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-danger">
            <a className="navbar-brand" href="http://localhost:3000/">
              <img src={logo} className="logo" alt="logo" height="33" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Race Results <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Teams
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Drivers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Store
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/allUser">
                    User
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register Account
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
