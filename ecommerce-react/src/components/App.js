import React, { useState} from 'react'

import Header from './Header';
import ItemCategories from './ItemCategories';
import ItemsList from './ItemsList';
import Footer from './Footer';

import { getItems } from '../data';

export default function App() {
    const [user, setUser] = useState({
        isLoggedIn: false,
        cart: [],

    });
    const items = getItems();

        /* looking at the value of isLoggedIn, based on the value, the function setIsLoggedIn, changes the variable IsLoggedIn */
        const handleLogInClick = () => {
            setUser({...user, isLoggedIn: !user.isLoggedIn}); //using spread operator because we cannot update the original DOM
        }

        const handleAddToCartClick = (item) => {
            console.log(item);
            const updatedCart = [...user.cart, item]
            setUser({...user, cart: updatedCart});
        }

    return (
        <div className="container">
            <Header isLoggedIn = {user.isLoggedIn} handleClick = {handleLogInClick} />
            <ItemCategories />
            <ItemsList items={items} handleAddToCartClick = {handleAddToCartClick} />
            <Footer />
        </div>
    );
}
