import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Categories from "./components/pages/Categories";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Profile from "./components/pages/Profile";
import SignUp from "./components/pages/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import CardsProvider from './contexts/CardsContext';
import PrivateRoute from "./components/pages/PrivateRoute";
import ForgotPassword from "./components/pages/ForgotPassword";
import UpdateProfile from "./components/pages/UpdateProfile";
import GamePage from './components/pages/GamePage';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <CardsProvider>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Categories" component={Categories} />
            <Route path="/SignUp" component={SignUp} />
            <PrivateRoute path="/Profile" component={Profile} />
            <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path= '/GamePage/:id' component = {GamePage} />
          </Switch>
          <Footer />
          </CardsProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
