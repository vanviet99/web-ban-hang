import React from 'react'
import './cart.css'
import Navbarr from '../navbar/Navbarr'
import Footer from '../footer/Footer'
import Tablecp from '../table/Tablecp'
import { AiOutlineArrowLeft } from "react-icons/ai";



function Cart() {
    return (
        <div>
            <Navbarr></Navbarr>
            <div className="Cart__content">
                <div className="Cart__content__left">
                    <Tablecp></Tablecp>
                    <div className="Cart__content__left__btn">
                        <button> <AiOutlineArrowLeft></AiOutlineArrowLeft>TIẾP TỤC XEM SẢN PHẨM</button>
                        <button>CẬP NHẬT GIỎ HÀNG</button>

                    </div>
                </div>
                <div className="Cart__content__right">
                    <div className="Cart__content__right__title">
                        CỘNG GIỎ HÀNG
                    </div>
                    <div className="Cart__content__right__price">
                        <p>Tạm tính</p> <span>499000</span>
                    </div>
                    <div className="Cart__content__right__price">
                        <p>Tổng</p> <span>499000</span>
                    </div>
                <button>TIẾN HÀNH THANH TOÁN</button>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Cart