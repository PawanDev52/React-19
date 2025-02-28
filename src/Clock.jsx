import { useState } from "react";

function Clock() {
  const d = new Date();
  return (
    <div>
      <div
        style={{
          background: "green",
          padding: "15px",
          borderRadius: "10px",
          width: "150px",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        <span>{d.getHours()}</span> : <span>{d.getMinutes()}</span> :{" "}
        <span>{d.getSeconds()}</span>
      </div>
    </div>
  );
}

export function ClockColor() {
  const [colorBg, setColorBg] = useState("green");
  return (
    <div>
      <select onChange={(e) => setColorBg(e.target.value)} defaultValue="green">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
      <h3>{colorBg}</h3>
    </div>
  );
}

export default Clock;
