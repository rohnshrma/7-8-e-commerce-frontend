// Import React hooks - useState for form state, useContext for global state
import React, { useContext, useState } from "react";
// Import navigation hooks and components from React Router
import { useNavigate, Link } from "react-router-dom";
// Import ShopContext to access login function
import { ShopContext } from "../context/ShopContext";

// Login page component - handles user authentication
const Login = () => {
  // Get login function from global context
  const { login } = useContext(ShopContext);
  // State for email input field
  const [email, setEmail] = useState("");
  // State for password input field
  const [password, setPassword] = useState("");
  // State for error messages
  const [error, setError] = useState("");
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    // Prevent default form submission (page reload)
    e.preventDefault();
    // Clear any previous error messages
    setError("");

    // Validate that both fields are filled
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Try to login
    try {
      // Send POST request to login endpoint
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Send email and password as JSON
        body: JSON.stringify({ email, password }),
      });

      // Check if request was successful
      if (!res.ok) {
        // Get response text for error handling
        const text = await res.text();
        // Log error to browser console for debugging
        console.error("Login failed:", res.status, text);

        // Default error message
        let message = "Login failed";
        try {
          // Try to parse JSON response to get specific error message
          const data = text ? JSON.parse(text) : {};
          if (data.message) {
            message = data.message;
          }
        } catch {
          // If JSON parsing fails, use default message
        }

        // Set error message to display to user
        setError(message);
        return;
      }

      // Get response text
      const text = await res.text();
      let data = {};
      try {
        // Parse JSON response
        data = text ? JSON.parse(text) : {};
      } catch {
        // If parsing fails, keep data as empty object
      }

      // Save user data and token to global context
      login({
        ...data.user, // User info (id, name, email, role)
        token: data.token, // JWT token for authentication
      });
      // Redirect to home page after successful login
      navigate("/");
    } catch (err) {
      // Handle any network or other errors
      setError(err.message);
    }
  };

  return (
    // Auth card container with glassmorphism effect
    <div className="auth-card glass-card p-4 p-md-5">
      {/* Header section */}
      <div className="text-center mb-4">
        {/* Badge */}
        <div className="mb-2">
          <span className="badge-soft badge-soft-success">Welcome back</span>
        </div>
        {/* Page title */}
        <h2 className="page-title mb-1">Login</h2>
        {/* Page subtitle */}
        <p className="page-subtitle mb-0">
          Connect this form with your Auth Context and protect private routes.
        </p>
      </div>

      {/* Login form */}
      <form onSubmit={handleSubmit}>
        {/* Email input group */}
        <div className="form-group">
          <label htmlFor="email" className="text-muted">
            Email address
          </label>
          <input
            type="email"
            className="form-control auth-input"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password input group */}
        <div className="form-group">
          <label
            htmlFor="password"
            className="text-muted d-flex justify-content-between"
          >
            <span>Password</span>
            {/* Forgot password button (placeholder) */}
            <button type="button" className="btn btn-link p-0 small">
              Forgot?
            </button>
          </label>
          <input
            type="password"
            className="form-control auth-input"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember me checkbox */}
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="remember" />
          <label
            className="form-check-label text-muted small"
            htmlFor="remember"
          >
            Keep me signed in on this device
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="btn btn-pill btn-primary btn-block mb-3"
        >
          <i className="fas fa-sign-in-alt mr-1" />
          Sign in
        </button>

        {/* Error message display */}
        {error && (
          <div className="alert alert-danger py-2 small" role="alert">
            {error}
          </div>
        )}

        {/* Link to registration page */}
        <p className="text-center text-muted small mb-0">
          New here?{" "}
          <Link to="/register" className="btn btn-link p-0">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

// Export Login component
export default Login;
