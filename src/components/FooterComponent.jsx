import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div>
            <span className="text-muted">Referenced List</span>
          </div>
          <div>
            <span className="text-muted">
              All rights Reserved 2022 @Kairos{" "}
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
