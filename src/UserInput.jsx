// old method before react 19

// import { forwardRef } from "react";

// const UserInput = (props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// };

// export default forwardRef(UserInput);

// new methord in react 19 or after
const UserInput = (props) => {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  );
};

export default UserInput;
