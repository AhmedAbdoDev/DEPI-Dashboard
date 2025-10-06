import "bootstrap/dist/css/bootstrap.min.css";
import { FaCommentAlt, FaUser, FaClipboardList } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import img1 from "../../assets/images/avatar 1.jpg";
import img2 from "../../assets/images/avatar 2.jpg";
import img3 from "../../assets/images/avatar 3.jpg";
function TaskTable() {
  const tasks = [
    {
      id: 1,
      name: "Help DStudio get more customers",
      comments: 7,
      attachments: 2,
      assign: "Phoenix Winters",
      avatar: img1,
      status: "In Progress",
      statusColor: "success",
    },
    {
      id: 2,
      name: "Plan a trip",
      comments: 10,
      attachments: 3,
      assign: "Cohen Merritt",
      avatar: img2,
      status: "Pending",
      statusColor: "warning",
    },
    {
      id: 3,
      name: "Return a package",
      comments: 5,
      attachments: 3,
      assign: "Sara Juarez",
      avatar: img3,
      status: "Completed",
      statusColor: "primary",
    },
  ];

  return (
    <div className="table-responsive ">
      <table className="table align-middle">
        <thead className="table-light">
          <tr className="">
            <th>
              <FaClipboardList className="me-2" size={18} />
              Task Name
            </th>
            <th>
              <FaUser className="me-2" size={18} />
              Assign
            </th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <div className="fw-semibold">{task.name}</div>
                    <div className="text-muted ">
                      <FaCommentAlt className="me-1" size={18} />{" "}
                      {task.comments}{" "}
                      <span className="ms-2">
                        <IoIosLink size={18} /> {task.attachments}
                      </span>
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={task.avatar}
                    alt="avatar"
                    className="rounded-circle"
                    width="30"
                    height="30"
                  />
                  <span>{task.assign}</span>
                </div>
              </td>

              <td>
                <span
                  className={`badge bg-${task.statusColor} bg-opacity-25 text-${task.statusColor} fw-semibold px-3 py-2 rounded-pill`}
                  style={{
                    backgroundColor: `var(--bs-${task.statusColor}-bg-subtle) !important`,
                  }}
                >
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
