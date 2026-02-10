import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

// ProductDetails page:
// - This page is meant to show details for ONE product.
// - Currently everything is static and hard‑coded.
// - Students must:
//   - Set up a dynamic route like `/products/:id` using React Router.
//   - Read `id` from `useParams()`.
//   - Find the matching product from Context (`products` array).
//   - Pass that product’s data into this UI (or refactor this to use props).

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="glass-card p-4 p-md-5 text-center">
        <h2 className="page-title mb-2">Product not found</h2>
        <p className="text-muted mb-0">
          The product you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  const {
    title,
    price,
    category,
    rating,
    ratingCount,
    inStock,
    stock,
    thumbnail,
    shortDescription,
    description,
    tags,
  } = product;

  return (
    <div className="glass-card p-4 p-md-5">
      <div className="row">
        {/* Left: Product image + badges */}
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="product-img-wrapper mb-3">
            <img
              src={thumbnail}
              className="img-fluid rounded"
              alt={title}
            />
            <div className="product-img-overlay" />
            <div className="product-price-badge d-flex align-items-center">
              <span className="mr-1">₹{price}</span>
            </div>
          </div>

          <div className="d-flex flex-wrap">
            <span className="badge-soft badge-soft-success mr-2 mb-2">
              {inStock ? 'In stock' : 'Out of stock'}
            </span>
            <span className="badge-soft badge-soft-warning mr-2 mb-2">2‑year warranty</span>
            <span className="badge-soft badge-soft-danger mb-2">Fast delivery</span>
          </div>
        </div>

        {/* Right: Title, rating, description, actions */}
        <div className="col-md-7">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <h2 className="page-title mb-1">{title}</h2>
              <p className="page-subtitle mb-1">
                {category}
              </p>
            </div>
            <div className="text-right">
              <div className="product-rating mb-1">
                <i className="fas fa-star" /> {rating}
                <span className="text-muted ml-1 small">
                  ({ratingCount} reviews)
                </span>
              </div>
              {tags && tags.length > 0 && (
                <small className="text-muted">
                  #{tags[0].toUpperCase()}
                </small>
              )}
            </div>
          </div>

          <hr className="border-secondary" />

          <p className="text-muted">{description || shortDescription}</p>

          <ul className="text-muted small mb-4">
            <li>Up to 40 hrs playtime on a single charge</li>
            <li>USB‑C fast charging – 10 min charge = 4 hrs playback</li>
            <li>Dual device pairing for laptop + phone</li>
            <li>Built‑in microphone with AI noise reduction</li>
          </ul>

          <div className="d-flex align-items-center mb-3">
            <div className="mr-4">
              <div className="h4 mb-0">₹{price}</div>
              <div className="text-muted small">
                Stock: {stock} units
              </div>
            </div>

            <button
              className="btn btn-pill btn-primary mr-2"
              disabled={!inStock}
              onClick={() => addToCart(product)}
            >
              <i className="fas fa-cart-plus mr-1" />
              Add to Cart
            </button>

            {/* TODO: Optionally create a wishlist feature in Context */}
            <button className="btn btn-pill btn-ghost">
              <i className="far fa-heart mr-1" />
              Add to Wishlist
            </button>
          </div>

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

