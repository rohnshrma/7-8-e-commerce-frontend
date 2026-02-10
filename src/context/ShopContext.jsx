// Import React hooks and functions needed for Context API and state management
import { createContext, useEffect, useReducer } from "react";
// Import sample products data
import { products as sampleProducts } from "../data/products";

// Create a Context - this allows us to share state across all components without prop drilling
export const ShopContext = createContext();

// Define the initial state of our application
const initialState = {
  products: [], // Array to store all products
  cart: [], // Array to store items in shopping cart
  user: null, // Object to store logged-in user info (null if not logged in)
};

// Reducer function - handles all state updates based on action types
// This is like a central command center for state changes
function shopReducer(state, action) {
  // Switch statement checks the action type and updates state accordingly
  switch (action.type) {
    // SET_PRODUCTS - replace all products with new array
    case "SET_PRODUCTS": {
      // Return new state with updated products array
      return { ...state, products: action.payload || [] };
    }

    // ADD_TO_CART - add a product to cart or increase quantity if already in cart
    case "ADD_TO_CART": {
      // Get the product from action payload
      const product = action.payload;
      // Check if product already exists in cart
      const existing = state.cart.find((item) => item.id === product.id);

      // If product already in cart, increase its quantity
      if (existing) {
        // Map through cart items and update the matching product
        const updatedCart = state.cart.map((item) => {
          // If not the product we're looking for, return unchanged
          if (item.id !== product.id) return item;
          // Get maximum quantity allowed (from stock or Infinity if unlimited)
          const maxQty = product.stock ?? item.stock ?? Infinity;
          // Calculate next quantity (current + 1, but not more than max)
          const nextQty = Math.min(item.quantity + 1, maxQty);
          // Return updated item with new quantity
          return { ...item, quantity: nextQty };
        });

        // Return new state with updated cart
        return { ...state, cart: updatedCart };
      }

      // If product not in cart, create new cart item
      const newItem = {
        id: product.id, // Product ID
        title: product.title, // Product name
        price: product.price, // Product price
        thumbnail: product.thumbnail, // Product image
        stock: product.stock ?? Infinity, // Available stock
        quantity: 1, // Start with quantity of 1
      };

      // Return new state with new item added to cart
      return { ...state, cart: [...state.cart, newItem] };
    }

    // INCREASE_QTY - increase quantity of a specific cart item
    case "INCREASE_QTY": {
      // Get product ID from action payload
      const productId = action.payload;
      // Map through cart and update the matching item
      const updatedCart = state.cart.map((item) => {
        // If not the item we're looking for, return unchanged
        if (item.id !== productId) return item;
        // Get maximum quantity allowed
        const maxQty = item.stock ?? Infinity;
        // Calculate next quantity (current + 1, but not more than max)
        const nextQty = Math.min(item.quantity + 1, maxQty);
        // Return updated item with new quantity
        return { ...item, quantity: nextQty };
      });
      // Return new state with updated cart
      return { ...state, cart: updatedCart };
    }

    // DECREASE_QTY - decrease quantity of a specific cart item
    case "DECREASE_QTY": {
      // Get product ID from action payload
      const productId = action.payload;
      // Map through cart and decrease quantity
      const updatedCart = state.cart
        .map((item) => {
          // If not the item we're looking for, return unchanged
          if (item.id !== productId) return item;
          // Calculate next quantity (current - 1)
          const nextQty = item.quantity - 1;
          // Return updated item with new quantity
          return { ...item, quantity: nextQty };
        })
        // Filter out items with quantity 0 or less (removes from cart)
        .filter((item) => item.quantity > 0);
      // Return new state with updated cart
      return { ...state, cart: updatedCart };
    }

    // REMOVE_FROM_CART - completely remove an item from cart
    case "REMOVE_FROM_CART": {
      // Get product ID from action payload
      const productId = action.payload;
      // Filter out the item with matching ID
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      // Return new state with updated cart
      return { ...state, cart: updatedCart };
    }

    // CLEAR_CART - remove all items from cart
    case "CLEAR_CART": {
      // Return new state with empty cart array
      return { ...state, cart: [] };
    }

    // ADD_PRODUCT - add a new product to products array (admin feature)
    case "ADD_PRODUCT": {
      // Get new product from action payload
      const newProduct = action.payload;
      // Return new state with new product added at beginning of array
      return { ...state, products: [newProduct, ...state.products] };
    }

    // LOGIN - set user data when user logs in
    case "LOGIN": {
      // Get user data from action payload
      const user = action.payload;
      // Return new state with user data
      return { ...state, user };
    }

    // LOGOUT - clear user data and cart when user logs out
    case "LOGOUT": {
      // Return new state with user set to null and empty cart
      return { ...state, user: null, cart: [] };
    }

    // Default case - return current state unchanged if action type not recognized
    default:
      return state;
  }
}

