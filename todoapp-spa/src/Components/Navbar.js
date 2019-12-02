import React from 'react';

const Navbar = () => {
  return (
    <nav className="indigo darken-4">
      <div className="nav-wrapper container ">
        <a href="#" class="brand-logo">
          Todo App
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Log in</a>
          </li>
          <li>
            <a href="badges.html">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
