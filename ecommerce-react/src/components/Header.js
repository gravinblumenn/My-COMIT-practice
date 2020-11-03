import React, {useState} from 'react'

export default function Header(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    /* looking at the value of isLoggedIn, based on the value, the function setIsLoggedIn, changes the variable IsLoggedIn */
    const handleOnClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <header className="page-header">
            <h1>Sports Store</h1>
            <button onClick = {handleOnClick}>{isLoggedIn ? 'Log out' : 'Log in'}</button>
        </header>
    );
}


