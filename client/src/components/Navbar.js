import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <section>
        <nav className="purple darken-3">
          <div className="container">
            <div className="nav-wrapper">
              <a className="brand-logo">Blog App</a>
              <a className="sidenav-trigger right" data-target="mobile-links">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <Fragment>
                  <li>
                    <NavLink to="/signup">Signup</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </Fragment>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <Fragment>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </Fragment>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </section>
    );
  }
}

export default Navbar;
