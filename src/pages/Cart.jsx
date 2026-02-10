import React, { useContext, useState } from 'react';
import CartItem from '../components/CartItem';
import { ShopContext } from '../context/ShopContext';

// Cart page:
// - Uses CartItem for each product in the cart.
// - Static subtotal + item count for now.
// - Students must:
//   - Read cart items + totals from Context.
//   - Implement increase/decrease quantity, remove item, and clear cart.

const Cart = () => {
  const {
    cart,
    clearCart,
    cartSubtotal,
    cartTotal,
    user,
  } = useContext(ShopContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const itemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const isEmpty = cart.length === 0;

  const handleCheckout = async () => {
    if (!user || !user.token || isEmpty) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/payments/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ items: cart }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to start checkout');
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned from server');
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
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
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>

          {isEmpty && (
            <p className="text-muted mb-0">
              Your cart is empty. Start adding some products!
            </p>
          )}

          {!isEmpty &&
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-link text-danger p-0"
              onClick={clearCart}
              disabled={isEmpty}
            >
              <i className="far fa-trash-alt mr-1" />
              Clear cart
            </button>
            <small className="text-muted">
              {isEmpty
                ? 'Add items to cart to proceed to checkout.'
                : 'You can still edit quantities before checkout.'}
            </small>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="glass-card p-4">
          <h5 className="mb-3">Order Summary</h5>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Subtotal</span>
            <span>₹{cartSubtotal}</span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-muted">Delivery</span>
            <span className="text-success">Free</span>
          </div>

          <hr className="border-secondary" />

          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="font-weight-semibold">Total</span>
            <span className="h5 mb-0">₹{cartTotal}</span>
          </div>

          <button
            className="btn btn-pill btn-primary btn-block mb-2"
            disabled={isEmpty || !user || loading}
            onClick={handleCheckout}
          >
            <i className="fas fa-lock mr-1" />
            {loading ? 'Redirecting…' : 'Proceed to Checkout'}
          </button>
          {error && (
            <div
              className="alert alert-danger py-2 small mt-2"
              role="alert"
            >
              {error}
            </div>
          )}
          <small className="text-muted d-block text-center">
            {!user
              ? 'Please login to continue with checkout.'
              : isEmpty
              ? 'Add items to your cart to proceed to checkout.'
              : 'This is a demo – hook this button to your backend checkout flow.'}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Cart;

