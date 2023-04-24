import React, { useEffect, useState } from 'react'
import "./myorder.css"
import Navbarr from '../navbar/Navbarr'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


function Myorder() {
    let listbrnad = JSON.parse(window.localStorage.getItem("listbrand"))
    const [data, setData] = useState([])
    const userId = useParams().userIdOrder


    useEffect(() => {
        axios.get(`http://localhost:8000/v1/order/getlogin/${userId}`)
            .then(value => {
                console.log(value.data);
                setData(value.data.reverse())
            })
            .catch(value => {
                console.log(value);
            })
    }, [])
    return (
        <div>
            <Navbarr listbrnad={listbrnad} ></Navbarr>
            <div className="pay__block">
                <h3 >Danh sách đơn hàng</h3>
                <table className='pay__block__table tableStyle'>
                    <thead>
                        <tr>
                            <th> Mã đơn hàng</th>
                            <th>Thời gian</th>
                            <th>Tên người nhận</th>
                            <th>Địa chỉ nhận hàng</th>
                            <th>Tổng giá</th>
                            <th>Tình trạng</th>
                            <th>Chi tiết</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(value => {
                            return (
                                <tr>
                                    <td>{value?._id}</td>
                                    <td>{(new Date(value.date)).toLocaleTimeString()} - {(new Date(value.date)).toLocaleDateString()}</td>
                                    <td>{value.username}</td>
                                    <td>{value.address}</td>
                                    <td>{(value.totalprice)?.toLocaleString('it-IT')} đ</td>
                                    <th>{value.status}</th>
                                    <td> <Link to={`/order/${userId}/${value?._id}`}> Chi tiết đơn hàng</Link></td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Myorder