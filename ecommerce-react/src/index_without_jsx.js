import React from 'react';
import ReactDom from'react-dom'; //how to import in react

/* CREATING HTML to insert first argument is what type of element, second is setting ID/Class/etc, third argument is the content inside of the element type*/
const dish = React.createElement('h1', null, 'Baked Salmon' );

/* INSERTING first argument is the content being inserted and the second argument is where it will be insrted*/
ReactDom.render(dish, document.getElementById("root"));