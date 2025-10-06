import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import GlassCard from "../components/auth/GlassCard";
import SocialButtons from "../components/auth/SocialButtons";

export default function Login() {
  return (
    <AuthLayout>
      <GlassCard title="Welcome Back">
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control rounded-3 p-3"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control rounded-3 p-3"
              placeholder="Password"
            />
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 small">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label htmlFor="remember" className="form-check-label">
                Remember me
              </label>
            </div>
            <a href="#" className="text-warning text-decoration-none">
              Forgot Password?
            </a>
          </div>
          <button className="btn btn-warning w-100 rounded-4 py-3 fw-bold text-white">
            Log In
          </button>
        </form>

        <p className="mt-3 text-center small text-secondary">
          Don’t have an account?{" "}
          <Link to="/register" className="text-warning fw-semibold">
            Register
          </Link>
        </p>

        <SocialButtons />
      </GlassCard>
    </AuthLayout>
  );
}
