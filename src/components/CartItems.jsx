import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementCartItem, deleteFromCart, incrementCartItem } from '../redux/cart/actions';
import { decrementQuantity, incrementQuantity, quantityChange_cartDelete } from '../redux/product/actions';

const CartItems = ({ dt }) => {
    const { product_id, product_name, product_category, product_image_url, product_price, product_quantity, product_count } = dt;

    const dispatch = useDispatch();

    const handleQuantityIncre = () => {
        dispatch(decrementQuantity(product_id))
        dispatch(incrementCartItem(product_id))
    }
    const handleQuantityDecre = () => {
        dispatch(incrementQuantity(product_id))
        dispatch(decrementCartItem(product_id))
    }

    const handleRemoveFromCart=()=>{
        dispatch(deleteFromCart(product_id))
        dispatch(quantityChange_cartDelete({
            product_id,product_count
        }))
    }

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img className="lws-cartImage" src={product_image_url} alt="product" />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">{product_name}</h4>
                    <p className="lws-cartCategory">{product_category}</p>
                    <p>BDT <span className="lws-cartPrice">{product_price}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity" onClick={handleQuantityIncre}>
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">{product_count}</span>
                    <button className="lws-decrementQuantity" onClick={handleQuantityDecre }>
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{product_price * product_count}</span></p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart" onClick={handleRemoveFromCart}>
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default CartItems;