import StudentList from "./StudentList";

function App() {
  const students = [
    {
      id: 1,
      name: "Ali",
      age: 20,
      department: "Computer Science"
    },
    {
      id: 2,
      name: "Sara",
      age: 21,
      department: "Information Technology"
    },
    {
      id: 3,
      name: "Ahmed",
      age: 19,
      department: "Software Engineering"
    }
  ];

  return (
    <div>
      <h1>🎓 Student Directory</h1>

      <StudentList students={students} />
    </div>
  );
}

export default App;