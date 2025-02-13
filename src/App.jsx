import { createElement } from "react";
import Login, { Profile, Setting, UserKey } from "./UserComponent";
import ToDo from "./ToDo";

// function App() {
  // const userName = "React Dev";
  // let x = 20;
  // let y = 30;
  // return (
  //   <>
  //     <h1>{userName}</h1>
  //     <h1>{10 + 20 + 30}</h1>
  //     <h1>{x * y}</h1>
  //     <button onClick={() => alert("hello")}>Click</button>
  //   </>
  // );

  // without jsx
  // return createElement("div", {id:"rootDiv"}, "hellow");

  // with jsx
  // return (
  //   <div className="rootDiv">Hello Div</div>
  // )
// }

// jsx exercise
function App(){
  return (
    <div>
      <ToDo />
    </div>
  )
}

export default App;