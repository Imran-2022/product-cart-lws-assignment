import React from 'react';
import logo from "../assets/logo.png"
import cart from "../assets/cart.svg"
const Navbar = ({setPage}) => {
    return (
        <div>
            <nav class="bg-[#171C2A] py-4">
                <div class="navBar">
                    <a href="index.html">
                        <img src={logo} alt="LWS" class="max-w-[140px]" />
                    </a>

                    <div class="flex gap-4">
                        <a href="#" class="navHome" id="lws-home" onClick={()=>setPage('home')}> Home </a>
                        <a href="#" class="navCart" id="lws-cart"  onClick={()=>setPage('cart')}>
                            <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">0</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;