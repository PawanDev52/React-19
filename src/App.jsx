import {
  createElement,
  Fragment,
  useActionState,
  useEffect,
  useId,
  useTransition,
} from "react";
import Login, { Profile, Setting, UserKey } from "./UserComponent";
import ToDo from "./ToDo";
import "./css/style.css";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

// function App() {
//   const userName = "React Dev";
//   let x = 20;
//   let y = 30;
//   return (
//     <>
//       <h1>{userName}</h1>
//       <h1>{10 + 20 + 30}</h1>
//       <h1>{x * y}</h1>
//       <button onClick={() => alert("hello")}>Click</button>
//     </>
//   );
// }

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
import College, { Student } from "./College";
import Users from "./Users";
import Wrapper from "./Wrapper";
import Skills from "./Skills";
import UserData from "./UserData";
import Clock from "./Clock";
import CollegeData from "./CollegeData";
import CounterUse from "./CounterUse";
import UserProfile from "./UserProfile";
import PassComp from "./PassComponent";
import UserInput from "./UserInput";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import CollegeContext from "./CollegeContext";
import { SubjectName } from "./ContextData";

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
// function App() {
//   let name = "peter";
//   let age = 26;
//   let email = "peter@test.com";
//   return (
//     <div>
//       <h1>Props in React JS</h1>
//       {/* <PropComponent name="peter" age={25} email="peter@test.com" /> */}
//       <PropComponent name={name} age={age} email={email} />
//     </div>
//   );
// }

// props with object
// function App() {
//   let userObject = {
//     name: "Peter",
//     age: 24,
//     email: "peter@test.com",
//   };
//   let userObject1 = {
//     name: "Sam",
//     age: 26,
//     email: "sam@test.com",
//   };
//   let userObject2 = {
//     name: "Joy",
//     age: 28,
//     email: "joy@test.com",
//   };
//   return (
//     <div>
//       <h1>Props in React JS</h1>
//       <PropComponent user={userObject} />
//       <PropComponent user={userObject1} />
//       <PropComponent user={userObject2} />
//     </div>
//   );
// }

// Props with array
// function App() {
//   let collegeNames = ["iitm", "dgit", "du", "nit"];
//   return (
//     <div>
//       <h1>Props in React JS</h1>
//       <College name={collegeNames[0]} />
//     </div>
//   );
// }

// props with array with button click
// function App() {
//   const [student, setStudent] = useState();
//   return (
//     <div>
//       <h1>Props in React</h1>
//       {student && <Student name={student} />}
//       <button onClick={() => setStudent("Sandy")}>Update Name</button>
//     </div>
//   );
// }

// jsx with props
// function App() {
//   return (
//     <div>
//       <h1>Props in React Js</h1>
//       <Users name="Sanjay" />
//       <Users name="Jack" />
//       <Users />
//       <hr />
//       <Wrapper color="orange">
//         <h1>Hello Everyone</h1>
//       </Wrapper>

//       <Wrapper color="brown">
//         <h1>Hello User</h1>
//       </Wrapper>

//       <Wrapper>
//         <h1>Hello Admin</h1>
//         <h2 style={{ color: "blue" }}>Please Login</h2>
//       </Wrapper>
//     </div>
//   );
// }

// get input value
// function App() {
//   const [val, setVal] = useState("Peter");
//   return (
//     <div>
//       <h1>Get Input Field Value</h1>
//       {/* <input onChange={(event)=> console.log(event.target.value)} type="text" placeholder="Enter user name" /> */}
//       <input
//         onChange={(event) => setVal(event.target.value)}
//         value={val}
//         type="text"
//         placeholder="Enter user name"
//       />
//       <h1>Input value: {val}</h1>
//       <button onClick={() => setVal("")}>Clear value</button>
//     </div>
//   );
// }

// practice question
// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [passwd, setPasswd] = useState("");
//   return (
//     <div>
//       <h1>Get Input Field Data</h1>
//       <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter name" />
//       <br /><br />
//       <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
//       <br /><br />
//       <input onChange={(e) => setPasswd(e.target.value)} value={passwd} type="password" placeholder="Enter password" />
//       <br /><br />
//       <button>Submit</button>

//       <button
//         onClick={() => {
//           setName("");
//           setEmail("");
//           setPasswd("");
//         }}
//       >
//         Clear
//       </button>

