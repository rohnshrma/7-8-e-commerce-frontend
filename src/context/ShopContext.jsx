// NOTE FOR STUDENTS:
// This file is intentionally left as a skeleton.
// Your assignment explicitly says:
//   "strictly logic like useState, props, contextapi, reducer to be handled by student only"
//
// You MUST:
//   - Create a React Context (ShopContext).
//   - Build a reducer for cart + products + auth (if you want).
//   - Use a <ShopProvider> that wraps the entire app in src/main.jsx.
//   - Expose actions like:
//       addToCart(product)
//       removeFromCart(productId)
//       increaseQty(productId)
//       decreaseQty(productId)
//       clearCart()
//       login(userData)
//       logout()
//       addProduct(newProduct)
//
// Only UI is provided in components; you wire these actions.

import { createContext, useReducer } from "react";

// Example structure (DO NOT UNCOMMENT, WRITE YOUR OWN IMPLEMENTATION):
//
// import React, { createContext, useReducer } from 'react';
//
// export const ShopContext = createContext();
//
// const initialState = { products: [], cart: [], user: null };
//
// function shopReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//     // ...
//     default:
//       return state;
//   }
// }
//
// export const ShopProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(shopReducer, initialState);
//
//   const value = { state, dispatch };
//   return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
// };

const ShopContext = createContext();

const cartInitialState = {
  cartItems: [],
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  return state;
};
export const ShopProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState);

  const addItemToCart = (product) => {
    dispatch({ type: "ADD", payload: product });
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const updateItemInCart = (info) => {
    dispatch({ type: "UPDATE", payload: info });
  };

  return (
    <ShopContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, updateItemInCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
