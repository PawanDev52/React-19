function ToDo() {
  function callFun() {
    alert("function called");
  }

  return (
    <div>
      <h1>My Todos</h1>
      <img
        width={250}
        height={250}
        src="https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="dummy image"
      />
      <ul>
        <li>Invent New traffic lights</li>
        <li>Rehance a movie</li>
        <li>Improve the spectrum</li>
      </ul>
      <button onClick={callFun}>Click Me</button>
    </div>
  );
}

export default ToDo;