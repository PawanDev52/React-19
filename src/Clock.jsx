import { useEffect, useState } from "react";

function Clock({ color, bgColor }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const tm = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(tm);
  }, []);
  return (
    <div
      style={{
        color: color,
        background: bgColor,
        width: "200px",
        padding: "15px",
        fontSize: "36px",
        borderRadius: "20px",
        marginTop: "20px",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Clock;