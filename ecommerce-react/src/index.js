import React from 'react';
import ReactDom from'react-dom'; 
import { BrowserRouter as Router} from 'react-router-dom';

import "./styles/app.css";

import App from './components/App';
import ItemsProvider from "./components/ItemsProvider";

ReactDom.render(
<ItemsProvider>
<Router>
    <App />
</Router>
</ItemsProvider>,
 document.getElementById("root"));