//       <h3>{name}</h3>
//       <h3>{email}</h3>
//       <h3>{passwd}</h3>
//     </div>
//   );
// }

// Handle check boxes
// function App() {
//   return (
//     <div>
//       <h1>Handle Checkbox in React JS</h1>
//       <Skills />
//     </div>
//   );
// }

// Handle radio and dropdown
// function App() {
//   const [gender, setGender] = useState("female");
//   const [city, setCity] = useState("delhi");
//   return (
//     <div>
//       <h1>Handle Radio and Dropdown</h1>
//       <h4>Select Gender</h4>
//       <input
//         type="radio"
//         onChange={(event) => setGender(event.target.value)}
//         checked={gender == "male"}
//         name="gender"
//         value={"male"}
//         id="male"
//       />
//       <label htmlFor="male">Male</label>
//       <input
//         type="radio"
//         onChange={(event) => setGender(event.target.value)}
//         checked={gender == "female"}
//         name="gender"
//         value={"female"}
//         id="female"
//       />
//       <label htmlFor="female">Female</label>
//       <h2>Selected Gender: {gender}</h2>
//       <br />

//       <h4>Select City</h4>
//       <select
//         onChange={(event) => setCity(event.target.value)}
//         defaultValue={"delhi"}
//       >
//         <option value="noida">Noida</option>
//         <option value="gurgaon">Gurgaon</option>
//         <option value="delhi">Delhi</option>
//         <option value="pune">Pune</option>
//       </select>
//       <h2>Selected City: {city}</h2>
//     </div>
//   );
// }

// Loop in jsx
// function App() {
//   const userData = [
//     {
//       name: "Sandy",
//       age: "26",
//       email: "sandy@test.com",
//       id: 1,
//     },
//     {
//       name: "Henry",
//       age: "28",
//       email: "henry@test.com",
//       id: 2,
//     },
//     {
//       name: "Peter",
//       age: "32",
//       email: "peter@test.com",
//       id: 3,
//     },
//     {
//       name: "Mate",
//       age: "21",
//       email: "mate@test.com",
//       id: 4,
//     },
//   ];
//   return (
//     <div>
//       <h1>Loop in JSX with Map funciton</h1>
//       <table border={1}>
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Age</td>
//             <td>Email</td>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.age}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// Reuse component in loop
// function App() {
//   const userData = [
//     {
//       name: "Sandy",
//       age: "26",
//       email: "sandy@test.com",
//       id: 1,
//     },
//     {
//       name: "Henry",
//       age: "28",
//       email: "henry@test.com",
//       id: 2,
//     },
//     {
//       name: "Peter",
//       age: "32",
//       email: "peter@test.com",
//       id: 3,
//     },
//     {
//       name: "Mate",
//       age: "21",
//       email: "mate@test.com",
//       id: 4,
//     },
//   ];
//   return (
//     <div>
//       <h1>Reuse Component in Loop</h1>
//       {userData.map((user) => (
//         <div key={user.id}>
//           <UserData data={user} />
//         </div>
//       ))}
//     </div>
//   );
// }

// Practice Question - props
// function App() {
//   const [color, setColor] = useState("green");
//   const [bgColor, setBgColor] = useState("red");
//   return (
//     <div>
//       <h1>Clock color change with dropdown</h1>
//       <span>Pick A Color: </span>
//       <select value={color} onChange={(e) => setColor(e.target.value)}>
//         <option value="red">Red</option>
//         <option value="green">Green</option>
//         <option value="blue">Blue</option>
//         <option value="orange">Orange</option>
//       </select>
//       <br /> <br />
//       <span>Pick A Background Color: </span>
//       <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
//         <option value="red">Red</option>
//         <option value="brown">Brown</option>
//         <option value="pink">Pink</option>
//         <option value="purple">Purple</option>
//       </select>
//       <Clock color={color} bgColor={bgColor} />
//     </div>
//   );
// }

