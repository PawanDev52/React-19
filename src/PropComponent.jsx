// function PropComponent({ name, age, email }) {
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h1>Age: {age}</h1>
//       <h1>Email: {email}</h1>
//     </div>
//   );
// }

// for object
function PropComponent({ user }) {
  return (
    <div>
      <hr />
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
}

export default PropComponent;