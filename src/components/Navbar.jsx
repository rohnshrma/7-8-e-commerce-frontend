import React from 'react';

// NOTE:
// - All numbers, login state, and navigation are STATIC placeholders.
// - Students must:
//   - Replace the hardcoded cart count with Context-based value.
//   - Conditionally show Login/Register vs. Logout using auth state from Context.
//   - Wire up navigation using React Router (or any routing solution).

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent border-bottom border-secondary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span className="mr-2">
            <i className="fas fa-shopping-bag" />
          </span>
          <span>ShopSmart</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto align-items-lg-center">
            <li className="nav-item mx-lg-1">
              {/* TODO: Replace href with <Link> to Home route */}
              <a className="nav-link active" href="#">
                <i className="fas fa-fire mr-1" />
                Home
              </a>
            </li>
            <li className="nav-item mx-lg-1">
              {/* TODO: Route to Products page */}
              <a className="nav-link" href="#">
                <i className="fas fa-th-large mr-1" />
                All Products
              </a>
            </li>
            <li className="nav-item mx-lg-1">
              {/* TODO: Route to Add Product page & protect for admin if needed */}
              <a className="nav-link" href="#">
                <i className="fas fa-plus-circle mr-1" />
                Add Product
              </a>
            </li>

            <li className="nav-item mx-lg-2 my-2 my-lg-0">
              {/* TODO: Replace hardcoded "3" with cart length from Context */}
              <div className="nav-pill d-flex align-items-center">
                <i className="fas fa-shopping-cart mr-2" />
                <span>Cart</span>
                <span className="badge badge-pill badge-primary cart-count-badge ml-2">
                  3
                </span>
              </div>
            </li>

            {/* TODO: Conditionally render this block based on auth state from Context */}
            <li className="nav-item mx-lg-1">
              <a className="nav-link" href="#">
                <i className="far fa-user mr-1" />
                Login
              </a>
            </li>
            <li className="nav-item mx-lg-1">
              <a className="btn btn-sm btn-pill btn-primary" href="#">
                Register
              </a>
            </li>

            {/* Example of how Logout could look visually (keep commented for reference)
            <li className="nav-item mx-lg-1">
              <button className="btn btn-sm btn-pill btn-outline-light">
                <i className="fas fa-sign-out-alt mr-1" />
                Logout
              </button>
            </li>
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

