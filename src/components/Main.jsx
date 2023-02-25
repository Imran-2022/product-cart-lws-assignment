import React from 'react';
import CreateProducts from './CreateProducts';
import ProductContainer from './ProductContainer';

const Main = () => {
    return (
        <div>
            <main class="py-16">
                <div class="productWrapper">
                    <ProductContainer />
                    <CreateProducts />
                </div>
            </main>
        </div>
    );
};

export default Main;