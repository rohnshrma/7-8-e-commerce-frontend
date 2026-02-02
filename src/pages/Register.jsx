import React from 'react';

// Register page:
// - Styled registration form only.
// - Students must:
//   - Create user in backend (or in-memory for now).
//   - Save user + token in Context, then redirect.

const Register = () => {
  return (
    <div className="auth-card glass-card p-4 p-md-5">
      <div className="text-center mb-4">
        <div className="mb-2">
          <span className="badge-soft badge-soft-primary badge-soft">Create account</span>
        </div>
        <h2 className="page-title mb-1">Join ShopSmart</h2>
        <p className="page-subtitle mb-0">
          Use this page to practice controlled inputs, validation and Context-driven auth.
        </p>
      </div>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName" className="text-muted">
              First name
            </label>
            <input
              type="text"
              className="form-control auth-input"
              id="firstName"
              placeholder="Rohan"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName" className="text-muted">
              Last name
            </label>
            <input
              type="text"
              className="form-control auth-input"
              id="lastName"
              placeholder="Sharma"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="regEmail" className="text-muted">
            Email address
          </label>
          <input
            type="email"
            className="form-control auth-input"
            id="regEmail"
            placeholder="you@example.com"
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="regPassword" className="text-muted">
              Password
            </label>
            <input
              type="password"
              className="form-control auth-input"
              id="regPassword"
              placeholder="Create a strong password"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="confirmPassword" className="text-muted">
              Confirm password
            </label>
            <input
              type="password"
              className="form-control auth-input"
              id="confirmPassword"
              placeholder="Repeat password"
            />
          </div>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
          />
          <label className="form-check-label text-muted small" htmlFor="terms">
            I agree to the{' '}
            <button type="button" className="btn btn-link p-0">
              Terms &amp; Conditions
            </button>
          </label>
        </div>

        {/* TODO: Validate, call register() from Context, redirect on success */}
        <button type="submit" className="btn btn-pill btn-primary btn-block mb-3">
          <i className="fas fa-user-plus mr-1" />
          Create account
        </button>

        <p className="text-center text-muted small mb-0">
          Already have an account?{' '}
          <button type="button" className="btn btn-link p-0">
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;

