# Frontend E‑Commerce Starter – Beginner Tasks (Context API + Vite + React)

This starter gives you **beautiful UI only** – **no logic**.

Your job is to make the app fully functional **step by step**, using **React Context API** (and optionally `useReducer`).  
Do **NOT** add any other state‑management library (Redux, Zustand, etc.).

> **VERY IMPORTANT:**  
> All **state, props, Context, and reducer logic** must be written by **you**.

---

## 1. Run the project (basic setup)

1. **Open terminal in the `frontend` folder**
   - Example (from project root):
     - `cd frontend`

2. **Install all packages once**
   - Run:
     - `npm install`

3. **Start the development server**
   - Run:
     - `npm run dev`
   - Open the URL shown in the terminal (usually `http://localhost:5173`).

4. **Check what you see**
   - Navbar at the top.
   - Home page with hero banner and some product cards.
   - Static pages already designed for:
     - `Products`, `Cart`, `Add Product`, `Login`, `Register`, `ProductDetails`.

Right now, **nothing is dynamic**. Buttons don’t do anything and data is hardcoded.  
The next steps will make everything work.

---

## 2. Understand the important files

Before coding, open these files and just look at the JSX:

- `src/App.jsx` – main layout for pages.
- `src/main.jsx` – React entry point (where `<App />` is rendered).
- `src/context/ShopContext.jsx` – **empty skeleton** where you will create Context.
- `src/data/products.js` – sample **20 product objects** (with placeholder image URLs).
- `src/components/`:
  - `Navbar.jsx` – top navigation bar.
  - `productCard.jsx` – UI for one product.
  - `CartItem.jsx` – UI for one item inside the cart.
  - `AddProduct.jsx` – UI for “Add Product” form.
- `src/pages/`:
  - `Home.jsx`, `Products.jsx`, `ProductDetails.jsx`, `Cart.jsx`, `Login.jsx`, `Register.jsx`.

You don’t have to fully understand all CSS – focus on **JSX structure** and **where data should come from**.

---

## 3. Create Global Shop Context (MANDATORY)

All shared data (products, cart, logged‑in user, etc.) should come from **React Context**.

### 3.1. Design your global state

Open `src/context/ShopContext.jsx` and plan an `initialState` object like:

- **products**: array of product objects
  - Each product can have:
    - `id`, `title`, `price`, `originalPrice`, `discountPercentage`, `category`, `rating`,
      `ratingCount`, `inStock`, `stock`, `thumbnail`, `shortDescription`, `description`, `tags`.
- **cart**: array of cart items
  - Each item should have:
    - `id`, `title`, `price`, `thumbnail`, `quantity`
- **user**: `null` or an object like:
  - `{ name, email, token }`

You already have 20 ready‑made products in `src/data/products.js`.  
You can import them into Context later and put them into `state.products`.

### 3.2. Create Context and Provider (skeleton)

In `src/context/ShopContext.jsx` **(you must write this yourself)**:

1. **Import React tools**
   - `createContext`
   - `useState` or `useReducer` (your choice)

2. **Create the Context**
   - `export const ShopContext = createContext();`

3. **Create initial state**
   - Example structure (you can change field names as you like):

     ```jsx
     const initialState = {
       products: [],   // later fill from src/data/products.js
       cart: [],
       user: null,
     };
     ```

4. **Choose state management:**
   - Option 1 (simpler): use `useState` for `products`, `cart`, `user`.
   - Option 2 (recommended): use `useReducer` with a `shopReducer` function.

5. **Create `ShopProvider` component**
   - It should:
     - Hold all state.
     - Define **actions** (functions) to update the state, like:
       - `addToCart(product)`
       - `removeFromCart(id)`
       - `increaseQty(id)`
       - `decreaseQty(id)`
       - `clearCart()`
       - `addProduct(newProduct)`
       - `login(userData)`
       - `logout()`
     - Return:

       ```jsx
       <ShopContext.Provider value={/* state + actions here */}>
         {children}
       </ShopContext.Provider>
       ```

> Don’t worry about filling all actions at once.  
> You can start with **products only**, then add cart and auth actions later.

### 3.3. Load sample products into Context

1. Inside `ShopContext.jsx`, import the ready data:

   ```jsx
   import { products as sampleProducts } from '../data/products';
   ```

2. Use `sampleProducts` to set your `products` in `initialState` (or after state is created).

3. Remember:  
   - All `thumbnail` URLs in `products.js` are **placeholders**.
   - You should **replace them later** with your own image URLs for better practice.

---

## 4. Wrap the app with `ShopProvider`

1. Open `src/main.jsx`.
2. Import your provider:

   ```jsx
   import { ShopProvider } from './context/ShopContext';
   ```

3. Wrap `<App />` with it:

   ```jsx
   <React.StrictMode>
     <ShopProvider>
       <App />
     </ShopProvider>
   </React.StrictMode>
   ```

Now **any component** can read global data using:

```jsx
const { state, addToCart /* etc */ } = useContext(ShopContext);
```

You will actually call `useContext` later in components.

---

## 5. Add routing between pages (React Router)

