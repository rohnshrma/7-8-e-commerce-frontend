import React from 'react';

// ProductDetails page:
// - This page is meant to show details for ONE product.
// - Currently everything is static and hard‑coded.
// - Students must:
//   - Set up a dynamic route like `/products/:id` using React Router.
//   - Read `id` from `useParams()`.
//   - Find the matching product from Context (`products` array).
//   - Pass that product’s data into this UI (or refactor this to use props).

const ProductDetails = () => {
  return (
    <div className="glass-card p-4 p-md-5">
      <div className="row">
        {/* Left: Product image + badges */}
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="product-img-wrapper mb-3">
            <img
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="img-fluid rounded"
              alt="Product"
            />
            <div className="product-img-overlay" />
            <div className="product-price-badge d-flex align-items-center">
              <span className="mr-1">₹4,999</span>
              <span className="badge-soft badge-soft-success ml-2">-30%</span>
            </div>
          </div>

          <div className="d-flex flex-wrap">
            <span className="badge-soft badge-soft-success mr-2 mb-2">In stock</span>
            <span className="badge-soft badge-soft-warning mr-2 mb-2">2‑year warranty</span>
            <span className="badge-soft badge-soft-danger mb-2">Fast delivery</span>
          </div>
        </div>

        {/* Right: Title, rating, description, actions */}
        <div className="col-md-7">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <h2 className="page-title mb-1">AeroTune Wireless Headphones</h2>
              <p className="page-subtitle mb-1">
                Midnight • Over‑ear • Bluetooth 5.3
              </p>
            </div>
            <div className="text-right">
              <div className="product-rating mb-1">
                <i className="fas fa-star" /> 4.8
                <span className="text-muted ml-1 small">(120 reviews)</span>
              </div>
              <small className="text-muted">#HEADPHONES</small>
            </div>
          </div>

          <hr className="border-secondary" />

          <p className="text-muted">
            Experience studio‑grade sound with adaptive noise cancellation, ultra‑soft memory
            foam cushions, and up to 40 hours of battery life. Perfect for long study sessions,
            flights, and deep work.
          </p>

          <ul className="text-muted small mb-4">
            <li>Up to 40 hrs playtime on a single charge</li>
            <li>USB‑C fast charging – 10 min charge = 4 hrs playback</li>
            <li>Dual device pairing for laptop + phone</li>
            <li>Built‑in microphone with AI noise reduction</li>
          </ul>

          <div className="d-flex align-items-center mb-3">
            <div className="mr-4">
              <div className="h4 mb-0">₹4,999</div>
              <small className="text-muted">
                <del>₹7,199</del> • You save ₹2,200
              </small>
            </div>

            {/* TODO: Connect to your addToCart(product) from Context */}
            <button className="btn btn-pill btn-primary mr-2">
              <i className="fas fa-cart-plus mr-1" />
              Add to Cart
            </button>

            {/* TODO: Optionally create a wishlist feature in Context */}
            <button className="btn btn-pill btn-ghost">
              <i className="far fa-heart mr-1" />
              Add to Wishlist
            </button>
          </div>

          <small className="text-muted d-block mb-3">
            TODO: Use real product data here based on route param and Context.
          </small>

          <div className="d-flex flex-wrap">
            <div className="floating-pill mr-2 mb-2">
              <i className="fas fa-shield-alt mr-1" />
              Secure checkout
            </div>
            <div className="floating-pill mr-2 mb-2">
              <i className="fas fa-truck mr-1" />
              Free delivery above ₹999
            </div>
            <div className="floating-pill mb-2">
              <i className="fas fa-sync-alt mr-1" />
              7‑day replacement policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

