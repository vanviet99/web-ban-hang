import React from 'react'
import './cart.css'
import Navbarr from '../navbar/Navbarr'
import Footer from '../footer/Footer'



function Cart() {
    return (
        <div>
            <Navbarr></Navbarr>
            <div className="Cart__content">
                <div className="Cart__content__left">
                    
                </div>
                <div className="Cart__content__right"></div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Cart