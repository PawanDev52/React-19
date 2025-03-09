const Student = ({ student }) => {
  return (
    <div>
      <h2>Students</h2>
      {student.map((student, index) => (
        <ul key={index}>
          <li>Name: {student.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Student;
