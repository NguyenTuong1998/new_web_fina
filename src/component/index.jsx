import React from 'react';
import { useState } from 'react';
import Header from './header';
import Banner from './banner';
import ProductItem from './product_items';
import Footer from './footer';

const App = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Banner />
            <ProductItem />
        </div>
    );
};

export default App;