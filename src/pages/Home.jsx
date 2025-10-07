import { Link } from "react-router-dom";
import heroImg from "../assets/images/Hero-img.jpg";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
      <div data-aos="fade-up" className="container">
        <h1 className="display-4 fw-bold mb-3">
          <Typewriter
            words={["Welcome to Our Dashboard"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={50}
          />
        </h1>
        <p className="lead mb-4 mx-auto w-100 w-md-75">
          Welcome to your personal dashboard — a clean, modern space built to
          help you stay organized and in control. Log in to continue where you
          left off, create a new account to get started, or jump straight to
          your dashboard to explore everything in one place.
        </p>
        <p className="lead mb-4 w-md-50 mx-auto"></p>

        <div className="d-flex gap-3 justify-content-center flex-wrap mb-3">
          <Link
            className="btn btn-primary text-light px-4 py-2 fs-5 fw-semibold"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="btn btn-primary text-light px-4 py-2 fs-5 fw-semibold"
            to="/register"
          >
            Register
          </Link>
        </div>
        <Link
          className="btn btn-danger text-light px-4 py-2 fs-5 fw-semibold"
          to="/dashboard/"
        >
          Enter Dashboard
        </Link>
      </div>
    </section>
  );
}
export default Hero;
