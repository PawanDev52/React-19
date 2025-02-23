function Wrapper({ children, color = "green" }) {
  return (
    <div
      style={{
        color: color,
        border: "4px solid green",
        width: "250px",
        textAlign: "center",
        margin: "10px 0px",
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
