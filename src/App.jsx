import Login, { Profile, Setting, UserKey } from "./UserComponent";

function App() {
  return (
    <div>
      <h1>First Component</h1>
      <Login />
      <Profile />
      <Setting />
      <h1>{UserKey}</h1>
    </div>
  );
}

export default App;