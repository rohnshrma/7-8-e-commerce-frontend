import React from 'react';
import CartItem from '../components/CartItem';

// Cart page:
// - Uses CartItem for each product in the cart.
// - Static subtotal + item count for now.
// - Students must:
//   - Read cart items + totals from Context.
//   - Implement increase/decrease quantity, remove item, and clear cart.

const Cart = () => {
  return (
    <div className="row">
      <div className="col-lg-8 mb-4 mb-lg-0">
        <div className="glass-card p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="page-title mb-1">Your Cart</h2>
              <p className="page-subtitle mb-0">
                Build reducers and Context to make these items truly dynamic.
              </p>
            </div>
            <span className="badge-soft badge-soft-warning d-none d-md-inline">
              3 items
            </span>
          </div>

          {/* TODO: Replace these static items with cartItems.map(...) from Context */}
          <CartItem />
          <CartItem />
          <CartItem />

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-link text-danger p-0">
              <i className="far fa-trash-alt mr-1" />
              Clear cart
            </button>
            <small className="text-muted">
              TODO: Disable checkout when cart is empty using Context.
            </small>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="glass-card p-4">
          <h5 className="mb-3">Order Summary</h5>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Subtotal</span>
            <span>₹19,996</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Discount</span>
            <span className="text-success">-₹2,000</span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-muted">Delivery</span>
            <span className="text-success">Free</span>
          </div>

          <hr className="border-secondary" />

          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="font-weight-semibold">Total</span>
            <span className="h5 mb-0">₹17,996</span>
          </div>

          <button className="btn btn-pill btn-primary btn-block mb-2">
            <i className="fas fa-lock mr-1" />
            Proceed to Checkout
          </button>
          <small className="text-muted d-block text-center">
            TODO: Redirect to Login if user is not authenticated (use Context).
          </small>
        </div>
      </div>
    </div>
  );
};

export default Cart;

