import { useContext } from "react";
import { SubjectName } from "./ContextData";

export default function SubjectContext() {
  const subject = useContext(SubjectName);
  return (
    <div style={{ background: "pink", padding: "20px" }}>
      <h1>Subject is : {subject}</h1>
    </div>
  );
}
