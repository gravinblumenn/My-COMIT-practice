import React from 'react'

import Header from './Header';
import ItemCategories from './ItemCategories';
import ItemsList from './ItemsList';
import Footer from './Footer';

import { getItems } from '../data';

export default function App() {


    const items = getItems();

    return (
        <div className="container">
            <Header />
            <ItemCategories />
            <ItemsList items={items} buttonText = {"Add to Cart!"} />
            <Footer />
        </div>
    );
}
