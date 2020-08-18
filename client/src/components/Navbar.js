import React, { Component } from "react";
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
            <div class="nav-wrapper">
              <a class="brand-logo">Blog App</a>
              <a className="sidenav-trigger right" data-target="mobile-links">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Signup</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </section>
    );
  }
}

export default Navbar;
