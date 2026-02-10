import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { user } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !user.token) return;
      setLoading(true);
      setError('');
      try {
        const res = await fetch('/api/orders/my', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || 'Failed to load orders');
        }
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) {
    return (
      <div className="glass-card p-4 p-md-5 text-center">
        <h2 className="page-title mb-2">My Orders</h2>
        <p className="text-muted mb-3">
          Please login to view your orders.
        </p>
        <Link to="/login" className="btn btn-pill btn-primary">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="glass-card p-4 p-md-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="page-title mb-1">My Orders</h2>
          <p className="page-subtitle mb-0">
            View all your completed purchases in one place.
          </p>
        </div>
      </div>

      {loading && <p className="text-muted mb-0">Loading orders...</p>}
      {error && (
        <div className="alert alert-danger py-2 small" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && orders.length === 0 && (
        <p className="text-muted mb-0">
          You have no orders yet.
        </p>
      )}

      {!loading &&
        !error &&
        orders.map((order) => (
          <div
            key={order._id}
            className="border-bottom border-secondary py-3"
          >
            <div className="d-flex justify-content-between align-items-center mb-1">
              <div>
                <strong>Order #{order._id.slice(-6)}</strong>
                <div className="text-muted small">
                  {new Date(order.createdAt).toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <div className="font-weight-semibold">
                  ₹{order.totalAmount}
                </div>
                <span className="badge-soft badge-soft-success">
                  {order.paymentStatus}
                </span>
              </div>
            </div>
            <ul className="text-muted small mb-0">
              {order.items.map((item) => (
                <li key={`${order._id}-${item.productId}`}>
                  {item.title} × {item.quantity} – ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Orders;

