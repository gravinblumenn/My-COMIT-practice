import React from 'react';
import ReactDom from'react-dom'; 

import "./styles/app.css";

import App from './components/App';

/* this is not common practice where you copy and paste raw html*/


ReactDom.render(<App />, document.getElementById("root"));