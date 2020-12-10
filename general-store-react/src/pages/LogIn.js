// import React, {useEffect, useState, useContext} from 'react';
// import { Link} from 'react-router-dom';
// import {useHistory} from 'react-router';
// import {UserContext} from '../components/UserProvider';

// export default function LogIn() {
//     useEffect(() => {
//         document.title = "Login";
//     }, []);

//     const history = useHistory(); 
//     const {handleSubmitLogin, error} = useContext(UserContext);

//     const [values, setValues] = useState({});

//     const handleChange = (event) => {
//         setValues({
//             ...values,
//             [event.target.name]: event.target.value,
//         });
//     };

//     return (
//         <div className="body">
//         <div className="container">
//           <div className="user">
//             <img src="" alt="profile" />
//             <p>Profile Name</p>
//           </div>
  
//           <header>
//             <Link to="/">
//               <h1>General Store</h1>
//             </Link>
//           </header>

//           <div className = "auth-form">
//               <form onSubmit={async (event) => {
//                 event.preventDefault();
//                 await handleSubmitLogin(values);
//                 history.push("/");
//                 }}>
//                 <label>
//                     <p>Email:</p>
//                     <input 
//                     type = "email"
//                     id = "email"
//                     name = "email"
//                     placeholder = "Email"
//                     required
//                     onChange = {handleChange}/>
//                 </label>
//                 <label>
//                     <p>Password:</p>
//                     <input 
//                     type = "password"
//                     id = "password"
//                     name = "password"
//                     placeholder = "Password"
//                     required
//                     onChange = {handleChange}/>
//                 </label>
//                 <button className = "signUpSubmit" type = "submit">Submit</button>
//                 </form>
//                 {error && error.message}
//           </div>
          
//         <div className="footer">
//           <ul>
//             <li>About us</li>
//             <li>Contact us</li>
//           </ul>
//         </div>
//         </div>
//         </div>
//     );
// }
