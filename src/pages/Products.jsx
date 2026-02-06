import React from 'react';
import ProductCard from '../components/productCard';

// Products page:
// - Shows a grid of ProductCard components.
// - Static for now – students should:
//   - Fetch / read products from Context.
//   - Implement filters, search, sorting etc. if needed.

const Products = () => {
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
        {/* TODO: Replace these with products.map(...) from Context */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;

