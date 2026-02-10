import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const STATUS_OPTIONS = ['processing', 'shipped', 'delivered', 'cancelled'];

const AdminOrders = () => {
  const { user } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [savingId, setSavingId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !user.token || user.role !== 'admin') return;
      setLoading(true);
      setError('');
      try {
        const res = await fetch('/api/orders', {
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

  const handleStatusChange = async (orderId, newStatus) => {
    if (!user || !user.token || user.role !== 'admin') return;
    setSavingId(orderId);
    setError('');
    try {
      const res = await fetch(`/api/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to update status');
      }
      const updated = await res.json();
      setOrders((prev) =>
        prev.map((order) =>
          order._id === updated._id ? updated : order
        )
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setSavingId(null);
    }
  };

  if (!user) {
    return (
      <div className="glass-card p-4 p-md-5 text-center">
        <h2 className="page-title mb-2">Admin Orders</h2>
        <p className="text-muted mb-3">
          Please login as an admin to manage orders.
        </p>
        <Link to="/login" className="btn btn-pill btn-primary">
          Go to Login
        </Link>
      </div>
    );
  }

  if (user.role !== 'admin') {
    return (
      <div className="glass-card p-4 p-md-5 text-center">
        <h2 className="page-title mb-2">Admin Orders</h2>
        <p className="text-muted mb-0">
          You are not authorized to view this page.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-4 p-md-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="page-title mb-1">Admin – All Orders</h2>
          <p className="page-subtitle mb-0">
            View and manage all customer orders.
          </p>
        </div>
      </div>

      {loading && <p className="text-muted mb-2">Loading orders...</p>}
      {error && (
        <div className="alert alert-danger py-2 small mb-2" role="alert">
          {error}
        </div>
      )}

      {!loading && orders.length === 0 && !error && (
        <p className="text-muted mb-0">No orders found.</p>
      )}

      {!loading &&
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
                <div className="text-muted small">
                  {order.user
                    ? `${order.user.name} (${order.user.email})`
                    : 'Unknown user'}
                </div>
              </div>
              <div className="text-right">
                <div className="font-weight-semibold">
                  ₹{order.totalAmount}
                </div>
                <span className="badge-soft badge-soft-success mr-2">
                  {order.paymentStatus}
                </span>
                <select
                  className="form-control form-control-sm d-inline-block"
                  style={{ width: '140px' }}
                  value={order.orderStatus}
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  disabled={savingId === order._id}
                >
                  {STATUS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <ul className="text-muted small mb-0">
              {order.items.map((item) => (
                <li key={`${order._id}-${item.productId}`}>
                  {item.title} × {item.quantity} – ₹
                  {item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default AdminOrders;

