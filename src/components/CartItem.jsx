import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

// NOTE:
// - Displays a single cart item using data from Context.
// - Buttons are wired to increase/decrease quantity and remove item.

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } =
    useContext(ShopContext);

  if (!item) return null;

  const { id, title, price, quantity, thumbnail } = item;
  const lineTotal = price * quantity;

  return (
    <div className="d-flex align-items-center justify-content-between py-3 border-bottom border-secondary">
      <div className="d-flex align-items-center">
        <div className="mr-3">
          <img
            src={thumbnail}
            alt={title}
            className="rounded"
            style={{ width: '64px', height: '64px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h6 className="mb-1">{title}</h6>
          <div className="text-muted small">
            <span className="mr-2">Color: Midnight</span>
            <span className="badge-soft badge-soft-success">In stock</span>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="btn-group btn-group-sm mr-3" role="group" aria-label="Quantity">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => decreaseQty(id)}
          >
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-dark px-3" disabled>
            {quantity}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => increaseQty(id)}
          >
            <i className="fas fa-plus" />
          </button>
        </div>

        <div className="text-right mr-3">
          <div className="font-weight-semibold">₹{lineTotal}</div>
          <small className="text-muted">
            ₹{price} x {quantity}
          </small>
        </div>

        <button
          type="button"
          className="btn btn-link text-danger p-0"
          onClick={() => removeFromCart(id)}
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

