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
import { useState } from "react";
import Counter from "./Counter";
import User from "./User";
import PropComponent from "./PropComponent";
// function App() {
//   const [fruit, setFruit] = useState("Apple");
//   const handleFruit = () => {
//     setFruit("Banana");
//   };
//   return (
//     <div>
//       <h1>State in React Js</h1>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}>Change Fruit Name</button>
//       <Counter />
//     </div>
//   );
// }

// state toggle
// function App() {
//   const [display, setDisplay] = useState(false);
//   const [age, setAge] = useState(16);

//   return (
//     <div>
//       <h1>Toggle in React JS</h1>
//       <button onClick={() => setDisplay(!display)}>Hide/Show</button>

//       {/* {display ? <h1>Developer</h1> : null} */}

//       {display ? <User /> : null}

//       <button onClick={() => setAge(age + 2)}>Check Age</button>

//       {age == 18 ? (
//         <h1>you are 18</h1>
//       ) : age < 18 ? (
//         <h1>You are below 18</h1>
//       ) : (
//         <h1>you are above 18</h1>
//       )}
//     </div>
//   );
// }

// else if condition
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Counter</button>
//       {
//         count == 0 ? <h1>Condition 0</h1>
//           : count == 1 ? <h1>Condition 1</h1>
//             : count == 2 ? <h1>Condition 2</h1>
//               : count == 3 ? <h1>Condition 3</h1>
//                 : count == 4 ? <h1>Condition 4</h1>
//                   : count == 5 ? <h1>Condition 5</h1>
//                     : <h1>Other Condition</h1>
//       }
//     </div>
//   )
// }

// props
function App() {
  return (
    <div>
      <h1>Props in React JS</h1>
      <PropComponent name="peter" age={25} email="peter@test.com" />
    </div>
  );
}

export default App;