function NotesTable() {
  const notes = [
    {
      id: 1,
      title: "Landing Page For Website",
      body: "To get started on a landing page, could you provide a bit more detail about its purpose?",
    },
    {
      id: 2,
      title: "Fixing icons with dark backgrounds",
      body: "Use icons that are easily recognizable and straightforward. Avoid overly complex designs that might confuse.",
    },
    {
      id: 3,
      title: "Discussion - regarding userflow improvement",
      body: "What's the main goal of the landing page? (e.g., lead generation, product trial)",
    },
  ];
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title mb-3">Notes</h5>
        {notes.map((n) => (
          <div
            key={n.id}
            className={`p-3 rounded mb-2  bg-light border-start border-3 border-primary `}
          >
            <div className="form-check">
              <input
                className="form-check-input me-2"
                type="radio"
                name="noteSelect"
              />
              <label className="form-check-label w-100">
                <div className="fw-semibold">{n.title}</div>
                <div className="text-muted small">{n.body}</div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NotesTable;
