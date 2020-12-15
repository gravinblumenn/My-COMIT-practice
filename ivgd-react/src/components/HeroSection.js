import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {useAuth} from '../contexts/AuthContext';

function HeroSection() {
    // const {currentUser} = useAuth(); get IsLoggedIn working to display name after welcome
    return (
        <div className = "hero-container">
            <div className = "hero-text">
                <p>Welcome {/*currentUser.email*/}!</p>
                {/* <Button className = "btns" buttonStyle = "btn--outline" buttonSize = "btn--large">
                    Gaming Awaits
                </Button> */}
            </div>
        </div>
    )
}

export default HeroSection
