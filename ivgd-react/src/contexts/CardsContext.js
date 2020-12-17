import React, { createContext, useContext, useState, useEffect } from "react";

const CardContext = createContext();

export function useCards() {
    return useContext(CardContext);
}

export function CardsProvider() {
    const [src, setSrc] = useState();
    const [label, setLabel] = useState();
    const [text, setText] = useState();
    const [rating, setRating] = useState();
    const [path, setPath] = useState();


    return (
        <div>
            
        </div>
    )
}

export default CardsProvider;

