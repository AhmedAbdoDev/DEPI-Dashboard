import useGlassAnimation from "../../hooks/useGlassAnimation";

export default function AuthLayout({ children }) {
  useGlassAnimation();

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-5">
      <section className="container-xl">
        <div className="row g-4 align-items-center justify-content-center">
          <div className="col-12 col-md-6">{children}</div>
        </div>
      </section>
    </main>
  );
}
