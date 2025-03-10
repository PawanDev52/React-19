import { useEffect } from "react";

// const CounterUse = ({ count, data }) => {
//   const handleCounter = () => {
//     console.log("handleCounter called");
//   };

//   const handleData = () => {
//     console.log("handleData called");
//   };

//   useEffect(() => {
//     handleCounter();
//   }, []);

//   useEffect(() => {
//     handleData();
//   }, [data]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h1>Data: {data}</h1>
//     </div>
//   );
// };

// ==========================================================
// react component lifecycle
const CounterUse = ({ count, data }) => {
  useEffect(() => {
    console.log("mounting phase only");
  }, []);

  useEffect(() => {
    console.log("update phase only");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("unmount phase only");
    };
  }, []);

  return (
    <div>
      <h1>Counter value: {count}</h1>
      <h1>Data value: {data}</h1>
    </div>
  );
};

export default CounterUse;
