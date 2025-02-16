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
// function App(){
//   return (
//     <div>
//       <ToDo />
//     </div>
//   )
// }

// jsx with curly braces
// function App() {
//   const name = "React dev";
//   const userObj = {
//     name: "developer",
//     age: 34,
//     city: "new town",
//     height: 150,
//     width: 150,
//     url: "https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   };
//   const userArray = ["sam", "peter", "henry"];
//   let x = 2;
//   let y = 7;

//   function fruit() {
//     return "Apple";
//   }

//   function sum(a, b) {
//     return a + b;
//   }

//   function operation(a, b, op) {
//     if (op == "+") {
//       return a + b;
//     } else if (op == "-") {
//       return a - b;
//     } else {
//       return a * b;
//     }
//   }
//   return (
//     <div>
//       <h1>JSX with curly braces</h1>
//       <h1>{name ? name : "user not found"}</h1>
//       <h1>{x * y}</h1>
//       <h1>{fruit()}</h1>
//       <h1>{sum(5, 45)}</h1>
//       <h1>{operation(5, 8, "+")}</h1>
//       <h1>{userObj.city}</h1>
//       <input type="text" value={name} id={name} />
//       <h1>{userArray[2]}</h1>
//       <img
//         src={userObj.url}
//         alt="dog"
//         width={userObj.width}
//         height={userObj.height}
//       />
//     </div>
//   );
// }

// click event & functions
// function App() {
//   function callFun() {
//     alert("function called inner");
//   }
//   const fruit = (name) => {
//     alert(name);
//   };
//   return (
//     <div>
//       <h1>Events and Functions</h1>
//       <button onClick={() => callFun()}>Apple</button>
//       <button onClick={() => fruit("orange")}>Orange</button>
//     </div>
//   );
// }

// state
function App() {
  return (
    <div>
      <h1>State in React Js</h1>
    </div>
  );
}

export default App;