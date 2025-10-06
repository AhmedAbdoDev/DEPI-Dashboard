export default function SocialButtons() {
  return (
    <div className="mt-4">
      <p className="text-center text-muted small mb-3">Or continue with</p>
      <div className="d-grid gap-3">
        <a href="#" className="btn btn-outline-secondary btn-social">
          <i className="fab fa-google text-danger"></i> Google
        </a>
        <a href="#" className="btn btn-outline-secondary btn-social">
          <i className="fab fa-facebook text-primary"></i> Facebook
        </a>
      </div>
    </div>
  );
}
