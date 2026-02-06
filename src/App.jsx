import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";

// NOTE FOR STUDENTS:
// - This file currently always renders <Home />.
// - Your tasks:
//   - Set up React Router (or your own routing) to switch between pages:
//     Home, Products, Add Product, Cart, Login, Register.
//   - Use Context API for global state (auth, products, cart, etc.).

const App = () => {
  return (
    <div className="app-shell">
      {/* TODO: Once Context is created, wrap <Navbar /> and page content
          with your Context Provider in src/main.jsx */}
      <Navbar />

      <main className="app-main">
        <div className="container">
          {/* TODO: Replace this with Routes based on current URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </div>
      </main>

      <footer className="py-4 text-center footer-muted">
        Built with <span className="text-danger">&hearts;</span> for MERN
        E‑Commerce practice.
        <br />
        <span className="text-secondary">
          Add all logic using React Context API, reducers, and your own
          components.
        </span>
      </footer>
    </div>
  );
};

export default App;
