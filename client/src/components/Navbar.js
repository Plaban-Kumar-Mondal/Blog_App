import React, { useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="indigo darken-4">
      <div className="container">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Blog App
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
  );
};

export default Navbar;
