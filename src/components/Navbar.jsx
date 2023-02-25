import React from 'react';
import logo from "../assets/logo.png"
import cart from "../assets/cart.svg"
import { useSelector } from 'react-redux';
const Navbar = ({ setPage }) => {

    const cart=useSelector(state=>state.cart.reduce((a,b)=>b.product_count+a,0))
    

    return (
        <div>
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <a href="index.html">
                        <img src={logo} alt="LWS" className="max-w-[140px]" />
                    </a>

                    <div className="flex gap-4">
                        <a href="#" className="navHome" id="lws-home" onClick={() => setPage('home')}> Home </a>
                        <a href="#" className="navCart" id="lws-cart" onClick={() => setPage('cart')}>
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">{cart|| 0}</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;