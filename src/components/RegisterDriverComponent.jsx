import React, { Component } from "react";

export default class RegisterDriverComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverNumber: "",
      team: "",
      podiums: "",
      driverName: "",
      country: "",
      picUrl: "",
      describe: "",
    };
  }

  render() {
    return <div>RegisterDriverComponent</div>;
  }
}
