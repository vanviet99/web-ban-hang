import React, { useEffect, useState } from 'react'
import './cart.css'
import Navbarr from '../navbar/Navbarr'
import Footer from '../footer/Footer'
import Tablecp from '../table/Tablecp'
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {  notification, Space } from 'antd';



function Cart() {
    let listbrnad = JSON.parse(window.localStorage.getItem("listbrand"))
    const [btnchange, setBtnchange] = useState(false)
    const [loadings, setLoadings] = useState(true)
    const [listcartcurrent, setlistcartcurrent] = useState([])
    const userId = useParams().cartId
    useEffect(() => {
        axios.get(`http://localhost:8000/v1/cart/get/${userId}`)
            .then(value => {
                setLoadings(false)
                setlistcartcurrent(value.data[0].list)
            })
            .catch(value => {
                console.log(value);
            })
    }, [])
    let totalprice = 0
    listcartcurrent?.map(value => {
        totalprice += value.productId.price * value.quantity
    })

    const nav = useNavigate()
    const handleBack = () => {
        nav("/")
    }

    const handleUpdate = () => {
        axios.post("http://localhost:8000/v1/cart/updatenewCart", { userId: userId, listcart: listcartcurrent })
            .then(value => {
                openNotificationWithIcon('success', 'Cập nhật thành công')
                setlistcartcurrent(value.data[0].list)
                setBtnchange(false)
            })
            .catch(value => {
                console.log(value);
            })
    }

    const handlePay =()=>{
        if(!btnchange){
            nav(`/pay/${userId}`)
        }else{
            openNotificationWithIcon('warning', "Bạn chưa xác nhận cập nhật")
        }
    }
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type,mes) => {
        api[type]({
            message: mes,
            // description:
            //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };
    return (
        <div>
            {contextHolder}
            <Navbarr dataCart={listcartcurrent} listbrnad={listbrnad}></Navbarr>
            <div className="Cart__content">
                <div className="Cart__content__left">
                    {loadings? <div class="loader posi"></div>:
                    <>
                    <Tablecp setBtnchange={setBtnchange} setlistcartcurrent={setlistcartcurrent} listcartcurrent={listcartcurrent}></Tablecp>
                    <div className="Cart__content__left__btn">
                        <button onClick={handleBack}> <AiOutlineArrowLeft></AiOutlineArrowLeft>TIẾP TỤC XEM SẢN PHẨM</button>
                        {btnchange ? <button onClick={handleUpdate}>CẬP NHẬT GIỎ HÀNG</button> : ''}

                    </div>
                    </>
                     }
                </div>
                <div className="Cart__content__right">
                    <div className="Cart__content__right__title">
                        CỘNG GIỎ HÀNG
                    </div>
                    <div className="Cart__content__right__price">
                        <p>Tạm tính</p> <span>{totalprice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <div className="Cart__content__right__price">
                        <p>Tổng</p> <span>{totalprice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <button onClick={handlePay}>TIẾN HÀNH THANH TOÁN</button>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Cart