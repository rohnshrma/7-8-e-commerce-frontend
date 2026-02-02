import React from 'react';
import ProductCard from '../components/productCard';

// Products page:
// - Shows a grid of ProductCard components.
// - Static for now – students should:
//   - Fetch / read products from Context.
//   - Implement filters, search, sorting etc. if needed.

const Products = () => {
  return (
    <div className="glass-card p-4 p-md-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="page-title mb-1">All Products</h2>
          <p className="page-subtitle mb-0">
            Render this grid from your global products array in Context instead of static
            components.
          </p>
        </div>
        <div className="d-none d-md-flex">
          <button className="btn btn-sm btn-pill btn-ghost mr-2">
            <i className="fas fa-sliders-h mr-1" />
            Filters
          </button>
          <button className="btn btn-sm btn-pill btn-ghost">
            <i className="fas fa-sort-amount-down mr-1" />
            Sort
          </button>
        </div>
      </div>

      <div className="row">
        {/* TODO: Replace these with products.map(...) from Context */}
        <div className="col-sm-6 col-md-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;

