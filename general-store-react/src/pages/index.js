import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; // this is important
import Home from "./Home";
import Layout from "../components/Layout";
import SignUp from "./SignUp";
import LogIn from './LogIn';


export default function Pages() {
    return (
        <Router>
                <Layout>
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/SignUp" component = {SignUp}/>
                    <Route path = "/Login" component = {LogIn} />
                </Layout>
        </Router>
    )
}
