import React, {useState, createContext, useContext} from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "../firebase/auth";

import {
    getUser,
    addUser,
    addItemToCart,
    getCartItems,
  } from "../firebase/UserRepository";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export default function UserProvider(props) {

    const [user, setUser] = useState(null);
    const [currentError, setCurrentError] = useState(null);

    const updateState = (userData) => {
        setUser({
            ...userData,
        });
        setCurrentError(null);
    };

    const handleSubmitSignUp = async (event, email, password ) => {
        event.preventDefault();
        try {
            const authUser = await createUserWithEmailAndPassword(email, password);
            const userData = addUser({email, uid: authUser.user.uid });
            updateState(userData);
        } catch (error) {
            setCurrentError(error);
        }
    };

    return (
        <UserContext.Provider
            value = {{
                user,
                error: currentError,
                handleSubmitSignUp,

        }}>
            {props.children}
        </UserContext.Provider>
    );
}
