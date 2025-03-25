import { studentsData } from "./assets/studentdata";
import "./App.css";

const StudentTable = () => {
  
  // const presentStudents = studentsData.filter((student) => student.ispresent);

  return (
    <>
      <h2>Student Data</h2>
      <table border="1" align="center" cellSpacing={5} cellPadding={10}>
        <thead><tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>Attendence</th>
          <th>MOBILE NUM</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {studentsData.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.ispresent ? "present" : "Absent" }</td>
              <td>{student.mobile}</td>
              <td align="center" cellPadding={5}>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentTable;
