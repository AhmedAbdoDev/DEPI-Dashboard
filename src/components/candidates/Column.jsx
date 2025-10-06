import React from "react";
import CandidateCard from "./CandidateCard";

const Column = ({ column, candidates }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-2">
      <div className="column-wrapper">
        <div
          className={`column-header ${column.bgColor} mb-2 mb-md-3 d-flex align-items-center justify-content-between p-2 rounded`}
        >
          <span className="fw-semibold text-uppercase small text-dark">
            {column.title}
          </span>
          <span
            className={`badge rounded-pill ${
              column.badgeColor === "purple"
                ? "bg-purple"
                : "bg-" + column.badgeColor
            }`}
          >
            {candidates.length}
          </span>
        </div>

        <div className="candidates-column">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;
