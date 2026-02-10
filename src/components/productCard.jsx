import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

// NOTE:
// - This card now:
//   - Accepts a `product` prop.
//   - Uses Context actions to add the product to cart.
//   - Links "View details" to `/products/:id`.

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  if (!product) return null;

  const {
    id,
    title,
    price,
    rating,
    ratingCount,
    thumbnail,
    shortDescription,
  } = product;

  return (
    <div className="card h-100 border-0 shadow-sm">
      <img
        src={thumbnail}
        className="card-img-top"
        style={{ height: '220px', width: '100%', objectFit: 'cover' }}
        alt={title}
      />
      <div className="card-body p-3 d-flex flex-column">
        <h6 className="card-title mb-1">{title}</h6>
        <div className="mb-1">
          <span className="badge badge-success mr-1">
            {rating} ★
          </span>
          <small className="text-muted">({ratingCount})</small>
        </div>
        <p className="card-text text-muted small mb-2">
          {shortDescription}
        </p>
        <div className="mb-2">
          <span className="h6 mb-0">₹{price}</span>
        </div>
        <div className="d-flex mt-auto">
          <button
            className="btn btn-sm btn-primary mr-2 flex-grow-1"
            type="button"
            onClick={() => addToCart(product)}
          >
            <i className="fas fa-cart-plus mr-1" />
            Add to Cart
          </button>
          <Link
            to={`/products/${id}`}
            className="btn btn-sm btn-pill btn-ghost"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

