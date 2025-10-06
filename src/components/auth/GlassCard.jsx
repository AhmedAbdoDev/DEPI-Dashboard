export default function GlassCard({ title, description, children }) {
  return (
    <div className="glass bg-white rounded-4 p-4 p-md-5 shadow-lg border mx-auto">
      {title && description ? (
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="h4 fw-bold text-dark">{title}</h2>
          <div className="text-sm text-muted">{description}</div>
        </div>
      ) : (
        title && (
          <div className="text-center mb-4">
            <h2 className="h4 fw-bold text-dark">{title}</h2>
          </div>
        )
      )}
      {children}
    </div>
  );
}
