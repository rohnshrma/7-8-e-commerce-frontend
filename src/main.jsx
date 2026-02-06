import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider>
      <Router>
        <App />
      </Router>
    </ShopProvider>
    {/* TODO: Wrap App with your Context Provider once you create it */}
  </React.StrictMode>
);
