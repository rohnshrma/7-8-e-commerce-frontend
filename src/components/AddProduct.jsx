import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

// NOTE:
// - Pure UI for "Add Product" form with Bootstrap styling.
// - All inputs are uncontrolled (no state).
// - Students must:
//   - Capture form values using useState or useReducer.
//   - Use Context API to add product into global products list.
//   - Optionally validate the form and show error messages.

const AddProduct = () => {
  const { addProduct, products, user } = useContext(ShopContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    price: '',
    stock: '',
    category: 'Headphones',
    thumbnail: '',
    shortDescription: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id === 'productName'
        ? 'title'
        : id === 'description'
        ? 'shortDescription'
        : id === 'price'
        ? 'price'
        : id === 'stock'
        ? 'stock'
        : id]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    setForm((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleReset = () => {
    setForm({
      title: '',
      price: '',
      stock: '',
      category: 'Headphones',
      thumbnail: '',
      shortDescription: '',
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!user || user.role !== 'admin') {
      setError('Only admin users can add products.');
      return;
    }

    if (!form.title || !form.price || !form.stock || !form.thumbnail) {
      setError('Please fill in product name, price, stock and image URL.');
      return;
    }

    const price = Number(form.price);
    const stock = Number(form.stock);

    const numericValid =
      !Number.isNaN(price) && !Number.isNaN(stock) && price > 0 && stock >= 0;

    if (!numericValid) {
      setError('Price must be > 0 and stock must be >= 0.');
      return;
    }

    const newId = `custom-${products.length + 1}-${Date.now()}`;
    const newProduct = {
      id: newId,
      title: form.title,
      price,
      category: form.category,
      rating: 0,
      ratingCount: 0,
      inStock: stock > 0,
      stock,
      thumbnail: form.thumbnail,
      shortDescription: form.shortDescription,
      description: form.shortDescription,
      tags: ['custom'],
    };

    addProduct(newProduct);
    handleReset();
    navigate('/products');
  };

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

      {!user || user.role !== 'admin' ? (
        <div className="text-center">
          <p className="text-muted mb-3">
            Only admin users can access this page.
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
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
              value={form.title}
              onChange={handleChange}
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
              value={form.price}
              onChange={handleChange}
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
              value={form.stock}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="category" className="text-muted">
              Category
            </label>
            <select
              id="category"
              className="form-control auth-input"
              value={form.category}
              onChange={handleCategoryChange}
            >
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
              value={form.thumbnail}
              onChange={handleChange}
            />
          </div>
          {/* Discount removed for now */}
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
            value={form.shortDescription}
            onChange={handleChange}
          />
        </div>

        {error && (
          <div className="alert alert-danger py-2 small" role="alert">
            {error}
          </div>
        )}

        {/* TODO: Prevent default, validate, send data to Context to create a new product */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <button
            type="button"
            className="btn btn-pill btn-ghost"
            onClick={handleReset}
          >
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

