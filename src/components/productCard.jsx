import React from 'react';

// NOTE:
// - This is a PURELY PRESENTATIONAL card with placeholder data.
// - Do NOT add useState/useContext here for now.
// - Students should later:
//   - Pass real product data using props OR Context.
//   - Wire up the "Add to Cart" button using Context API.
//   - Link the "View details" action to a dynamic route like `/products/:id`.

const ProductCard = () => {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <img
        src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
        className="card-img-top"
        alt="Premium Wireless Headphones"
      />
      <div className="card-body p-3 d-flex flex-column">
        <h6 className="card-title mb-1">
          AeroTune Wireless Headphones
        </h6>
        <div className="mb-1">
          <span className="badge badge-success mr-1">4.8 ★</span>
          <small className="text-muted">(120)</small>
        </div>
        <p className="card-text text-muted small mb-2">
          Up to 40 hrs battery, noise cancellation and ultra‑soft ear cushions for all‑day comfort.
        </p>
        <div className="mb-2">
          <span className="h6 mb-0">₹4,999</span>{' '}
          <small className="text-muted">
            <del>₹7,199</del>
          </small>{' '}
          <span className="text-success font-weight-bold">30% off</span>
        </div>
        <button className="btn btn-sm btn-block btn-primary mt-auto">
          <i className="fas fa-cart-plus mr-1" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

