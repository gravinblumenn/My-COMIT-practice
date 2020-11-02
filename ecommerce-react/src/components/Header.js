import React from 'react'

export default function Header() {
    const isLoggedIn = false;
    
    return (
        <header className="page-header">
            <h1>Sports Store</h1>
            <button><a href="pages/signup.html">{isLoggedIn ? 'Log out' : 'Log in'}</a></button>
        </header>
    );
}