// Nested Looping
// function App() {
//   const collegeData = [
//     {
//       name: "IITM",
//       city: "Delhi",
//       website: "www.iitm.com",
//       student: [
//         {
//           name: "peter",
//           age: "26",
//           email: "peter@test.com",
//         },
//         {
//           name: "andrew",
//           age: "36",
//           email: "andrew@test.com",
//         },
//         {
//           name: "mandy",
//           age: "29",
//           email: "mandy@test.com",
//         },
//       ],
//     },
//     {
//       name: "IPU",
//       city: "Noida",
//       website: "www.ipu.com",
//       student: [
//         {
//           name: "Sandy",
//           age: "23",
//           email: "sandy@test.com",
//         },
//         {
//           name: "micky",
//           age: "18",
//           email: "micky@test.com",
//         },
//         {
//           name: "max",
//           age: "23",
//           email: "max@test.com",
//         },
//       ],
//     },
//     {
//       name: "ignou",
//       city: "gurgaon",
//       website: "www.ignou.com",
//       student: [
//         {
//           name: "Neil",
//           age: "27",
//           email: "neil@test.com",
//         },
//         {
//           name: "rocky",
//           age: "25",
//           email: "rocky@test.com",
//         },
//         {
//           name: "Bob",
//           age: "26",
//           email: "bob@test.com",
//         },
//       ],
//     },
//     {
//       name: "sol",
//       city: "himachal",
//       website: "www.iitm.com",
//       student: [
//         {
//           name: "Jack",
//           age: "31",
//           email: "jack@test.com",
//         },
//         {
//           name: "Candy",
//           age: "24",
//           email: "candy@test.com",
//         },
//         {
//           name: "Joy",
//           age: "26",
//           email: "joy@test.com",
//         },
//       ],
//     },
//   ];
//   return (
//     <div>
//       <h1>Nested Looping with Components</h1>
//       {collegeData.map((college, index) => (
//         <div key={index}>
//           <CollegeData college={college} />
//         </div>
//       ))}
//     </div>
//   );
// }

// useEffect Hook
// handle state side effects with useEffect
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     callOnce();
//   }, []);

//   useEffect(() => {
//     counterFunction();
//   }, [counter]);

//   function counterFunction() {
//     console.log("counterFunction", counter);
//   }

//   function callOnce() {
//     console.log("callonce function called");
//   }

//   return (
//     <div>
//       <h1>useEffect Hook</h1>
//       <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
//       <button onClick={() => setData(data + 1)}>Data {data}</button>
//     </div>
//   );
// }

// handle props side effects with useEffect
// and component life cycle
// function App() {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(0);
//   const [display, setDisplay] = useState(true);

//   return (
//     <div>
//       {display ? <CounterUse count={count} data={data} /> : null}

//       <button onClick={() => setCount(count + 1)}>Count</button>
//       <button onClick={() => setData(data + 1)}>Data</button>
//       <button onClick={() => setDisplay(!display)}>Toggle</button>
//     </div>
//   );
// }

// Inline styles
// function App() {
//   const cardStyle = {
//     border: "1px solid #cccccc3b",
//     width: "200px",
//     boxShadow: "2px 2px 5px 0px #ccc",
//     margin: "10px",
//   };

//   return (
//     <>
//       <h1 style={{ color: "red" }}>Inline Styling in React</h1>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px" }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px" }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px" }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px" }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px" }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px" }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px" }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px" }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// Dynamic and Conditional Inline Style
// function App() {
//   const [cardStyle, setCardStyle] = useState({
//     border: "1px solid #cccccc3b",
//     width: "200px",
//     boxShadow: "2px 2px 5px 0px #ccc",
//     margin: "10px",
//   });

//   const [textColor, setTextColor] = useState("black");
//   const [grid, setGrid] = useState(true);

//   const updateTheme = (bgColor, textColor) => {
//     setCardStyle({ ...cardStyle, background: bgColor });
//     setTextColor(textColor);
//   };

//   return (
//     <>
//       <h1 style={{ color: "red" }}>
//         Dynamic and Conditional Inline Styling in React
//       </h1>
//       <button onClick={() => updateTheme("#ccc", "blue")}>Gray Theme</button>
//       <button onClick={() => updateTheme("white", "black")}>
//         Default Theme
//       </button>
//       <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

//       <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px", color: textColor }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px", color: textColor }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px", color: textColor }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px", color: textColor }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px", color: textColor }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px", color: textColor }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <img
//             style={{ width: "200px" }}
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt=""
//           />
//           <div style={{ padding: "5px", color: textColor }}>
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// External style
// function App() {
//   return (
//     <>
//       <h1 className="heading">External style</h1>
//       <div className="container">
//         <div className="user-card">
//           <div>
//             <img className="img-style" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
//           </div>
//           <div className="text-wrap">
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>

