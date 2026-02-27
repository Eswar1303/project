import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!form.name || !form.email || !form.password || !form.confirmPassword) {
        throw new Error("All fields are required");
      }

      if (form.password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      if (form.password !== form.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // Simulated successful signup
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-wrapper signup-bg">
      <form className="auth-card signup-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <p className="error-text">{error}</p>}

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>

        <p>
          Already registered? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}