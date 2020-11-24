import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; // this is important
import Layout from '../components/Layout';
import Home from "./Home";
import Login from "./Login";

export default function Pages() {
    return (
            <Router>
                <Layout>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "login" component = {Login}/>
                    <Route path = "signup" />
                    <Route path = "profile" />
                    <Route path = "notesfeed" />
                    <Route path = "create" />
                </Layout>
            </Router>
    )
}
