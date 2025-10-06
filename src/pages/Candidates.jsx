import React, { useState } from "react";
import { Search, Plus, ArrowLeft } from "lucide-react";
import Column from "../components/candidates/Column";
import { candidatesData, columnsConfig } from "../data/candidatesData";
import "../assets/candidates/index.css";

const Candidates = () => {
  const [activeTab, setActiveTab] = useState("candidates");

  return (
    <div className="candidate-board bg-light min-vh-100">
      <div className="container-fluid py-3 py-md-4 px-3 px-md-4">
        <div className="mb-3">
          <button className="btn btn-link text-decoration-none text-secondary p-0 mb-2 d-flex align-items-center">
            <ArrowLeft size={16} className="me-2" />
            <span className="d-none d-sm-inline">Back to Job List</span>
            <span className="d-inline d-sm-none">Back</span>
          </button>
          <h2 className="fw-bold mb-0 fs-3 fs-md-2">UI/UX Designer</h2>
        </div>

        <ul className="nav nav-tabs mb-3 mb-md-4 border-bottom">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              <span className="d-none d-sm-inline">📝 Job Description</span>
              <span className="d-inline d-sm-none">📝 Description</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "candidates" ? "active" : ""
              }`}
              onClick={() => setActiveTab("candidates")}
            >
              👥 Candidates
            </button>
          </li>
        </ul>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-md-4 gap-3">
          <h4 className="fw-bold mb-0 fs-5 fs-md-4">Candidates</h4>
          <div className="d-flex flex-column flex-sm-row gap-2 w-100 w-md-auto ms-auto">
            <div className="position-relative flex-grow-1 flex-sm-grow-0">
              <Search
                size={18}
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
              />
              <input
                type="text"
                className="form-control ps-5 search-input w-100"
                placeholder="Search name or email here..."
                style={{ minWidth: "250px" }}
              />
            </div>
            <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2 flex-shrink-0">
              <Plus size={18} />
              <span>Add Candidate</span>
            </button>
          </div>
        </div>

        <div className="row g-2 g-md-3">
          {columnsConfig.map((column) => (
            <Column
              key={column.key}
              column={column}
              candidates={candidatesData[column.key]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidates;
