import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AboutUs from './components/pages/AboutUs';
import Categories from './components/pages/Categories';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/Categories' component = {Categories} />
        <Route path = '/SignUp' component = {SignUp} />
        <Route path = '/AboutUs' component = {AboutUs} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
