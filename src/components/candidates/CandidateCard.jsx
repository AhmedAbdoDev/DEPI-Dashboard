import { Linkedin, MessageSquare, Phone } from "lucide-react";

const CandidateCard = ({ candidate }) => {
  const handleImageError = (e) => {
    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      candidate.name
    )}&background=random`;
  };

  return (
    <div className="card mb-2 mb-md-3 candidate-card border-0 shadow-sm">
      <div className="card-body p-2 p-md-3">
        <div className="d-flex align-items-start mb-2">
          <img
            src={candidate.avatar}
            alt={candidate.name}
            className="avatar me-2 rounded-circle"
            onError={handleImageError}
          />
          <div className="flex-grow-1" style={{ minWidth: 0 }}>
            <h6 className="mb-1 fw-semibold text-truncate candidate-name">
              {candidate.name}
            </h6>
            <p className="mb-0 text-muted small text-truncate candidate-email">
              {candidate.email}
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mt-2 mt-md-3 pt-2 border-top">
          <button className="btn btn-link btn-sm text-secondary p-0 text-decoration-none d-flex align-items-center">
            <Linkedin size={14} />
            <span className="ms-1 small d-none d-lg-inline">LinkedIn</span>
          </button>
          <div className="d-flex gap-2 gap-md-3 text-secondary">
            <span className="small d-flex align-items-center gap-1">
              <MessageSquare size={14} />
              {candidate.comments}
            </span>
            <span className="small d-flex align-items-center gap-1">
              <Phone size={14} />
              {candidate.calls}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