//         <div className="user-card">
//           <div>
//             <img className="img-style" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
//           </div>
//           <div className="text-wrap">
//             <h4>Peter Parker</h4>
//             <p>Software Developer</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// CSS Modules
// function App() {
//   return (
//     <>
//       <h1 className="heading">Style with CSS Module in React js</h1>
//       <div style={{ display: "flex" }}>
//         <UserProfile />
//         <UserProfile />
//         <UserProfile />
//         <UserProfile />
//       </div>
//     </>
//   );
// }

// Styled Components
// function App() {
//   // const Heading = styled.h1`
//   //   color: red;
//   //   border: 2px solid green;
//   //   border-radius: 10px;
//   //   margin: 20px;
//   //   padding: 20px;
//   // `;

//   // another way
//   const Heading = styled.h1({
//     color: "red",
//     border: "2px solid green",
//     borderRadius: "10px",
//     margin: "20px",
//     padding: "20px",
//   });

//   const StyleBtn = styled.button`
//     color: red;
//     width: 130px;
//     height: 40px;
//     margin: 20px;
//     background: grey;
//   `;

//   return (
//     <>
//       <h1>Styled Component with React</h1>
//       <Heading>Hello Heading</Heading>
//       <Heading>Hello Heading 2</Heading>
//       <Heading>Hello Heading 3</Heading>
//       <Heading>Hello Heading 4</Heading>
//       <StyleBtn>Login</StyleBtn>
//       <StyleBtn>SignUp</StyleBtn>
//     </>
//   );
// }

// Boostrap style
// function App() {
//   return (
//     <>
//       <h1>Add Bootstrap in React Js</h1>
//       <button onClick={() => alert("simple button")}>Simple Button</button>

//       <Alert variant="primary">Hello Bt Installer!</Alert>

//       <Button onClick={() => alert("bootstrap button")} variant="danger">
//         Bootstrap button
//       </Button>
//       <Button variant="success">Ok</Button>
//       <Button variant="warning">Ok</Button>
//     </>
//   );
// }

// useRef hook
// function App() {
//   const inputRef = useRef(null);
//   const h1Ref = useRef(null);

//   const inputHandler = () => {
//     console.log(inputRef);
//     inputRef.current.focus();
//     inputRef.current.style.color = "red";
//     inputRef.current.placeholder = "enter password";
//     inputRef.current.value = "123";
//   };

//   const toggleHandler = () => {
//     if (inputRef.current.style.display != "none") {
//       inputRef.current.style.display = "none";
//     } else {
//       inputRef.current.style.display = "inline";
//     }
//   };

//   const h1Handler = () => {
//     h1Ref.current.style.color = "green";
//   };

//   return (
//     <>
//       <h1>useRef</h1>
//       <button onClick={toggleHandler}>toggle</button>
//       <input ref={inputRef} type="text" placeholder="Enter user name" />
//       <button onClick={inputHandler}>Focus on input field</button>

//       <h1 ref={h1Ref}>Web Master</h1>
//       <button onClick={h1Handler}>Handler</button>
//     </>
//   );
// }

// Uncontrolled Components
// function App() {
//   const userRef = useRef();
//   const passwordRef = useRef();

//   const handleForm = (event) => {
//     event.preventDefault();
//     const user = document.querySelector("#user").value;
//     const password = document.querySelector("#password").value;

//     console.log(user);
//     console.log(password);
//   };

//   const handleFormRef = (event) => {
//     event.preventDefault();
//     const user = userRef.current.value;
//     const password = passwordRef.current.value;
//     console.log(user, password);
//   };

//   return (
//     <>
//       <h1>Uncontrolled Components</h1>
//       <form action="" method="post" onSubmit={handleForm}>
//         <input type="text" id="user" placeholder="Enter user name" />
//         <br /> <br />
//         <input type="password" id="password" placeholder="Enter user password" />
//         <br /> <br />
//         <button>Submit</button>
//       </form>

//       <hr />

//       <h1>Uncontrolled Components with useRef</h1>
//       <form action="" method="post" onSubmit={handleFormRef}>
//         <input type="text" ref={userRef} id="userRef" placeholder="Enter user name" />
//         <br /> <br />
//         <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter user password" />
//         <br /> <br />
//         <button>Submit with useRef</button>
//       </form>
//     </>
//   );
// }

