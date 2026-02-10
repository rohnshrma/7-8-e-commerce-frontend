// Import React and useContext hook
import React, { useContext } from "react";
// Import ProductCard component to display individual products
import ProductCard from "../components/productCard";
// Import ShopContext to access products from global state
import { ShopContext } from "../context/ShopContext";

// Home page component - landing page with hero banner and featured products
const Home = () => {
  // Get products array from global context
  const { products } = useContext(ShopContext);
  // Get first 8 products to display as featured products
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      {/* Hero banner section - promotional banner at top of page */}
      <div className="jumbotron jumbotron-fluid bg-white border rounded mt-3">
        <div className="container">
          <div className="row align-items-center">
            {/* Left column - text content */}
            <div className="col-md-7">
              {/* Main heading */}
              <h1 className="display-5 font-weight-bold">
                Upgrade your desk this week
              </h1>
              {/* Subheading/description */}
              <p className="lead mb-3">
                Exclusive deals on headphones, laptops, keyboards and more.
                Build your own cart and checkout logic using React Context.
              </p>
              {/* Call-to-action buttons */}
              <button className="btn btn-primary btn-lg mr-2">
                <i className="fas fa-tags mr-1" />
                Shop today&apos;s deals
              </button>
              <button className="btn btn-outline-secondary btn-lg">
                Browse all categories
              </button>
            </div>
            {/* Right column - hero image (hidden on mobile) */}
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

      {/* First product section - "Deals inspired by your wishlist" */}
      <div className="mt-4">
        {/* Section heading */}
        <h4 className="mb-3">Deals inspired by your wishlist</h4>
        {/* Product grid - responsive columns */}
        <div className="row">
          {/* Map through first 4 featured products */}
          {featuredProducts.slice(0, 4).map((product) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={product.id}>
              {/* Render ProductCard component for each product */}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Second product section - "Best sellers in electronics" */}
      <div className="mt-4">
        {/* Section heading */}
        <h4 className="mb-3">Best sellers in electronics</h4>
        {/* Product grid - responsive columns */}
        <div className="row">
          {/* Map through next 4 featured products (items 4-7) */}
          {featuredProducts.slice(4, 8).map((product) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={product.id}>
              {/* Render ProductCard component for each product */}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Export Home component
export default Home;
