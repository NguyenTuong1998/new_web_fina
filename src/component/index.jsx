import React from 'react';
import { useState } from 'react';
import Banner from './banner';
import ProductItem from './product_items';
import Need from './Need';
import Procedure from './procedure';
import ATM from './ATM';

const App = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Banner />
            <ATM/>
            <div className='container'>
                <hr/>
            </div>
            <ProductItem />
            <div className='container'>
                <hr/>
            </div>
            <Need/>
            <Procedure/>
        </div>
    );
};

export default App;