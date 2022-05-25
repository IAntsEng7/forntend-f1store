import React, { Component } from "react";
import UserService from "../services/UserService";

export default class ListAllUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">User List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>UID</th>
                <th>User Account</th>
                <th>User Name</th>
                <th>User Phone</th>
                <th>User Email Address</th>
                <th>Create Date</th>
                <th>Last modified Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.uId}>
                  <td>{user.uAccount}</td>
                  <td>{user.uName}</td>
                  <td>{user.uPhone}</td>
                  <td>{user.uEmail}</td>
                  <td>{user.createTime}</td>
                  <td>{user.modifiedTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
