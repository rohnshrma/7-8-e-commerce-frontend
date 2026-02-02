import React from 'react';

// NOTE:
// - Presentational component showing 1 item in the cart.
// - No logic / state here.
// - Students must:
//   - Pass real data (title, price, qty, thumbnail) from Context.
//   - Implement + / - / Remove actions using Context API + reducer.

const CartItem = () => {
  return (
    <div className="d-flex align-items-center justify-content-between py-3 border-bottom border-secondary">
      <div className="d-flex align-items-center">
        <div className="mr-3">
          <img
            src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Cart item"
            className="rounded"
            style={{ width: '64px', height: '64px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h6 className="mb-1">AeroTune Wireless Headphones</h6>
          <div className="text-muted small">
            <span className="mr-2">Color: Midnight</span>
            <span className="badge-soft badge-soft-success">In stock</span>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className="btn-group btn-group-sm mr-3" role="group" aria-label="Quantity">
          {/* TODO: Hook these buttons to reducer actions: DECREMENT, INCREMENT */}
          <button type="button" className="btn btn-ghost">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-dark px-3" disabled>
            2
          </button>
          <button type="button" className="btn btn-ghost">
            <i className="fas fa-plus" />
          </button>
        </div>

        <div className="text-right mr-3">
          <div className="font-weight-semibold">₹9,998</div>
          <small className="text-muted">₹4,999 x 2</small>
        </div>

        {/* TODO: Dispatch REMOVE_FROM_CART from here */}
        <button type="button" className="btn btn-link text-danger p-0">
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

