import React from 'react'



export default function ItemsList(props) {
    const sportsItems = props.sportsItems;
    const buttonText = props.buttontext;
    
    return (
        <section className="items">
            <ul className="items-list">
                {sportsItems.map((item) => (
                    <li key = {item.name}>
                        <img src={item.image} alt="" />
                        <h3>{item.name}</h3>
                        <div>${item.price}</div>
                        <p>{item.description}</p>
                        <button className = "item">{buttonText}</button>
                    </li>
                )
                )}
            </ul>
        </section>
    );
}
