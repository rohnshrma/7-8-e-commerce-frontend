// Import React library - required for all React components
import React from "react";
// Import ReactDOM - used to render React app into the HTML DOM
import ReactDOM from "react-dom/client";
// Import main App component
import App from "./App";
// Import global CSS styles
import "./styles.css";
// Import BrowserRouter (renamed as Router) - enables client-side routing
import { BrowserRouter as Router } from "react-router-dom";
// Import ShopProvider - provides global state to entire app
import { ShopProvider } from "./context/ShopContext";

// Create a React root and render the app
// document.getElementById("root") finds the <div id="root"> in index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode - helps identify potential problems in the app during development
  <React.StrictMode>
    {/* ShopProvider - wraps app to provide global state (cart, products, user) to all components */}
    <ShopProvider>
      {/* Router - enables navigation between pages without page reload */}
      <Router>
        {/* Main App component - contains all pages and routes */}
        <App />
      </Router>
    </ShopProvider>
  </React.StrictMode>,
);
