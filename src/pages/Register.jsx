// Import React hooks - useState for form state, useContext for global state
import React, { useContext, useState } from "react";
// Import navigation hooks and components from React Router
import { useNavigate, Link } from "react-router-dom";
// Import ShopContext to access login function
import { ShopContext } from "../context/ShopContext";

// Register page component - handles new user registration
const Register = () => {
  // Get login function from global context (used after successful registration)
  const { login } = useContext(ShopContext);
  // State for first name input
  const [firstName, setFirstName] = useState("");
  // State for last name input
  const [lastName, setLastName] = useState("");
  // State for email input
  const [email, setEmail] = useState("");
  // State for password input
  const [password, setPassword] = useState("");
  // State for confirm password input
  const [confirmPassword, setConfirmPassword] = useState("");
  // State for terms & conditions checkbox
  const [acceptTerms, setAcceptTerms] = useState(false);
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

    // Validate required fields
    if (!firstName || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check if terms are accepted
    if (!acceptTerms) {
      setError("You must accept the Terms & Conditions.");
      return;
    }

    // Try to register
    try {
      // Send POST request to register endpoint
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Send user data as JSON
        // Combine first and last name into full name
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          password,
        }),
      });

      // Check if request was successful
      if (!res.ok) {
        // Get response text for error handling
        const text = await res.text();
        // Log error to browser console for debugging
        console.error("Registration failed:", res.status, text);

        // Default error message
        let message = "Registration failed";
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

      // Save user data and token to global context (auto-login after registration)
      login({
        ...data.user, // User info (id, name, email, role)
        token: data.token, // JWT token for authentication
      });
      // Redirect to home page after successful registration
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
          <span className="badge-soft badge-soft-primary badge-soft">
            Create account
          </span>
        </div>
        {/* Page title */}
        <h2 className="page-title mb-1">Join ShopSmart</h2>
        {/* Page subtitle */}
        <p className="page-subtitle mb-0">
          Use this page to practice controlled inputs, validation and
          Context-driven auth.
        </p>
      </div>

      {/* Registration form */}
      <form onSubmit={handleSubmit}>
        {/* Name fields row */}
        <div className="form-row">
          {/* First name input */}
          <div className="form-group col-md-6">
            <label htmlFor="firstName" className="text-muted">
              First name
            </label>
            <input
              type="text"
              className="form-control auth-input"
              id="firstName"
              placeholder="Rohan"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* Last name input */}
          <div className="form-group col-md-6">
            <label htmlFor="lastName" className="text-muted">
              Last name
            </label>
            <input
              type="text"
              className="form-control auth-input"
              id="lastName"
              placeholder="Sharma"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* Email input */}
        <div className="form-group">
          <label htmlFor="regEmail" className="text-muted">
            Email address
          </label>
          <input
            type="email"
            className="form-control auth-input"
            id="regEmail"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password fields row */}
        <div className="form-row">
          {/* Password input */}
          <div className="form-group col-md-6">
            <label htmlFor="regPassword" className="text-muted">
              Password
            </label>
            <input
              type="password"
              className="form-control auth-input"
              id="regPassword"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Confirm password input */}
          <div className="form-group col-md-6">
            <label htmlFor="confirmPassword" className="text-muted">
              Confirm password
            </label>
            <input
              type="password"
              className="form-control auth-input"
              id="confirmPassword"
              placeholder="Repeat password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Terms & conditions checkbox */}
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label className="form-check-label text-muted small" htmlFor="terms">
            I agree to the{" "}
            <button type="button" className="btn btn-link p-0">
              Terms &amp; Conditions
            </button>
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="btn btn-pill btn-primary btn-block mb-3"
        >
          <i className="fas fa-user-plus mr-1" />
          Create account
        </button>

        {/* Error message display */}
        {error && (
          <div className="alert alert-danger py-2 small" role="alert">
            {error}
          </div>
        )}

        {/* Link to login page */}
        <p className="text-center text-muted small mb-0">
          Already have an account?{" "}
          <Link to="/login" className="btn btn-link p-0">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

// Export Register component
export default Register;
