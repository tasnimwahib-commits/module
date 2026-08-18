function StudentCard(props) {
  const student = props.student;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Department: {student.department}</p>
    </div>
  );
}

export default StudentCard;