import React, { useContext } from 'react';
import ProductCard from '../components/productCard';
import { ShopContext } from '../context/ShopContext';

// Products page:
// - Shows a grid of ProductCard components.
// - Static for now – students should:
//   - Fetch / read products from Context.
//   - Implement filters, search, sorting etc. if needed.

const Products = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="container-fluid mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">All Products</h2>
        <div className="btn-group btn-group-sm" role="group" aria-label="Filters">
          <button className="btn btn-outline-secondary">
            <i className="fas fa-sliders-h mr-1" />
            Filter
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fas fa-sort-amount-down mr-1" />
            Sort
          </button>
        </div>
      </div>

      <div className="row">
        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

