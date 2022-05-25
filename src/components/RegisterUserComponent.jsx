import React, { Component } from "react";
import UserService from "../services/UserService";

export default class RegisterUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uAccount: "",
      uPWD: "",
      uName: "",
      uPhone: "",
      uEmail: "",
    };

    this.changeUAccountHandler = this.changeUAccountHandler.bind(this);
    this.changeUPwdHandler = this.changeUPwdHandler.bind(this);
    this.changeUNameHandler = this.changeUNameHandler.bind(this);
    this.changeUPhoneHandler = this.changeUPhoneHandler.bind(this);
    this.changeUEmailHandler = this.changeUEmailHandler.bind(this);
    this.saveNewRegister = this.saveNewRegister.bind(this);
  }

  changeUAccountHandler = (event) => {
    this.setState({ uAccount: event.target.value });
  };

  changeUPwdHandler = (event) => {
    this.setState({ uPWD: event.target.value });
  };
  changeUNameHandler = (event) => {
    this.setState({ uName: event.target.value });
  };

  changeUPhoneHandler = (event) => {
    this.setState({ uPhone: event.target.value });
  };

  changeUEmailHandler = (event) => {
    this.setState({ uEmail: event.target.value });
  };

  // Create a new register
  saveNewRegister = (event) => {
    event.preventDefault();
    let newRegister = {
      uAccount: this.state.uAccount,
      uName: this.state.uName,
      uPWD: this.state.uPWD,
      uPhone: this.state.uPhone,
      uEmail: this.state.uEmail,
    };
    console.log("newRegister" + JSON.stringify(newRegister));

    UserService.saveNewRegister(newRegister).then((result) => {
      this.props.history.push("/");
    });
  };

  // Cancel register
  cancelRegister() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row" margin-top="100px">
            <div className="card col-md-8 offset-md-2">
              <h3 className="text-center"> Register Your New Account </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Account Name: (For Login Use)</label>
                    <input
                      placeholder="Account Name"
                      name="uAccount"
                      className="form-control"
                      value={this.state.uAccount}
                      onChange={this.changeUAccountHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Account Password: (For Login Use)</label>
                    <input
                      placeholder="Password"
                      name="uPWD"
                      className="form-control"
                      value={this.state.uPWD}
                      onChange={this.changeUPwdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Full Name:</label>
                    <input
                      placeholder="Full Name"
                      name="uName"
                      className="form-control"
                      value={this.state.uName}
                      onChange={this.changeUNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                      placeholder="0987-654-321"
                      name="uPhone"
                      className="form-control"
                      value={this.state.uPhone}
                      onChange={this.changeUPhoneHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Address:</label>
                    <input
                      placeholder="sample@f1store.com"
                      name="uEmail"
                      className="form-control"
                      value={this.state.uEmail}
                      onChange={this.changeUEmailHandler}
                    />
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancelRegister.bind(this)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={this.saveNewRegister}
                    style={{ marginLeft: "10px" }}
                  >
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
