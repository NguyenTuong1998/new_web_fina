import React from 'react';
import { useState } from 'react';
import Header from './header';
import Banner from './banner';
import ProductItem from './product_items';
import Footer from './footer';
import Need from './Need';
import Procedure from './procedure';

const App = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Banner />
            <ProductItem />
            <Need/>
            <Procedure/>
        </div>
    );
};

export default App;