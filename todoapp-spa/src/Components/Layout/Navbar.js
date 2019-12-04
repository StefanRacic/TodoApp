import React, { useContext, Fragment } from 'react';
import AuthContext from '../context/auth/authContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/table">
          Table
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
    </Fragment>
  );

  const LoggedOut = (
    <Fragment>
      <li className="nav-link">
        <Link className="links" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-link">
        <Link className="links" to="/register">
          Register
        </Link>
      </li>
    </Fragment>
  );

  const LoggedIn = (
    <Fragment>
      <li className="nav-link">
        <Link className="links" to="/" onClick={onLogout}>
          Logout
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Todo App
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
        <form className="navbar-nav form-inline my-2 my-lg-0">
          {isAuthenticated ? LoggedIn : LoggedOut}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
