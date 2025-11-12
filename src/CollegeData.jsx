import Student from "./Student";

const CollegeData = ({ college }) => {
  return (
    <div
      style={{
        background: "#ccc",
        padding: "20px",
        margin: "20px",
        borderBottom: "2px solid #000",
        borderRadius: "10px",
      }}
    >
      <h3>Name: {college.name}</h3>
      <ul>
        <li>
          <h3>City: {college.city}</h3>
        </li>
        <li>
          <h3>Website: {college.website}</h3>
        </li>
        <li>
          <Student student={college.student} />
        </li>
      </ul>
    </div>
  );
};

export default CollegeData;