import { FaShareAlt, FaList } from "react-icons/fa";
import { IoMdAdd, IoMdArrowDropdown } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";
import { FiCheckCircle } from "react-icons/fi";
import { CgSandClock } from "react-icons/cg";
import TaskTable from "../components/tasks/TaskTable";
import ScheduleTable from "../components/tasks/ScheduleTable";
import NotesTable from "../components/tasks/NotesTable";
function MyTaskPage() {
  return (
    <>
      <div className="mt-5 container d-flex gap-4">
        {/* <div className=" bg-primary sideBar  w-25 ">side</div> */}

        <div className="container-fluid py-3 bg-light">
          <div className="main mx-auto bg-white p-3 p-md-4 rounded shadow w-100 w-md-75">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
              <div>
                <span className="text-muted small">
                  Sunday, October 5, 2025
                </span>
                <h2 className="fw-bold">Good Evening! John,</h2>
              </div>

              <div className="d-flex flex-wrap justify-content-end align-items-center gap-2 mt-3 mt-md-0">
                <button className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-bold border btn btn-outline-secondary">
                  <FaShareAlt /> Share
                </button>
                <button className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-bold border btn ">
                  <IoMdAdd /> Add Task
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-pill bg-success-subtle px-3 py-3 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-between text-center text-md-start gap-3">
              <div className="d-flex align-items-center justify-content-center gap-2 border-end pe-md-3 w-100 w-md-auto">
                <CiClock1 size={20} />
                <span className="fw-bolder">12hrs</span>{" "}
                <span className="ms-1 text-muted">Time Saved</span>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2 border-end pe-md-3 w-100 w-md-auto">
                <FiCheckCircle size={20} />
                <span className="fw-bolder">24</span>{" "}
                <span className="ms-1 text-muted">Projects Completed</span>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2 w-100 w-md-auto">
                <CgSandClock size={20} />
                <span className="fw-bolder">7</span>{" "}
                <span className="ms-1 text-muted">Projects In Progress</span>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-5 rounded-top text-black p-3 border border-1 ">
              <div className="d-flex flex-wrap align-items-center gap-2">
                <FaList size={20} />
                <h3 className="mb-0">My Projects</h3>
                <button className="px-3 py-1 rounded-2 border-0 bg-white text-dark mt-1 d-flex align-items-center gap-1">
                  This Week <IoMdArrowDropdown size={18} />
                </button>
              </div>
              <button className="rounded-pill px-3 py-2 border-0 fw-bold bg-white text-dark mt-3 mt-md-0">
                See All
              </button>
            </div>
            <TaskTable></TaskTable>
            <div className="d-flex gap-3 flex-column flex-lg-row">
              <ScheduleTable></ScheduleTable>
              <NotesTable></NotesTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyTaskPage;
