import React from 'react';

export default function SignUp(props) {
    return (
            <div className = "body">
                <div className = "container">
                    <div className = 'user' >
                            <img src = "" alt = "profile" />
                            <p>Profile Name</p>
                            <button>Sign in</button>
                        </div>
                            
                        <header>
                            <h1>General Store</h1>
                        </header>

                        <div className = 'cart'>
                            <img src = "" alt = "cart" />
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
                            <input type = 'email' name = 'email' autofocus required />
                        </label>
                        <label><p>Password:</p>
                            <input type = 'password' name = 'password' required />
                        </label>
                        <label><p>Confirm Password:</p>
                            <input type = 'password' name = 'password' required />
                        </label>

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
