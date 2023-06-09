import React from 'react';
import { useSelector } from 'react-redux';
import CreateProducts from './CreateProducts';
import ProductContainer from './ProductContainer';

const Main = () => {

    const product = useSelector(store => store.products)
    console.log(product);

    return (
        <div>
            <main className="py-16">
                <div className="productWrapper">
                    <div className="productContainer" id="lws-productContainer">

                        {
                            product?.map(dt => <ProductContainer dt={dt} key={dt.product_id} />)
                        }
                    </div>
                    <CreateProducts />
                </div>
            </main>
        </div>
    );
};

export default Main;