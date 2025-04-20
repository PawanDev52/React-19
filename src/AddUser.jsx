function AddUser({ addUser }) {
  return (
    <div>
      <h1>Add User</h1>
      <input type="text" onChange={(e) => addUser(e.target.value)} />
      <hr />
    </div>
  );
}

export default AddUser;