// pass function in component
// function App() {
//   const displayName = (name) => {
//     alert(name);
//   };

//   const getUser = () => {
//     alert("getUser function called");
//   };

//   return (
//     <>
//       <h1>Call Parent Component Function from child component</h1>
//       <PassComp displayName={displayName} name="henry" getUser={getUser} />
//       <PassComp displayName={displayName} getUser={getUser} />
//       <PassComp displayName={displayName} name="sandy" getUser={getUser} />
//       <PassComp displayName={displayName} name="mandy" getUser={getUser} />
//     </>
//   );
// }

// ForwardRef in react
// function App() {
//   const inputRef = useRef(null);
//   const updateInput = () => {
//     inputRef.current.focus();
//     inputRef.current.value = 1000;
//     inputRef.current.style.color = "red";
//   };

//   return (
//     <>
//       <h1>Forward Ref</h1>
//       <UserInput ref={inputRef} />
//       <button onClick={updateInput}>Update Input Field</button>
//     </>
//   );
// }

// useFormStatus hook
// function App() {
//   const handleSubmit = async () => {
//     await new Promise((res) => setTimeout(res, 2000));
//     console.log("submit");
//   };

//   function CustomerForm() {
//     const { pending } = useFormStatus();
//     console.log(pending);
//     return (
//       <div>
//         <input type="text" placeholder="Enter Name" />
//         <br /> <br />
//         <input type="text" placeholder="Enter Password" />
//         <br /> <br />
//         <button disabled={pending}>
//           {pending ? "Submittig..." : "Submit"}
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>useFormStatus Hook in React</h1>
//       <form action={handleSubmit}>
//         <CustomerForm />
//       </form>
//     </div>
//   );
// }

// useTransition Hook
// function App() {
//   const [pending, startTransition] = useTransition();

//   const handleButton = () => {
//     startTransition(async () => {
//       await new Promise((res) => setTimeout(res, 2000));
//     });
//   };

//   return (
//     <div>
//       <h1>useTransition Hook in React Js</h1>
//       <button disabled={pending} onClick={handleButton}>
//         Click
//       </button>
//     </div>
//   );
// }

// Pure Component
// function App() {
//   const Cup = ({ count }) => {
//     return (
//       <h2>
//         We have {count} guest and we have to make {count} cup of tea
//       </h2>
//     );
//   };
//   return (
//     <>
//       <h1>Keeping Components Pure</h1>
//       <Cup count={2} />
//       <Cup count={1} />
//       <Cup count={4} />
//       <Cup count={5} />
//     </>
//   );
// }

// Derived State
// function App() {
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState("");
//   const handleAddUsers = () => {
//     setUsers([...users, user]);
//     setUser("");
//   };
//   const total = users.length;
//   const last = users[users.length - 1];
//   const unique = [...new Set(users)].length;

//   return (
//     <div>
//       <h3>Total Users: {total}</h3>
//       <h3>Last User: {last}</h3>
//       <h3>Total Unique Users: {unique}</h3>

//       <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="add new user" />
//       <button onClick={handleAddUsers}>Add User</button>
//       {users.map((item, index) => (
//         <h4 key={index}>{item}</h4>
//       ))}
//     </div>
//   );
// }

// Lifting State
// function App() {
//   const [user, setUser] = useState("");
//   return (
//     <div>
//       <AddUser addUser={setUser} />
//       <DisplayUser displayUser={user} />
//     </div>
//   );
// }

// Update Object in State
// function App() {
//   const [data, setData] = useState({
//     name: "peter",
//     address: {
//       city: "delhi",
//       country: "India",
//     },
//   });

//   function handleName(e) {
//     setData({ ...data, name: e.target.value });
//   }

//   function handleAddress(e) {
//     setData({
//       ...data,
//       address: {
//         ...data.address,
//         [e.target.name]: e.target.value,
//       },
//     });
//   }

//   return (
//     <div>
//       <h1>Updating Object in State</h1>

//       <input type="text" onChange={handleName} name="name" placeholder="Enter Name" />
//       <br /><br />
//       <input type="text" onChange={handleAddress} name="city" placeholder="Enter City" />
//       <br /><br />
//       <input type="text" onChange={handleAddress} name="country" placeholder="Enter Country" />
//       <br /><br />

//       <h3>Name: {data.name}</h3>
//       <h3>City: {data.address.city}</h3>
//       <h3>Country: {data.address.country}</h3>
//     </div>
//   );
// }

