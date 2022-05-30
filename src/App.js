import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListAllUserComponent from "./components/ListAllUserComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import RegisterUserComponent from "./components/RegisterUserComponent";
import DriverListComponent from "./components/DriverListComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/allUser" component={ListAllUserComponent}></Route>
            <Route path="/register" component={RegisterUserComponent}></Route>
            <Route path="/driverList" component={DriverListComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
