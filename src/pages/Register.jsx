import { useState, useEffect } from "react";
import "../assets/css/auth/auth.css";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import GlassCard from "../components/auth/GlassCard";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "eg",
    role: "",
    terms: false,
  });
  const [pwVisible, setPwVisible] = useState(false);
  const [pwStrength, setPwStrength] = useState("Weak");
  const [errors, setErrors] = useState({});
  const [btnState, setBtnState] = useState({
    disabled: false,
    text: "Register Now",
  });

  const estimateStrength = (s) => {
    let score = 0;
    if (s.length >= 8) score++;
    if (/[A-Z]/.test(s)) score++;
    if (/[0-9]/.test(s)) score++;
    if (/[^A-Za-z0-9]/.test(s)) score++;
    const labels = ["Weak", "Medium", "Strong", "Very Strong"];
    return (
      labels[Math.max(0, Math.min(labels.length - 1, score - 1))] || "Weak"
    );
  };

  const handleChange = (e) => {
    const { id, value, name, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id || name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Name is required";
      valid = false;
    }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }
    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm your password";
      valid = false;
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    if (!form.role) {
      newErrors.role = "Please select your role";
      valid = false;
    }
    if (!form.terms) {
      alert("You must agree to the terms");
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setBtnState({ disabled: true, text: "Creating..." });
      setTimeout(() => {
        setBtnState({ disabled: true, text: "Registered ✓" });
      }, 900);
    }
  };

  const togglePassword = () => setPwVisible((prev) => !prev);

  useEffect(() => {
    setPwStrength(estimateStrength(form.password));
  }, [form.password]);

  return (
    <AuthLayout>
      <GlassCard title="Create New Account" description="Quick & Easy · 1 min">
        <form onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <label htmlFor="fullName" className="form-label mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your name"
                className={`form-control rounded-3 p-3 ${
                  errors.fullName ? "is-invalid" : ""
                }`}
                value={form.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-danger small mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="col-12 col-sm-6">
              <label htmlFor="phone" className="form-label mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. 01012345678"
                className="form-control rounded-3 p-3"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="email" className="form-label mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={`form-control rounded-3 p-3 ${
                errors.email ? "is-invalid" : ""
              }`}
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-danger small mt-1">{errors.email}</p>
            )}
          </div>

          <div className="row g-3 mt-3">
            <div className="col-12 col-sm-6">
              <label htmlFor="password" className="form-label mb-1">
                Password
              </label>
              <div className="input-group">
                <input
                  id="password"
                  type={pwVisible ? "text" : "password"}
                  placeholder="Enter a strong password"
                  className={`form-control rounded-start-3 p-3 border-end-0 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  value={form.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-end-3"
                  onClick={togglePassword}
                >
                  {pwVisible ? "Hide" : "Show"}
                </button>
              </div>
              <div className="mt-2 small text-muted">
                Password strength:{" "}
                <span className="fw-semibold">{pwStrength}</span>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <label htmlFor="confirmPassword" className="form-label mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={pwVisible ? "text" : "password"}
                placeholder="Re-enter password"
                className={`form-control rounded-3 p-3 ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                value={form.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="text-danger small mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="country" className="form-label mb-1">
              Country
            </label>
            <select
              id="country"
              className="form-select rounded-3 p-3"
              value={form.country}
              onChange={handleChange}
            >
              <option value="eg">Egypt</option>
              <option value="sa">Saudi Arabia</option>
              <option value="ae">UAE</option>
              <option value="jo">Jordan</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-3">
            <label className="form-label mb-2 d-block">Register as</label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  className="form-check-input text-warning"
                  type="radio"
                  name="role"
                  id="roleTourist"
                  value="tourist"
                  checked={form.role === "tourist"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="roleTourist">
                  Tourist
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input text-warning"
                  type="radio"
                  name="role"
                  id="roleGuide"
                  value="guide"
                  checked={form.role === "guide"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="roleGuide">
                  Guide
                </label>
              </div>
            </div>
            {errors.role && (
              <p className="text-danger small mt-1">{errors.role}</p>
            )}
          </div>

          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            <label
              className="form-check-label small text-secondary"
              htmlFor="terms"
            >
              I agree to the{" "}
              <a href="#" className="text-warning text-decoration-underline">
                Terms of Service
              </a>{" "}
              and Privacy Policy
            </label>
          </div>

          <div className="mt-3">
            <button
              className={`btn w-100 rounded-4 py-3 fw-bold text-white ${
                btnState.text.includes("✓") ? "btn-success" : "btn-warning"
              } custom-btn-hover`}
              disabled={btnState.disabled}
            >
              {btnState.text}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center small text-secondary">
          Already have an account?{" "}
          <Link to="/login" className="text-warning fw-semibold">
            Login
          </Link>
        </p>
      </GlassCard>
    </AuthLayout>
  );
}