// Update Array in State
// function App() {
//   const [data, setData] = useState(["sam", "mandy", "peter", "tony"]);
//   const handleName = (name) => {
//     let updates = [...data];
//     updates[updates.length - 1] = name;
//     setData(updates);
//   };

//   const [details, setDetails] = useState([
//     { name: "mandy", age: "26" },
//     { name: "sam", age: "36" },
//     { name: "peter", age: "29" },
//   ]);

//   const handleAge = (age) => {
//     // details[details.length - 1].age = age;
//     // setDetails([...details]);

//     let updateAge = details.map((item, index) =>
//       index === details.length - 1 ? { ...item, age: age } : item
//     );
//     setDetails(updateAge);
//   };

//   return (
//     <div>
//       <h1>Updating Array in State</h1>
//       <input type="text" onChange={(e) => handleName(e.target.value)} placeholder="Enter last user name" />

//       {data.map((item, index) => (
//         <h3 key={index}>{item}</h3>
//       ))}
//       <hr />

//       <input type="text" onChange={(e) => handleAge(e.target.value)} placeholder="Enter last user age" />

//       {details.map((item, index) => (
//         <h3 key={index}>
//           {item.name}, {item.age}
//         </h3>
//       ))}
//     </div>
//   );
// }

// useActionState hook
// function App() {
//   const handleSubmit = async (previousData, formData) => {
//     let name = formData.get("name");
//     let password = formData.get("password");

//     await new Promise((res) => setTimeout(res, 2000));
//     // console.log("handleSubmit Called", name, password);
//     if (name && password) {
//       return { message: "Data Submitted", name, password };
//     } else {
//       return { error: "Failed to Submit, Enter proper data", name, password };
//     }
//   };

//   const [data, action, pending] = useActionState(handleSubmit, undefined);
//   // console.log(data);

//   return (
//     <div>
//       <h1>useActionState Hook in React</h1>
//       <form action={action}>
//         <input defaultValue={data?.name} type="text" name="name" placeholder="enter name" />
//         <br /> <br />
//         <input defaultValue={data?.password} type="password" name="password" placeholder="enter password" />
//         <br /> <br />
//         <button disabled={pending}>Submit</button>
//       </form>
//       <br />

//       {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}

//       {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}

//       <h3>Name: {data?.name}</h3>
//       <h3>Password: {data?.password}</h3>
//     </div>
//   );
// }

// useId hook
// function App() {
//   return (
//     <div>
//       <h1>useId Hook in React</h1>
//       <UserForm />
//       <hr />
//       <UserForm />
//     </div>
//   );
// }

// function UserForm() {
//   const user = useId();

//   return (
//     <div>
//       <form action="">
//         <label htmlFor={user + "name"}>Enter user name</label>
//         <input id={user + "name"} type="text" placeholder="enter user name" />
//         <br /><br />
//         <label htmlFor={user + "password"}>Enter user password</label>
//         <input id={user + "password"} type="text" placeholder="enter password" />
//         <br /><br />
//         <label htmlFor={user + "skills"}>Enter user skills</label>
//         <input id={user + "skills"} type="text" placeholder="enter skills" />
//         <br /><br />
//         <input id={user + "terms"} type="checkbox" placeholder="enter skills" />
//         <label htmlFor={user + "terms"}>Terms and Conditions</label>
//       </form>
//     </div>
//   );
// }

// Fragement
// function App() {
//   return (
//     <>
//       <Data />
//     </>
//   );
// }

// function Data() {
//   return (
//     <Fragment>
//       <h1>Fragement in React</h1>
//     </Fragment>
//   );
// }

// function App() {
//   const [subject, setSubject] = useState("");
//   return (
//     <div style={{ background: "yellow", padding: "20px" }}>
//       <SubjectName.Provider value={subject}>
//         <select value={subject} onChange={(event) => setSubject(event.target.value)} >
//           <option value="">Select Subject</option>
//           <option value="Maths">Maths</option>
//           <option value="Science">Science</option>
//           <option value="History">History</option>
//           <option value="English">English</option>
//         </select>
//         <h1>Context API</h1>
//         <button onClick={() => setSubject("")}>Clear Subject</button>
//         <CollegeContext />
//       </SubjectName.Provider>
//     </div>
//   );
// }

// react routing

export default App;
