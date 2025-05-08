import SubjectContext from "./SubjectContext";

export default function StudentContext() {
  return (
    <div style={{ background: "green", padding: "20px" }}>
      <h1>Student Component</h1>
      <SubjectContext />
    </div>
  );
}
