import img1 from "../../assets/images/avatar 1.jpg";
import img2 from "../../assets/images/avatar 2.jpg";
import img3 from "../../assets/images/avatar 3.jpg";
function ScheduleTable() {
  const schedule = [
    {
      id: 1,
      title: "Kickoff Meeting",
      time: "09:00 AM - 10:30 AM",
      users: [img1],
    },
    {
      id: 2,
      title: "Create Wordpress website for event Registration",
      time: "04:00 PM - 05:30 PM",
      users: [img2],
    },
    {
      id: 3,
      title: "Create User flow for hotel booking",
      time: "06:00 PM - 07:30 PM",
      users: [img3],
    },
  ];

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex flex-column ">
            <h5 className="card-title   mb-3 ">Schedule</h5>
            <div className="d-flex gap-2 flex-wrap ">
              {[" 15", "16", "17", "18", "19", "20"].map((d, i) => (
                <button
                  key={i}
                  className={`btn btn-sm border border-2 btn-outline-secondary `}
                  style={{ borderRadius: "15%", width: "40px", height: "40px" }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {schedule.map((s) => (
          <div
            key={s.id}
            className={`d-flex justify-content-between align-items-center py-3`}
          >
            <div>
              <div className="fw-semibold">{s.title}</div>
              <div className="text-muted small">{s.time}</div>
            </div>
            <div className="d-flex">
              <img
                src={s.users}
                alt="avatar"
                className="rounded-circle"
                width="30"
                height="30"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ScheduleTable;
