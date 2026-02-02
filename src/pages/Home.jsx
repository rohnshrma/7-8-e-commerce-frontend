import React from 'react';
import ProductCard from '../components/productCard';

// Home page:
// - Hero/banner section for offers.
// - Highlighted products row using the ProductCard UI.
// - All content is static; students will later feed real data from Context.

const Home = () => {
  return (
    <div className="row">
      <div className="col-lg-7 mb-4 mb-lg-0">
        <div className="hero-gradient glass-card h-100 d-flex flex-column justify-content-between">
          <div>
            <div className="hero-badge mb-3">
              <i className="fas fa-bolt mr-2" />
              Mega Tech Fest • 2026
            </div>
            <h1 className="hero-title mb-3">
              Upgrade your desk.
              <br />
              <span className="text-primary">Save up to 60% today.</span>
            </h1>
            <p className="hero-subtitle mb-4">
              Hand‑picked tech essentials for students and creators. Build your own cart logic
              and checkout flow using React Context API.
            </p>
          </div>

          <div className="d-flex flex-wrap align-items-center">
            <button className="btn btn-lg btn-pill btn-primary mr-3 mb-2">
              <i className="fas fa-shopping-basket mr-2" />
              Explore Top Deals
            </button>
            <button className="btn btn-lg btn-pill btn-ghost mb-2">
              <i className="fas fa-play-circle mr-2" />
              Watch Demo
            </button>
          </div>

          <div className="mt-4 d-flex flex-wrap align-items-center">
            <div className="floating-pill mr-3 mb-2">
              <i className="fas fa-shield-alt mr-1" />
              2‑year warranty on all products
            </div>
            <div className="category-chip mb-2">Free delivery above ₹999</div>
          </div>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="glass-card p-3 h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="mb-1">Trending right now</h5>
              <p className="text-muted small mb-0">
                Render 3 cards here using your own product data.
              </p>
            </div>
            <span className="badge-soft badge-soft-success">Live</span>
          </div>

          <div className="row">
            <div className="col-md-12 mb-3">
              <ProductCard />
            </div>
            <div className="col-md-6 mb-3">
              <ProductCard />
            </div>
            <div className="col-md-6 mb-3">
              <ProductCard />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <small className="text-muted">
              TODO: Replace these static cards with map over products from Context.
            </small>
            <button className="btn btn-sm btn-link text-primary">
              View all products <i className="fas fa-arrow-right ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