You want URLs like `/`, `/products`, `/cart`, `/login`, etc.

### 5.1. Install React Router

In the `frontend` folder:

- Run:
  - `npm install react-router-dom`

### 5.2. Set up `BrowserRouter` and routes

1. **In `src/main.jsx`:**
   - Import `BrowserRouter`:

     ```jsx
     import { BrowserRouter } from 'react-router-dom';
     ```

   - Wrap `<App />` with `<BrowserRouter>` (inside `ShopProvider`):

     ```jsx
     <ShopProvider>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </ShopProvider>
     ```

2. **In `src/App.jsx`:**
   - Import:
     - `Routes`, `Route` from `react-router-dom`.
     - All your pages: `Home`, `Products`, `ProductDetails`, `AddProduct`, `Cart`, `Login`, `Register`.
   - Replace the hardcoded `<Home />` with:
     - `<Routes>` + `<Route>` for each path:
       - `/` → `Home`
       - `/products` → `Products`
       - `/products/:id` → `ProductDetails` (single product page)
       - `/add-product` → `AddProduct`
       - `/cart` → `Cart`
       - `/login` → `Login`
       - `/register` → `Register`

> Tip: Keep the existing `Navbar` and `footer` around your `<Routes>` so they show on all pages.

### 5.3. Make Navbar links work

1. Open `src/components/Navbar.jsx`.
2. Import `Link` (and maybe `NavLink`) from `react-router-dom`.
3. Replace all `<a href="#">` with `<Link>`:

   ```jsx
   <Link className="nav-link" to="/products">
     All Products
   </Link>
   ```

4. Do this for:
   - Home
   - All Products
   - Add Product
   - Cart
   - Login
   - Register

Now the app should navigate between pages **without reloading**.

---

## 6. Use product data on Home and Products pages

### 6.1. Get products from Context

On any page where you need products:

1. Import `useContext` and `ShopContext`.
2. Call `useContext(ShopContext)` to get `state.products`.

### 6.2. Home page – show first few products

File: `src/pages/Home.jsx`

1. Replace the 3 hardcoded `<ProductCard />` with:
   - A slice of products, for example:
     - `const featuredProducts = products.slice(0, 3);`
   - Map:
     - `featuredProducts.map(product => <ProductCard key={product.id} product={product} />)`

### 6.3. Products page – show all products

File: `src/pages/Products.jsx`

1. Remove the static repeated `<ProductCard />`.
2. Map over `products` from Context:

   ```jsx
   products.map(product => (
     <div className="col-sm-6 col-md-4 mb-4" key={product.id}>
       <ProductCard product={product} />
     </div>
   ))
   ```

---

## 7. Make `ProductCard` reusable + “Add to Cart” + “View details”

File: `src/components/productCard.jsx`

1. **Accept a `product` prop**:
   - Change the component signature to use `({ product })`.
2. Replace hardcoded values (`title`, `price`, `image`, etc.) with `product` fields:
   - `product.title`
   - `product.price`
   - `product.thumbnail`
   - etc.
3. **Add to cart button:**
   - Use `useContext(ShopContext)` to get `addToCart`.
   - On click:
     - `onClick={() => addToCart(product)}`
4. **View details button:**
   - Import `Link` from `react-router-dom`.
   - Replace the plain “View details” button with:

     ```jsx
     <Link className="btn btn-sm btn-pill btn-ghost" to={`/products/${product.id}`}>
       View details
     </Link>
     ```

Now each card knows its own data and can:
- Add itself to cart.
- Navigate to its **details page**.

---

## 8. Product details page – show one product

File: `src/pages/ProductDetails.jsx`

1. Import:
   - `useParams` from `react-router-dom`.
   - `useContext` + `ShopContext`.
2. Get the `id` from the URL:

   ```jsx
   const { id } = useParams();
   ```

3. Get `products` from Context and find the matching one:

   ```jsx
   const product = products.find(p => p.id === id);
   ```

4. Replace all static values (image src, title, price, description, etc.) with `product` fields.
5. Wire the “Add to Cart” button to `addToCart(product)` from Context.

> Handle the case where `product` is not found (optional: show “Product not found” message).

---

## 9. Cart logic (Add / Remove / + / − / totals)

Files:
- `src/components/CartItem.jsx`
- `src/pages/Cart.jsx`
- `src/context/ShopContext.jsx` (reducer/actions)

### 9.1. Cart item structure

Each cart item should include:
- `id`, `title`, `price`, `thumbnail`, `quantity`
- (Optional) `maxQuantity` from product `stock`.

### 9.2. Reducer actions (recommended)

Inside your `shopReducer` (if you use `useReducer`), implement:

- **`ADD_TO_CART`**
  - If item not in cart → add with `quantity: 1`.
  - If already in cart → increase `quantity` by 1 (up to stock).
- **`INCREASE_QTY`**
  - Increase `quantity` by 1 (up to stock).
- **`DECREASE_QTY`**
  - Decrease `quantity` by 1.
  - If `quantity` becomes 0 → remove from cart.
- **`REMOVE_FROM_CART`**
  - Remove item completely.
- **`CLEAR_CART`**
  - Empty the cart.

