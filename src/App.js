import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./comonents/Navbar";
import LandingPage from "./comonents/LandingPage";
import SignUp from "./comonents/SignUp";
import Login from "./comonents/Login";
import ProductPage from "./comonents/ProductPage";
import CartPage from "./comonents/CartPage";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))); // Persist user session
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    alert("Logged out successfully!");
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <Router>
      <Navbar
        user={user}
        onLogout={handleLogout}
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} // Count cart items in navbar
      />
      <Routes>
        <Route path="/" element={<LandingPage addToCart={addToCart} />} />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />}
        />
        <Route
          path="/products"
          element={
            user ? <ProductPage user={user} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cartItems} // Ensure cartItems are passed correctly
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
