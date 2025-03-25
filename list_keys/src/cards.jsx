import { studentsData } from "./assets/studentdata.js";
// import "./App.css";
const Cards = () => {
  return (
    <>
      <div className="cards">
        {studentsData.map((student, index) => (
          <div key={index} className="card">
            <h2>{student.id}</h2>
            <h2>{student.name}</h2>
            <h2>{student.email}</h2>
            <h2>{student.ispresent ? "present" : "Absent"}</h2>
            <h2>{student.mobile}</h2>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cards;
