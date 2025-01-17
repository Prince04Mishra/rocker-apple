import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      !savedUser ||
      savedUser.username !== formData.username ||
      savedUser.password !== formData.password
    ) {
      setError("Invalid username or password.");
      return;
    }

    // Successful login
    setError("");
    setUser(savedUser);
    localStorage.setItem("user", JSON.stringify(savedUser)); // Persist session
    alert("Login Successful!");
    navigate("/products");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <motion.input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded-lg"
          whileHover={{ scale: 1.03 }}
          onChange={handleChange}
        />
        <motion.input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded-lg"
          whileHover={{ scale: 1.03 }}
          onChange={handleChange}
        />
        <motion.button
          whileHover={{ y: -4 }}
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-lg"
        >
          Login
        </motion.button>
        <p className="my-1 text-center">
          Are you New?
          <Link to="/signup">
            <span className="ml-2 hover:underline font-bold hover:text-green-700">
              Register
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
