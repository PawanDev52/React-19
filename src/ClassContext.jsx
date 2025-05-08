import StudentContext from "./StudentContext";

export default function ClassContext() {
  return (
    <div style={{ background: "aqua", padding: "20px" }}>
      <h1>Class Component</h1>
      <StudentContext />
    </div>
  );
}
