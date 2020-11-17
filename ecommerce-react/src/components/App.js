import React, { useState, useEffect, useMemo, useContext} from 'react';
import {orderBy} from 'lodash';
import axios from 'axios';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';

import Login from './Login';
import Header from './Header';
import Items from './Items';
import Footer from './Footer';
import {ItemsContext} from './ItemsProvider';

const SERVER_URL = "http://localhost:3000";


export default function App() {
    const history = useHistory();
    const {setItems, setItemCategories} = useContext(ItemsContext);
    const [itemFields, setItemFields] = useState([]);

    const [user, setUser] = useState({
        isLoggedIn: false,
        cart: [],
    });

    const [selectedSortField, setSelectedSortField] = useState('id');

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


        const handleSubmitLogIn = async (event, data) => {
            console.log(data.email);
            console.log(data.password);
            event.preventDefault();
            const updatedUser = {...user, isLoggedIn: !user.isLoggedIn};
            const response = await axios.put(`${SERVER_URL}/users/1`, updatedUser);
            if (response.status < 400) {
                setUser(updatedUser);
                history.push('/');
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



        const handleSelectSortField = (field) => {
            console.log(field);
            setSelectedSortField(field);
        };

    return (
        <div className="container">
            <Header isLoggedIn = {user.isLoggedIn} />

            <Switch>
                <Route 
                    path = "/items" 
                    render = {() => ( <Items />
                    )}>
                </Route>
                <Route 
                    path = "/login" 
                    render = { () => <Login 
                    handleSubmit = {handleSubmitLogIn}>
                    </Login>}></Route>
                    <Redirect to = "/items"/>
            </Switch>
            
            <Footer />
        </div>
    );
}
