import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

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
          <Home />
        </div>
      </main>

      <footer className="py-4 text-center footer-muted">
        Built with <span className="text-danger">&hearts;</span> for MERN E‑Commerce practice.
        <br />
        <span className="text-secondary">
          Add all logic using React Context API, reducers, and your own components.
        </span>
      </footer>
    </div>
  );
};

export default App;

