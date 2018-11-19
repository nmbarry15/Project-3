import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
// import { Link, Route } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import NavBar from "../components/NavBar";
import NavBarCust from "../components/NavBarCust";
import Main from "../components/Main";
import Foot from "../components/Foot";


class Customer extends Component {
  state = {
    isLoggedIn: false,
    user: {id:1,
            name:"Eric"}
  };
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <NavBar user={this.state.user} background={"white"}/> : <NavBarCust user={this.state.user} />}
        <Main />
        <Foot />
      </div>
    );
  }
}
export default Customer