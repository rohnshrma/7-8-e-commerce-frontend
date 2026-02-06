import React from 'react';
import ProductCard from '../components/productCard';

// Home page:
// - Hero/banner section for offers.
// - Highlighted products row using the ProductCard UI.
// - All content is static; students will later feed real data from Context.

const Home = () => {
  return (
    <>
      {/* Top hero banner (Amazon‑style promo) */}
      <div className="jumbotron jumbotron-fluid bg-white border rounded mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-5 font-weight-bold">
                Upgrade your desk this week
              </h1>
              <p className="lead mb-3">
                Exclusive deals on headphones, laptops, keyboards and more. Build your own cart and
                checkout logic using React Context.
              </p>
              <button className="btn btn-primary btn-lg mr-2">
                <i className="fas fa-tags mr-1" />
                Shop today&apos;s deals
              </button>
              <button className="btn btn-outline-secondary btn-lg">
                Browse all categories
              </button>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <img
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="img-fluid rounded"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product rows similar to Amazon home */}
      <div className="mt-4">
        <h4 className="mb-3">Deals inspired by your wishlist</h4>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <ProductCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <ProductCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <ProductCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <ProductCard />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="mb-3">Best sellers in electronics</h4>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <ProductCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <ProductCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <ProductCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

