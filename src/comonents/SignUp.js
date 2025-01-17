import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    setError("");
    alert("Sign Up Successful!");

    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center ">Sign Up</h2>
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
          type="email"
          name="email"
          placeholder="Email"
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
        <motion.input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password-lg"
          className="w-full mb-4 p-2 border rounded-lg"
          whileHover={{ scale: 1.03 }}
          onChange={handleChange}
        />
        <motion.button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-lg"
          whileHover={{ y: -4 }}
        >
          Sign Up
        </motion.button>
        <p className="my-1 text-center">
          Are you member?
          <Link to="/login">
            <span className="ml-2 hover:underline font-bold hover:text-green-700">
              Login
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
