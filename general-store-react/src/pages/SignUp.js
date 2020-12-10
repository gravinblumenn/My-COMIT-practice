// import React, { useState, useEffect } from "react";
// import {useHistory} from 'react-router';
// import { useUser } from "../components/UserProvider";
// import { Link } from "react-router-dom";

// export default function SignUp(props) {
//   useEffect(() => {
//     document.title = "Sign Up";
//   }, []);

//   const { handleSubmitSignUp, error } = useUser();
//   const history = useHistory();
//   const [values, setValues] = useState({});

//   const handleChange = (event) => {
//     setValues({
//         ...values,
//         [event.target.name]: event.target.value,
//     });
// };

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [password1, setPassword1] = useState("");
//   const [password2, setPassword2] = useState("");

//   return (
//     <div className="body">
//       <div className="container">
//         <div className="user">
//           <img src="" alt="profile" />
//           <p>Profile Name</p>
//         </div>

//         <header>
//           <Link to="/">
//             <h1>General Store</h1>
//           </Link>
//         </header>

//         <div className="auth-form">
//           <form onSubmit={async (event) => {
//                 event.preventDefault();
//                 await handleSubmitSignUp(values);
//                 history.push("/");
//                 }}>
//             <label>
//               <p>Name:</p>
//               <input
//                 // value={name}
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Name"
//                 autoFocus
//                 onChange={handleChange }
//               />
//             </label>
//             <label>
//               <p>Age:</p>
//               <input
//                 // value={age}
//                 type="number"
//                 id="age"
//                 name="age"
//                 placeholder="Age"
//                 autoFocus
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               <p>Email:</p>
//               <input
//                 // value={email}
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email"
//                 autoFocus
//                 required
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               <p>Password:</p>
//               <input
//                 // value={password1}
//                 type="password"
//                 id="password1"
//                 name="password"
//                 placeholder="Password"
//                 autoFocus
//                 required
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               <p>Confirm Password:</p>
//               <input
//                 // value={password2}
//                 type="password"
//                 id="password2"
//                 name="password"
//                 placeholder="Confirm Password"
//                 autoFocus
//                 required
//                 onChange={handleChange}
//               />
//             </label>
//             <button
//               className="signUpSubmit"
//               type="submit"
//               // disabled={!password1 || !password2 || password1 !== password2}
//               onClick={handleChange}
//             >
//               Submit
//             </button>
//             {error && error.message}
//           </form>
//         </div>

//         <div className="footer">
//           <ul>
//             <li>About us</li>
//             <li>Contact us</li>
//           </ul>
//         </div>
//       </div>
//       {props.children}
//     </div>
//   );
// }
