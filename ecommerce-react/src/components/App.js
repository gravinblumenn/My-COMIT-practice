import React, { useState} from 'react'
import {orderBy} from 'lodash'

import Header from './Header';
import ItemCategories from './ItemCategories';
import ItemsList from './ItemsList';
import Footer from './Footer';

import { getItems, getItemFields } from '../data';

export default function App() {
    const [user, setUser] = useState({
        isLoggedIn: false,
        cart: [],

    });

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSortField, setSelectedSortField] = useState('id')

    const items = getItems();
    const itemFields = getItemFields();

        /* looking at the value of isLoggedIn, based on the value, the function setIsLoggedIn, changes the variable IsLoggedIn */
        const handleLogInClick = () => {
            setUser({...user, isLoggedIn: !user.isLoggedIn}); //using spread operator because we cannot update the original DOM
        };

        const handleAddToCartClick = (item) => {
            console.log(item);
            const updatedCart = [...user.cart, item]
            setUser({...user, cart: updatedCart});
        };

        const handleSelectCategory = (category) => {
            console.log(category);
            setSelectedCategory(category);
        };

        const handleSelectSortField = (field) => {
            console.log(field);
            setSelectedSortField(field);
        };

        const getItemsToDisplay = () => {
            const filteredItems =  items.filter(
                (item) => 
                selectedCategory === "all" || item.category === selectedCategory);
                return orderBy (filteredItems, selectedSortField, "asc");
        };


    return (
        <div className="container">
            <Header isLoggedIn = {user.isLoggedIn} handleClick = {handleLogInClick} />
            <ItemCategories handleSelectCategory = {handleSelectCategory}/>
            <ItemsList items={getItemsToDisplay()} handleAddToCartClick = {handleAddToCartClick} />
            <Footer />
        </div>
    );
}
