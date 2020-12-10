import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Home(props) {
    useEffect(() => {
        document.title = "The General Store";
    }, []);
    
    return (
        <div>
            <title>The General Store</title>
        <div className = "body">
            <div className = 'container'>
                <div className = 'user' >
                    <img src = "" alt = "profile" />
                    <p>Profile Name</p>
                    <Link to = "/SignUp"><button>Sign Up</button></Link>
                    <Link to = "/Login"><button>Log In</button></Link>
                </div>
                    
                <header>
                    <Link to = "/"><h1>General Store</h1></Link>
                </header>

                <div className = 'cart'>
                    <button><img src = "" alt = "cart" /></button>
                </div>

                <div className = 'categories'>
                    <ul>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>MMORPG</li>
                        <li>Puzzle</li>
                        <li>RPG</li>
                        <li>Racing/Driving</li>
                        <li>Shooter</li>
                        <li>Space</li>
                    </ul>
                </div>

                <div>
                    <ul className = 'items-list'>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                        <li>Game title Game Price<button>Add to Cart</button></li>
                    </ul>
                </div>

                <div className = 'system-categories'>
                    <ul>
                        <li>Playstation</li>
                        <li>Xbox</li>
                        <li>PC</li>
                        <li>Switch</li>
                        <li>DS</li>
                        <li>Wii</li>
                    </ul>
                </div>

                <div className = 'footer'>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </div>

            </div>
        </div>
            {props.children}
        </div>
    )
}