Then create functions like:
- `addToCart(product)`
- `increaseQty(id)`
- `decreaseQty(id)`
- `removeFromCart(id)`
- `clearCart()`

These functions will dispatch the correct action types.

### 9.3. Connect Cart page

File: `src/pages/Cart.jsx`

1. Use `useContext(ShopContext)` to get:
   - `cart`
   - `increaseQty`, `decreaseQty`, `removeFromCart`, `clearCart`
2. Replace the static `<CartItem />` components with:

   ```jsx
   cart.map(item => <CartItem key={item.id} item={item} />)
   ```

3. Use `cart.length` to show total items near the cart title/badge.

### 9.4. Connect `CartItem`

File: `src/components/CartItem.jsx`

1. Accept `item` prop.
2. Replace static name, price, quantity with `item` fields.
3. Wire buttons:
   - `-` button → `decreaseQty(item.id)`
   - `+` button → `increaseQty(item.id)`
   - Trash icon → `removeFromCart(item.id)`

### 9.5. Calculate totals

In `Cart.jsx`:

1. Compute:
   - `subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);`
   - `discount` – your own rule (e.g., 10% if subtotal > some amount).
   - `total = subtotal - discount`.
2. Replace static numbers in the “Order Summary” with these values.

---

## 10. Add Product flow

File: `src/components/AddProduct.jsx`

1. Turn the form inputs into **controlled components** using `useState` or `useReducer`.
2. On form submit:
   - Call `event.preventDefault()`.
   - Build a `newProduct` object with:
     - `id` (unique), `title`, `price`, `stock`, `category`, `thumbnail`, etc.
   - Call `addProduct(newProduct)` from Context.
   - Optionally:
     - Clear the form fields.
     - Redirect to `/products`.

> You can also push this new product into `products` in Context using your reducer.

---

## 11. Auth flow (Login / Register)

### 11.1. Add `user` to Context

In `ShopContext.jsx`:
- Make sure `initialState.user` exists (start with `null`).
- Add actions / functions:
  - `login(userData)`
  - `logout()`

`userData` can be a simple object like:

```js
{ name: 'Rohan', email: 'rohan@example.com' }
```

### 11.2. Register page

File: `src/pages/Register.jsx`

1. Make form fields **controlled** (use `useState` for each input or a single object).
2. On submit:
   - Validate:
     - Passwords match.
     - Required fields are not empty.
   - Create a `newUser` object.
   - Call `login(newUser)` from Context to simulate successful registration.
   - Redirect to `/` or `/products`.

### 11.3. Login page

File: `src/pages/Login.jsx`

1. Make email and password inputs **controlled**.
2. On submit:
   - (For now) check email/password against a simple hardcoded check **or** always succeed.
   - Call `login(user)` from Context.
   - Redirect to the previous page or `/`.

### 11.4. Navbar – show Login/Register OR Logout

File: `src/components/Navbar.jsx`

1. Use `useContext(ShopContext)` to read `user` and `logout()`.
2. If `user` is `null`:
   - Show Login + Register buttons.
3. If `user` is not `null`:
   - Show the user’s name and a Logout button.
4. On Logout:
   - Call `logout()`.
   - Optionally redirect to `/`.

### 11.5. Protect routes (optional but recommended)

You can protect some pages like `/add-product` and `/cart`:

- If `user` is not logged in:
  - Redirect to `/login`, or
  - Show a message “Please login to continue”.

You can do this using:
- Wrapper components (PrivateRoute), or
- Simple checks inside each page component.

---

## 12. Bonus ideas (for extra practice)

- Save `cart` and `user` to `localStorage` and load them on refresh.
- Add **search** + **category filters** on `Products` page.
- Show a nice **“Empty cart”** message when `cart.length === 0`.
- Add loading states (spinners / skeletons) when fetching data (if you connect a backend).
- Connect this frontend to your own **Node/Express + MongoDB** backend.

---

## 13. Final checklist

- [ ] Context and Provider created in `ShopContext.jsx`.
- [ ] Sample products from `src/data/products.js` correctly loaded into Context.
- [ ] App wrapped with `ShopProvider` (and `BrowserRouter`) in `main.jsx`.
- [ ] Routes set up for all pages (`/`, `/products`, `/products/:id`, `/add-product`, `/cart`, `/login`, `/register`).
- [ ] Navbar links work using `<Link>` and show the correct active page.
- [ ] Product list on Home and Products pages comes from `state.products`.
- [ ] ProductDetails page shows correct data based on URL `/products/:id`.
- [ ] Cart count in Navbar updates using real `cart` length.
- [ ] Add to cart works from product cards and details page.
- [ ] + / − / Remove / Clear cart all work.
- [ ] Cart totals (subtotal, discount, total) calculated from `cart`.
- [ ] Add Product form creates a new product and adds it to `products`.
- [ ] Login / Register update `user` in Context and switch Navbar between Login/Register and Logout.
- [ ] Protected routes redirect or block access when user is not logged in (if implemented).

Use this project as a **step‑by‑step playground to learn Context API, reducers and React routing**, while working on a realistic e‑commerce UI.﻿