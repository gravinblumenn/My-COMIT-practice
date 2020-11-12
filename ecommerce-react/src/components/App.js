import React, { useState, useEffect, useMemo} from 'react';
import {orderBy} from 'lodash';
import axios from 'axios';

import Login from './Login';
import Header from './Header';
import Items from './Items';
import Footer from './Footer';

const SERVER_URL = "http://localhost:3000";

export default function App() {
    const [items, setItems] = useState([]);
    const [itemFields, setItemFields] = useState([]);
    const [itemCategories, setItemCategories] = useState([]);

    const [user, setUser] = useState({
        isLoggedIn: false,
        cart: [],

    });

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSortField, setSelectedSortField] = useState('id');
    const [currentPage, setCurrentPage] = useState('items');

    useEffect(() => {
        const getItems = async () => {
            //axios methods are asyncronous methods and it must be specified as such inorder to use await
            const response = await axios.get(`${SERVER_URL}/items`);// await lets you use asyncronous coding in a syncronious way, but letting the js runtime continue while it gathers the data
            setItems(response.data);
        };
        const getItemFields = async () => {
            const response = await axios.get(`${SERVER_URL}/itemFields`);
            setItemFields(response.data);
        };
        const getItemCategories = async () => {
            const response = await axios.get(`${SERVER_URL}/itemCategories`);
            setItemCategories(response.data);
        };
        getItems();
        getItemFields();
        getItemCategories();
    }, []);

    const itemsToDisplay = useMemo(() => {
        console.log('getting items to display');
        const filteredItems =  items.filter(
            (item) => 
            selectedCategory === "all" || item.category === selectedCategory);
            return orderBy (filteredItems, selectedSortField, "asc");
    }, [items, selectedCategory, selectedSortField]);

        const handleLoginPageClick = () => {
            if (currentPage === 'items') {
                setCurrentPage('login');
            }else {
                setCurrentPage('items');
            }
        }

        const handleSubmitLogIn = async (event, data) => {
            console.log(data.email);
            console.log(data.password);
            event.preventDefault();
            const updatedUser = {...user, isLoggedIn: !user.isLoggedIn};
            const response = await axios.put(`${SERVER_URL}/users/1`, updatedUser);
            if (response.status < 400) {
                setUser(updatedUser);
                setCurrentPage('items');
            } else {
                console.log(response);
            }
        };

        const handleAddToCartClick = async (item) => {
            const updatedCart = [...user.cart, item];
            const updatedUser = {...user, cart: updatedCart};
            const response = await axios.put(`${SERVER_URL}/users/1`, updatedUser);
            if (response.status < 400) {
                setUser(updatedUser);
            } else {
                console.log(response);
            }
            console.log(user.cart);
        };

        const handleSelectCategory = (category) => {
            console.log(category);
            setSelectedCategory(category);
        };

        const handleSelectSortField = (field) => {
            console.log(field);
            setSelectedSortField(field);
        };

    return (
        <div className="container">
            <Header currentPage = {currentPage} isLoggedIn = {user.isLoggedIn} handleClick = {handleLoginPageClick} />
            {currentPage === "items" ? (
            <Items 
                categories = {itemCategories} 
                handleSelectCategory = {handleSelectCategory}
                items = {itemsToDisplay} 
                handleAddToCart = {handleAddToCartClick} />
            ) : (
                <Login handleSubmit = {handleSubmitLogIn}/>
            )}
            <Footer />
        </div>
    );
}
