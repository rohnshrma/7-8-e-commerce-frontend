// Import React library - required for all React components
import React from "react";
// Import Navbar component - displays navigation menu at top of page
import Navbar from "./components/Navbar";
// Import routing components from React Router - used to navigate between pages
import { Routes, Route } from "react-router-dom";
// Import ProtectedRoute component - used to protect routes that require authentication
import ProtectedRoute from "./components/ProtectedRoute";
// Import all page components
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import OrderSuccess from "./pages/OrderSuccess";
import AdminOrders from "./pages/AdminOrders";

// Main App component - this is the root component of the application
const App = () => {
  return (
    // Main container div with class for styling
    <div className="app-shell">
      {/* Navbar component - shown on all pages */}
      <Navbar />

      {/* Main content area - contains the page content */}
      <main className="app-main">
        {/* Container div for centering and padding content */}
        <div className="container">
          {/* Routes component - defines all the routes/pages in the app */}
          <Routes>
            {/* Route for home page - shown at / path */}
            <Route path="/" element={<Home />} />
            {/* Route for login page - shown at /login path */}
            <Route path="/login" element={<Login />} />
            {/* Route for cart page - shown at /cart path */}
            <Route path="/cart" element={<Cart />} />
            {/* Route for products listing page - shown at /products path */}
            <Route path="/products" element={<Products />} />
            {/* Route for individual product details - :id is a dynamic parameter */}
            <Route path="/products/:id" element={<ProductDetails />} />
            {/* Route for registration page - shown at /register path */}
            <Route path="/register" element={<Register />} />
            {/* Route for add product page (ADMIN ONLY) - protected route */}
            {/* ProtectedRoute with adminOnly=true ensures only logged-in admins can access */}
            <Route
              path="/add-product"
              element={
                <ProtectedRoute adminOnly={true}>
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            {/* Route for user orders page - requires login */}
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            {/* Route for order success page - requires login */}
            <Route
              path="/order-success"
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              }
            />
            {/* Route for admin orders management page (ADMIN ONLY) - protected route */}
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminOrders />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </main>

      {/* Footer section - shown on all pages */}
      <footer className="py-4 text-center footer-muted">
        {/* Footer text with heart emoji */}
        Built with <span className="text-danger">&hearts;</span> for MERN
        E‑Commerce practice.
        <br />
        {/* Additional footer text */}
        <span className="text-secondary">
          Add all logic using React Context API, reducers, and your own
          components.
        </span>
      </footer>
    </div>
  );
};

// Export App component so it can be imported in main.jsx
export default App;
