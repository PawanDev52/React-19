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
      <h1>Name: {college.name}</h1>
      <ul>
        <li>
          <h2>City: {college.city}</h2>
        </li>
        <li>
          <h2>Website: {college.website}</h2>
        </li>
        <li>
          <Student student={college.student} />
        </li>
      </ul>
    </div>
  );
};

export default CollegeData;