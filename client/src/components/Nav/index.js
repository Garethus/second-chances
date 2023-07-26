import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { FcMultipleSmartphones } from "react-icons/fc";

function Nav() {
  function showNavigation() {

    if (Auth.loggedIn()) {
      return (
        <ol className="flex-row bullets">
          <li className="mx-3">
            <Link to="/products" style={{ textDecoration: 'none' }}>Products</Link>
          </li>
          <li className="mx-3">
            <Link to="/orderHistory" style={{ textDecoration: 'none' }}>Order History</Link>
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
        <ol className="flex-row">
          <li className="mx-3">
            <Link to="/products" style={{ textDecoration: 'none' }}>Products</Link>
          </li>
          <li className="mx-3">
            <Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link>
          </li>
          <li className="mx-3">
            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          </li>
        </ol>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h5>
        <Link to="/" className="mx-3" style={{ textDecoration: 'none' }}>
          <span role="img" aria-label="shopping bag">
            <FcMultipleSmartphones />
          </span>
          Second-Chances
        </Link>
      </h5>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
