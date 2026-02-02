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
    <div className="card product-card glass-card h-100 border-0">
      <div className="product-img-wrapper">
        <img
          src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
          className="card-img-top"
          alt="Premium Wireless Headphones"
        />
        <div className="product-img-overlay" />
        <div className="product-price-badge d-flex align-items-center">
          <span className="mr-1">₹4,999</span>
          <span className="badge-soft badge-soft-success ml-2">-30%</span>
        </div>
      </div>

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="product-tag">Best Seller</span>
          <span className="product-rating">
            <i className="fas fa-star" /> 4.8
            <span className="text-muted ml-1">(120)</span>
          </span>
        </div>

        <h5 className="card-title mb-1">AeroTune Wireless Headphones</h5>
        <p className="card-text text-muted mb-3">
          Up to 40 hrs battery, adaptive noise cancellation and ultra‑soft ear cushions for
          all‑day comfort.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mt-auto">
          <div className="mb-2 mb-sm-0">
            <small className="text-muted d-block">
              <del>₹7,199</del>
              <span className="ml-1 text-success font-weight-semibold">You save ₹2,200</span>
            </small>
            <small className="text-muted">Ships in 24 hours</small>
          </div>

          <div className="d-flex">
            {/* TODO: Attach onClick handler from Context to add this product to cart */}
            <button className="btn btn-sm btn-pill btn-primary mr-2">
              <i className="fas fa-cart-plus mr-1" />
              Add to Cart
            </button>

            {/* TODO: Replace with <Link to={`/products/${product.id}`}> when you add routing */}
            <button className="btn btn-sm btn-pill btn-ghost">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

