// import React, {useState, createContext, useContext} from 'react';

// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
// } from "../firebase/auth";

// import {
//     getUser,
//     addUser,
//     addItemToCart,
//     getCartItems,
//   } from "../firebase/UserRepository";

// export const UserContext = createContext();
// export const useUser = () => useContext(UserContext);

// export default function UserProvider(props) {

//     const [user, setUser] = useState(null);
//     const [currentError, setCurrentError] = useState(null);

//     const updateState = (userData) => {
//         setUser({
//             ...userData,
//         });
//         setCurrentError(null);
//     };

//     const handleSubmitSignUp = async (values) => {
//         try {
//             const authUser = await createUserWithEmailAndPassword(values.email, values.password);
//             delete values.password;
//             const userData = addUser({...values, uid: authUser.user.uid });
//             updateState(userData);
//         } catch (error) {
//             setCurrentError(error);
//         }
//     };

//     const handleSubmitLogin = async (values) => {
//         try {
//             const authUser = await signInWithEmailAndPassword( values.email, values.password);
//             const userData = await getUser( authUser.user.uid);
//             updateState(userData);
//         } catch(error) {
//             setCurrentError(error);
//         }
//     };

//     return (
//         <UserContext.Provider
//             value = {{
//                 user,
//                 error: currentError,
//                 handleSubmitSignUp,
//                 handleSubmitLogin,

//         }}>
//             {props.children}
//         </UserContext.Provider>
//     );
// }
