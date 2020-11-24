import React, {createContext, useContext, useState} from 'react';
import {} from '../firebase/ItemRepository';

const ItemsContext = createContext();
export const useItems = () => useContext(ItemsContext);

export default function NotesProvider(props) {
    const [items, setItems] = useState([]);

    return (
        <ItemsContext.Provider value = {(
            items,
        )}>
            {props.children}
        </ItemsContext.Provider>
    );
}
