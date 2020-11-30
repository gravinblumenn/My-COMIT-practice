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

    const handleSubmitSignUp = async (event, values) => {
        event.preventDefault();
        try {
            const authUser = await createUserWithEmailAndPassword(values.email, values.password);
            delete values.password;
            const userData = addUser({...values, uid: authUser.user.uid });
            updateState(userData);
        } catch (error) {
            setCurrentError(error);
        }
    };

    return (
        <UserContext.Provier
            value = {{
                user,
                error: currentError,
                handleSubmitSignUp,

        }}>
            {props.children}
        </UserContext.Provier>
    );
}
