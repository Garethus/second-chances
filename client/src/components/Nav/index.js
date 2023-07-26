import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { FcMultipleSmartphones } from "react-icons/fc";

function Nav() {
  function showNavigation() {

    if (Auth.loggedIn()) {
      return (
        <ol className="flex-row bullets" style={{ listStyle: 'none' }}>
          <li className="mx-3">
            <Link to="/products">Products</Link>
          </li>
          <li className="mx-3">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-3">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ol>
      );
    } else {
      return (
        <ol className="flex-row" style={{ listStyle: 'none' }}>
          <li className="mx-3">
            <Link to="/products">Products</Link>
          </li>
          <li className="mx-3">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-3">
            <Link to="/login">Login</Link>
          </li>
        </ol>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            <FcMultipleSmartphones />
          </span>
          Second-Chances
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
