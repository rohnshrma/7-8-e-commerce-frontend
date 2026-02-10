// Import React and necessary hooks
import { useContext } from "react";
// Import Navigate component for redirecting users
import { Navigate } from "react-router-dom";
// Import ShopContext to access user data
import { ShopContext } from "../context/ShopContext";

// ProtectedRoute component - wraps routes that require authentication
// Props:
//   - children: The component to render if user is authorized
//   - adminOnly: If true, only admin users can access (default: false)
const ProtectedRoute = ({ children, adminOnly = false }) => {
  // Get user from global context
  const { user } = useContext(ShopContext);

  // Check if user is not logged in
  if (!user) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  // If route is admin-only, check if user has admin role
  if (adminOnly && user.role !== "admin") {
    // Redirect to home page if user is not an admin
    return <Navigate to="/" replace />;
  }

  // User is authorized - render the protected component
  return children;
};

// Export ProtectedRoute component
export default ProtectedRoute;
