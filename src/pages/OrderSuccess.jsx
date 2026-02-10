import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const OrderSuccess = () => {
  const { user, cart, clearCart } = useContext(ShopContext);
  const [status, setStatus] = useState('processing');
  const [error, setError] = useState('');
  const query = useQuery();
  const sessionId = query.get('session_id');

  useEffect(() => {
    const confirmOrder = async () => {
      if (!user || !user.token || !sessionId || cart.length === 0) {
        setStatus('done');
        return;
      }

      try {
        const res = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            sessionId,
            items: cart,
          }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Failed to confirm order');
        }

        clearCart();
        setStatus('done');
      } catch (err) {
        setError(err.message);
        setStatus('done');
      }
    };

    confirmOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, sessionId]);

  return (
    <div className="glass-card p-4 p-md-5 text-center">
      <h2 className="page-title mb-2">Payment Successful</h2>
      {status === 'processing' && (
        <p className="text-muted mb-3">
          Finalizing your order. Please wait a moment...
        </p>
      )}
      {status === 'done' && !error && (
        <p className="text-muted mb-3">
          Thank you for your purchase! Your order has been placed.
        </p>
      )}
      {error && (
        <div className="alert alert-danger py-2 small mb-3" role="alert">
          {error}
        </div>
      )}

      <div className="d-flex justify-content-center">
        <Link to="/orders" className="btn btn-pill btn-primary mr-2">
          View My Orders
        </Link>
        <Link to="/products" className="btn btn-pill btn-ghost">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;