// ShopProvider component - wraps the app and provides global state to all children
export const ShopProvider = ({ children }) => {
  // useReducer hook - manages state using the reducer function
  // Third parameter is initializer function that loads data from localStorage
  const [state, dispatch] = useReducer(shopReducer, initialState, (init) => {
    // Check if running in browser (not server-side rendering)
    if (typeof window === "undefined") return init;

    // Try to load saved cart and user from localStorage
    try {
      // Get cart from localStorage
      const storedCart = window.localStorage.getItem("cart");
      // Get user from localStorage
      const storedUser = window.localStorage.getItem("user");
      // Return initial state with loaded data
      return {
        ...init,
        // Parse cart from JSON string, or use empty array if not found
        cart: storedCart ? JSON.parse(storedCart) : [],
        // Parse user from JSON string, or use null if not found
        user: storedUser ? JSON.parse(storedUser) : null,
      };
    } catch {
      // If error occurs (e.g., invalid JSON), return initial state
      return init;
    }
  });

  // useEffect - runs once when component mounts
  useEffect(() => {
    // Load sample products into state
    // In a real app, you would fetch products from backend API here
    dispatch({ type: "SET_PRODUCTS", payload: sampleProducts });
  }, []); // Empty dependency array means this runs only once

  // useEffect - runs whenever cart changes
  useEffect(() => {
    // Try to save cart to localStorage
    try {
      // Convert cart array to JSON string and save to localStorage
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    } catch {
      // Ignore errors (e.g., localStorage full or disabled)
    }
  }, [state.cart]); // Runs whenever state.cart changes

  // useEffect - runs whenever user changes
  useEffect(() => {
    // Try to save user to localStorage
    try {
      // Convert user object to JSON string and save to localStorage
      window.localStorage.setItem("user", JSON.stringify(state.user));
    } catch {
      // Ignore errors (e.g., localStorage full or disabled)
    }
  }, [state.user]); // Runs whenever state.user changes

  // Action functions - these are helper functions that dispatch actions
  // Add product to cart
  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });
  // Increase quantity of cart item
  const increaseQty = (id) => dispatch({ type: "INCREASE_QTY", payload: id });
  // Decrease quantity of cart item
  const decreaseQty = (id) => dispatch({ type: "DECREASE_QTY", payload: id });
  // Remove item from cart
  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  // Clear entire cart
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Add new product (admin feature)
  const addProduct = (newProduct) =>
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });

  // Login user
  const login = (userData) => dispatch({ type: "LOGIN", payload: userData });
  // Logout user
  const logout = () => dispatch({ type: "LOGOUT" });

  // Computed values - calculate cart statistics
  // Total number of items in cart (sum of all quantities)
  const cartItemCount = state.cart.reduce(
    (sum, item) => sum + item.quantity,
    0, // Start with 0
  );
  // Subtotal - sum of (price × quantity) for all items
  const cartSubtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0, // Start with 0
  );
  // Discount amount (currently 0, can be implemented later)
  const cartDiscount = 0;
  // Total amount to pay (subtotal - discount)
  const cartTotal = cartSubtotal;

  // Value object - contains all state and functions to be shared with components
  const value = {
    state, // Raw state object
    products: state.products, // Products array
    cart: state.cart, // Cart array
    user: state.user, // User object
    addToCart, // Function to add to cart
    increaseQty, // Function to increase quantity
    decreaseQty, // Function to decrease quantity
    removeFromCart, // Function to remove from cart
    clearCart, // Function to clear cart
    addProduct, // Function to add product
    login, // Function to login
    logout, // Function to logout
    cartItemCount, // Total items in cart
    cartSubtotal, // Cart subtotal
    cartDiscount, // Cart discount
    cartTotal, // Cart total
  };

  // Return Provider component with value prop
  // All children components can access this value using useContext(ShopContext)
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Export ShopContext as default export
export default ShopContext;
