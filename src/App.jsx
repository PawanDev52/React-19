import { createElement, useEffect } from "react";
import Login, { Profile, Setting, UserKey } from "./UserComponent";
import ToDo from "./ToDo";
import "./css/style.css";
import styled from "styled-components";
import { Button } from "react-bootstrap";

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
import College, { Student } from "./College";
import Users from "./Users";
import Wrapper from "./Wrapper";
import Skills from "./Skills";
import UserData from "./UserData";
import Clock from "./Clock";
import CollegeData from "./CollegeData";
import CounterUse from "./CounterUse";
import UserProfile from "./UserProfile";

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
function App() {
  return (
    <>
      <h1>Add Bootstrap in React Js</h1>
      <Button>Ok</Button>
      <button>Ok</button>
    </>
  );
}

export default App;