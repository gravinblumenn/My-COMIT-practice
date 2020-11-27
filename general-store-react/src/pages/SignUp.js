import React from 'react';
import {Link} from 'react-router-dom';

export default function SignUp(props) {
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

                        <div className = 'cart'>
                            <button><img src = "" alt = "cart" /></button>
                    </div>

                    <div className = "auth-form">
                        <label><p>Name:</p>
                            <input type = 'name' name = 'name' />
                        </label>
                        <label><p>Date of Birth:</p>
                            <input type = 'date' name = 'dob' />
                        </label>
                        <label><p>Nationality:</p>
                            <input type = 'nationality' name = 'nationality' />
                        </label>
                        <label><p>Email:</p>
                            <input type = 'email' name = 'email'  required />
                        </label>
                        <label><p>Password:</p>
                            <input type = 'password' name = 'password' required />
                        </label>
                        <label><p>Confirm Password:</p>
                            <input type = 'password' name = 'password' required />
                        </label>
                        <button className = "signUpSubmit" type = "submit">Submit</button>
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
