import React from 'react';

// NOTE:
// - Pure UI for "Add Product" form with Bootstrap styling.
// - All inputs are uncontrolled (no state).
// - Students must:
//   - Capture form values using useState or useReducer.
//   - Use Context API to add product into global products list.
//   - Optionally validate the form and show error messages.

const AddProduct = () => {
  return (
    <div className="glass-card p-4 p-md-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="page-title mb-1">Add New Product</h2>
          <p className="page-subtitle mb-0">
            Create beautiful product cards and push them into your global store using
            Context.
          </p>
        </div>
        <span className="badge-soft badge-soft-warning d-none d-md-inline-flex align-items-center">
          <span className="badge-dot mr-2" />
          Admin only
        </span>
      </div>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="productName" className="text-muted">
              Product Name
            </label>
            <input
              type="text"
              className="form-control auth-input"
              id="productName"
              placeholder="Ex: AeroTune Wireless Headphones"
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="price" className="text-muted">
              Price (₹)
            </label>
            <input
              type="number"
              className="form-control auth-input"
              id="price"
              placeholder="4999"
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="stock" className="text-muted">
              In Stock
            </label>
            <input
              type="number"
              className="form-control auth-input"
              id="stock"
              placeholder="20"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="category" className="text-muted">
              Category
            </label>
            <select id="category" className="form-control auth-input">
              <option>Headphones</option>
              <option>Mobiles</option>
              <option>Laptops</option>
              <option>Accessories</option>
              <option>Wearables</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="thumbnail" className="text-muted">
              Image URL
            </label>
            <input
              type="text"
              className="form-control auth-input"
              id="thumbnail"
              placeholder="https://..."
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="discount" className="text-muted">
              Discount (%)
            </label>
            <input
              type="number"
              className="form-control auth-input"
              id="discount"
              placeholder="30"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="text-muted">
            Short Description
          </label>
          <textarea
            className="form-control auth-input"
            id="description"
            rows="3"
            placeholder="Highlight the main features and why customers will love this product."
          />
        </div>

        {/* TODO: Prevent default, validate, send data to Context to create a new product */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <button type="button" className="btn btn-pill btn-ghost">
            <i className="fas fa-undo mr-1" />
            Reset
          </button>
          <button type="submit" className="btn btn-pill btn-primary">
            <i className="fas fa-cloud-upload-alt mr-1" />
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

