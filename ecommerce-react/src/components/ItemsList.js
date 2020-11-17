import React, {useContext} from 'react';
import { ItemsContext } from './ItemsProvider';

export default function ItemsList(props) {
    const {items, handleAddToCartClick} = useContext(ItemsContext);
    
    // line 18 calls an arrow function(anonymous function) which is passed the props.handleAddToCartClick function
    return (
        <section className="items">
            <ul className="items-list">
                {items.map((item) => (
                    <li key = {item.name}>
                        <img src={item.image} alt="" />
                        <h3>{item.name}</h3>
                        <div>${item.price}</div>
                        <p>{item.description}</p>
                        <button className = "item" onClick = { () => handleAddToCartClick(item)}>
                            Add to Cart!
                        </button>
                    </li>
                )
                )}
            </ul>
        </section>
    );
}
