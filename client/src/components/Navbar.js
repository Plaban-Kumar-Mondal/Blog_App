import React, { Component } from "react";

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
              <a href="#" class="brand-logo">
                Blog App
              </a>
              <a className="sidenav-trigger right" data-target="mobile-links">
                <i className="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <a href="sass.html">Home</a>
                </li>
                <li>
                  <a href="badges.html">Signup</a>
                </li>
                <li>
                  <a href="collapsible.html">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">Signup</a>
          </li>
          <li>
            <a href="collapsible.html">Login</a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Navbar;
