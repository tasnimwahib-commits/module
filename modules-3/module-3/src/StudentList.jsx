import StudentCard from "./StudentCard";

function StudentList(props) {
  return (
    <div>
      {props.students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </div>
  );
}

export default StudentList;