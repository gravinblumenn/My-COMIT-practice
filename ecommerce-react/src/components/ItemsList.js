import React from 'react'



export default function ItemsList(props) {
    const {items, buttonText } = props;
    
    return (
        <section className="items">
            <ul className="items-list">
                {items.map((item) => (
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
