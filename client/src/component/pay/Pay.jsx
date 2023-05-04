import React, { useEffect, useRef, useState } from 'react'
import "./pay.css"
import Navbarr from '../navbar/Navbarr'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../footer/Footer'
import { notification, Space } from 'antd';



function Pay() {
    const username = useRef()
    const phonenumber = useRef()
    const address = useRef()
    const email = useRef()
    let listbrnad = JSON.parse(window.localStorage.getItem("listbrand"))
    const [data, setData] = useState([])
    const[loadingtb, setLoadingtb] = useState(true)
    const userId = useParams().userId
    useEffect(() => {
        axios.get(`http://localhost:8000/v1/cart/get/${userId}`)
            .then(value => {
                setData([...value.data[0].list])
                setLoadingtb(false)
            })
            .catch(value => {
                console.log(value);
            })
    }, [])
    let totalprice = 0
    data?.map(value => {
        totalprice += value.productId.price * value.quantity
    })
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function validatephonenumber(pw) {
        return /[0-9]/.test(pw) &&
            pw.length == 10;
    }
    function validateusername(pw) {
        return pw.length > 4;
    }
    function validateaddress(pw) {
        return /[a-z]/.test(pw) &&
            pw.length > 4;
    }

    const nav = useNavigate()
    const handleOrder = () => {
        if (validateusername(username.current.value)) {
            if (validateaddress(address.current.value)) {
                if (validatephonenumber(phonenumber.current.value)) {
                    if (validateEmail(email.current.value)) {
                        axios.post("http://localhost:8000/v1/order/create", { userId: userId, list: data, username: username.current.value, address: address.current.value, totalprice: totalprice, phonenumber: phonenumber.current.value })
                        .then(value=>{
                            nav(`/order/${userId}`)
                            openNotificationWithIcon('success', "Đơn hàng đang trong quá trình duyệt")
                        })
                        .catch(value=>{
                            openNotificationWithIcon('warning', "Đã xảy ra lỗi ")
                        })
                    } else {
                        openNotificationWithIcon('warning', "Vui lòng nhập Email")
                    }
                } else {
            openNotificationWithIcon('warning', "Vui lòng nhập số điện thoại")
                }
            } else {
            openNotificationWithIcon('warning', "Vui lòng nhập địa chỉ")
            }
        } else {
            openNotificationWithIcon('warning', "Vui lòng nhập họ tên")
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

            <Navbarr listbrnad={listbrnad} dataCart={data}></Navbarr>
            <div className="payblock">
                <div className="payblock__left">
                    <h3>Thông tin thanh toán</h3>
                    <div className="payblock__left__input">
                        <p>Họ và tên*</p>
                        <input ref={username} type="text" />
                    </div>
                    <div className="payblock__left__input">
                        <p>Địa chỉ*</p>
                        <input ref={address} type="text" />
                    </div>
                    <div className="payblock__left__input">
                        <p>Số điện thoại*</p>
                        <input ref={phonenumber} type="number" />
                    </div>
                    <div className="payblock__left__input">
                        <p>Email*</p>
                        <input ref={email} type="text" />
                    </div>
                </div>
                <div className="payblock__right">
                    <h4>Đơn hàng của bạn</h4>
                    <table className='payblock__table'>
                        <thead>
                            <tr className='payblock__table__tr'>
                                <th className='payblock__table__th'>SẢN PHẨM</th>
                                <th className='payblock__table__th test12'>TẠM TÍNH</th>
                            </tr>
                        </thead>
                        {loadingtb ?
                        <div class="loader posi"></div>:
                        <tbody>
                            {data?.map(value => {
                                return (
                                    <tr className='payblock__table__tr'>
                                        <td>{value.productId.name} x {value.quantity}</td>
                                        <td className='payblock__price test12'>{(value.quantity * value.productId.price).toLocaleString('it-IT')} đ</td>
                                    </tr>
                                )
                            })}
                            <tr className='test123 payblock__table__tr'>
                                <td className='totlepay'>Tạm tính</td>
                                <td className='payblock__price '>{totalprice.toLocaleString('it-IT')} đ</td>
                            </tr>
                            <tr className='payblock__table__tr'>
                                <td className='totlepay'>Tổng</td>
                                <td className='payblock__price test12'>{totalprice.toLocaleString('it-IT')} đ</td>
                            </tr>
                        </tbody>
                        }
                    </table>
                    <p>Trả tiền mặt khi nhận hàng</p>
                    <button onClick={handleOrder}>ĐẶT HÀNG</button>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Pay