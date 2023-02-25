import React from 'react';
import { useSelector } from 'react-redux';
import BillingsDetails from './BillingsDetails';
import CartItems from './CartItems';

const Cart = () => {
    const cart=useSelector(state=>state.cart)

    const totalCost = cart.reduce((dt,x)=>{
        return (x.product_count*x.product_price)+dt
    },0)

    console.log(totalCost);

    return (
        <div>
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <div className="space-y-6">
                            {
                                cart?.map(dt=><CartItems dt={dt} key={dt.product_id} />)
                            }
                        </div>
                        <BillingsDetails bill={totalCost} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;