import React from 'react';

// Login page:
// - Styled form only.
// - Students must:
//   - Handle form submission, validate credentials.
//   - Update auth state in Context and redirect to previous page / home.

const Login = () => {
  return (
    <div className="auth-card glass-card p-4 p-md-5">
      <div className="text-center mb-4">
        <div className="mb-2">
          <span className="badge-soft badge-soft-success">Welcome back</span>
        </div>
        <h2 className="page-title mb-1">Login</h2>
        <p className="page-subtitle mb-0">
          Connect this form with your Auth Context and protect private routes.
        </p>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="email" className="text-muted">
            Email address
          </label>
          <input
            type="email"
            className="form-control auth-input"
            id="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="text-muted d-flex justify-content-between">
            <span>Password</span>
            <button type="button" className="btn btn-link p-0 small">
              Forgot?
            </button>
          </label>
          <input
            type="password"
            className="form-control auth-input"
            id="password"
            placeholder="••••••••"
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="remember"
          />
          <label className="form-check-label text-muted small" htmlFor="remember">
            Keep me signed in on this device
          </label>
        </div>

        {/* TODO: Prevent default, call login() from Context, navigate on success */}
        <button type="submit" className="btn btn-pill btn-primary btn-block mb-3">
          <i className="fas fa-sign-in-alt mr-1" />
          Sign in
        </button>

        <p className="text-center text-muted small mb-0">
          New here?{' '}
          <button type="button" className="btn btn-link p-0">
            Create an account
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;

