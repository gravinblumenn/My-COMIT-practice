import React, {useState, useEffect} from 'react';
import {useUser} from "../components/UserProvider";
import {Link} from 'react-router-dom';

export default function SignUp(props) {
    useEffect(() => {
        document.title = "Sign Up";
    }, []);

    const {handleSubmitSignUp, error} = useUser();

    const [values, setValues] = useState({});

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");


    return (
            <div className = "body">
                <div className = "container">
                    <div className = 'user' >
                            <img src = "" alt = "profile" />
                            <p>Profile Name</p>
                        </div>
                            
                        <header>
                            <Link to = "/"><h1>General Store</h1></Link>
                        </header>



                    <div className = "auth-form">
                        <form action = "">
                        <label><p>Name:</p>
                            <input 
                            value = {name}
                            type = 'text' 
                            id = 'name'
                            name = 'name'
                            placeholder = 'Name'
                            autoFocus
                            onChange = {(event) => setName(event.target.value)}
                             />
                        </label>
                        <label><p>Age:</p>
                            <input 
                            value = {age}
                            type = 'number' 
                            id = 'age'
                            name = 'age'
                            placeholder = 'Age'
                            autoFocus
                            onChange = {(event) => setAge(event.target.value)}
                             />
                        </label>
                        <label><p>Email:</p>
                            <input 
                            value = {email}
                            type = 'email' 
                            id = 'email'
                            name = 'email'  
                            placeholder = 'Email'
                            autoFocus required
                            onChange = {(event) => setEmail(event.target.value)}
                             />
                        </label>
                        <label><p>Password:</p>
                            <input 
                            value = {password1}
                            type = 'password' 
                            id = "password1"
                            name = 'password' 
                            placeholder = "Password"
                            autoFocus required
                            onChange = {(event) => setPassword1(event.target.value)} />
                        </label>
                        <label><p>Confirm Password:</p>
                            <input 
                            value = {password2}
                            type = 'password' 
                            id = "password2"
                            name = 'password' 
                            placeholder = 'Confirm Password'
                            autoFocus required
                            onChange = {(event) => setPassword2(event.target.value)} />
                        </label>
                        <button 
                        className = "signUpSubmit" 
                        type = "submit"
                        disabled={!password1 || !password2 || password1 !== password2}
                        onClick = {(event) => handleSubmitSignUp(event, email, password1)}
                        >
                        Submit
                        </button>
                        {error && error.message}
                        </form>
                    </div>

                    <div className = 'footer'>
                            <ul>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                    </div>

                </div>
                {props.children}
            </div>
    )
}
