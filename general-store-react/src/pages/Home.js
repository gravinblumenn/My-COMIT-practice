import React from 'react';

export default function Home(props) {
    return (
        <div>
            <title>The General Store</title>
        <div className = "body">
            <div className = 'container'>
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
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
                        <li><img src = "" alt = "game" />Game title Game Price</li>
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
