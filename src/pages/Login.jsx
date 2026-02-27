import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!form.email || !form.password) {
        throw new Error("Email and Password are required");
      }

      if (!form.email.includes("@")) {
        throw new Error("Invalid email format");
      }

      // Simulated login success
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-wrapper login-bg">
      <form className="auth-card login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

        {error && <p className="error-text">{error}</p>}

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

        <button type="submit">Login</button>

        <p>
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </div>
  );
}