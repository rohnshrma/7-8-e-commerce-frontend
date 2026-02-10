// Import React and useContext hook
import React, { useContext } from "react";
// Import Link component for navigation without page reload
import { Link } from "react-router-dom";
// Import ShopContext to access user data and cart information
import { ShopContext } from "../context/ShopContext";

// Navbar component - displays navigation menu at top of every page
const Navbar = () => {
  // Get user, cart item count, and logout function from global context
  const { user, cartItemCount, logout } = useContext(ShopContext);

  return (
    // Bootstrap navbar with dark theme
    <nav className="navbar navbar-expand-lg navbar-dark">
      {/* Container for navbar content with padding */}
      <div className="container-fluid px-4">
        {/* Brand/logo - links to home page */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          {/* Shopping bag icon */}
          <i className="fas fa-shopping-bag mr-2" />
          {/* Site name */}
          <span className="font-weight-bold">ShopSmart</span>
        </Link>

        {/* Mobile menu toggle button - shown on small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible navbar content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarMain"
        >
          {/* Left side navigation links */}
          <ul className="navbar-nav mr-auto">
            {/* Home link - always visible */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* Products link - always visible */}
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            {/* Admin-only links - only shown if user is logged in AND has admin role */}
            {user && user.role === "admin" && (
              <>
                {/* Add Product link - admin only */}
                <li className="nav-item">
                  <Link className="nav-link" to="/add-product">
                    Add Product
                  </Link>
                </li>
                {/* Admin Orders link - admin only */}
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/orders">
                    Admin Orders
                  </Link>
                </li>
              </>
            )}
            {/* Cart link - always visible */}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
                {/* Show cart item count badge if cart has items */}
                {cartItemCount > 0 && (
                  <span className="badge badge-pill badge-primary ml-2">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Right side navigation links */}
          <ul className="navbar-nav align-items-center">
            {/* Show Login and Register links if user is NOT logged in */}
            {!user && (
              <>
                {/* Login link */}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                {/* Register button */}
                <li className="nav-item">
                  <Link
                    className="btn btn-sm btn-primary ml-lg-2"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            {/* Show user info and logout if user IS logged in */}
            {user && (
              <>
                {/* My Orders link - shown for all logged-in users */}
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    My Orders
                  </Link>
                </li>
                {/* User greeting - hidden on mobile, shown on medium+ screens */}
                <li className="nav-item mr-2 text-muted small d-none d-md-block">
                  Hi, <span className="font-weight-semibold">{user.name}</span>
                </li>
                {/* Logout button */}
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Export Navbar component
export default Navbar;
