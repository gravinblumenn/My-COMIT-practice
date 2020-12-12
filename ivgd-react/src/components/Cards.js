import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className = 'cards'>
            <div className = 'cards-container'>
                <div className = 'cards-wrapper'>
                    <ul className = 'cards-items'>
                        <CardItem 
                            src = '../imgs/exampleIMG.jpg'
                            label = 'Game Categories'
                            text = 'This would be the title'
                            price = '$79.99'
                            starRate = '*****'
                            path = '/'
                        />
                        <CardItem 
                            src = '../imgs/exampleIMG.jpg'
                            label = 'Game Categories'
                            text = 'This would be the title'
                            price = '$79.99'
                            starRate = '*****'
                            path = '/'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
