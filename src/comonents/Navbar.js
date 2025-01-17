import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo";
import { ShoppingBagIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
const Navbar = ({ user, onLogout, cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md px-4 md:px-6 py-4 z-10">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <motion.div className="logo" whileHover={{ scale: 1.05 }}>
          <Link to="/" className="text-xl font-bold">
            <img src={logo} alt="Logo" className="w-16 h-10 md:w-32 md:h-12" />
          </Link>
        </motion.div>

        {/* Hamburger Icon */}
        <motion.button
          whileHover={{ y: 4 }}
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/products"
            className="flex items-center text-lg font-medium "
          >
            <motion.p className="flex" whileHover={{ y: 4 }}>
              <ShoppingBagIcon className="w-5 h-5 mr-2" />
              Products
            </motion.p>
          </Link>

          <Link to="/cart" className="relative ">
            <motion.p whileHover={{ y: 5 }}>
              🛒
              <span className="absolute -top-2 left-4 text-xs font-bold text-white bg-green-700 rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </motion.p>
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span>
                Welcome,
                <strong className="ml-1">
                  {user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
                </strong>
              </span>
              <motion.button
                whileHover={{ y: 4 }}
                onClick={onLogout}
                className="px-4 py-2 bg-green-700 hover:bg-red-700 text-white rounded-lg"
              >
                Logout
              </motion.button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-700 text-white rounded-lg"
              >
                <motion.p whileHover={{ y: 4 }}>Login</motion.p>
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-green-700 text-white rounded-lg"
              >
                <motion.p whileHover={{ y: 4 }}>Sign Up</motion.p>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          <Link
            to="/products"
            className="text-lg font-medium hover:text-blue-500"
          >
            Products
          </Link>

          <Link to="/cart" className="relative flex items-center">
            🛒
            <span className="absolute -top-1 left-4 text-xs font-bold text-white bg-green-500 rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          {user ? (
            <>
              <span className="text-lg">Welcome, {user.username}</span>
              <button
                onClick={onLogout}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-700 text-white rounded"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-green-700 text-white rounded"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
