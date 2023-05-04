import React, { useEffect, useState } from 'react'
import "./descorder.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbarr from '../navbar/Navbarr'
import { AiFillWarning , AiFillCheckCircle} from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function DescOrder() {
    const userId = useParams().userIdOrder
    const orderId = useParams().orderId
    const [data, setData] = useState([])
    const [list, setList] = useState([])

    let listbrnad = JSON.parse(window.localStorage.getItem("listbrand"))

    useEffect(() => {
        axios.get(`http://localhost:8000/v1/order/getlogin/${userId}`)
            .then(value => {
                let A = value.data?.find(value => value._id == orderId)
                console.log(A);
                setData(A)
                setList(A.list)
            })
            .catch(value => {
                console.log(value);
            })
    }, [])
    return (
        <div>
            <Navbarr listbrnad={listbrnad}></Navbarr>
            <div className="descorder">
                {data.status == 'panding' ? <div className="desc__icon">
                    <AiFillWarning></AiFillWarning>
                </div> : <div className="desc__icon__1">
                            {data.status}
                </div>  }
                <h3>Thông tin đơn hàng</h3>
                <h4>MS: <p>{data._id}</p></h4>
                <h4>Tên người nhận: <p>{data.username}</p></h4>
                <h4>Địa chỉ nhận hàng: <p>{data.address}</p></h4>
                <h4>Số điện thoại người nhận: <p>{data.phonenumber}</p></h4>
                <h4>Thời gian đặt hàng: <p>{(new Date(data.date)).toLocaleDateString()}</p></h4>
                <h4>Đơn giá: <p>{data.totalprice?.toLocaleString('it-IT')} đ</p></h4>
                <h4>Tình trạng đơn hàng: <p>{data.status}</p></h4>
                <h4>Danh sách sẩn phẩm: </h4>
                <table className='tableStyle'>
                    <thead>
                        <tr>
                            <th>
                                STT
                            </th>
                            <th>
                                Sản phẩm
                            </th>
                            <th>
                                Giá
                            </th>
                            <th>
                                Số lượng
                            </th>
                            <th>
                                Thành tiền
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {list?.map((value, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className='procduct__desc'>
                                        <div className="img">
                                            <LazyLoadImage
                                                alt={value.productId.thumb.alt}
                                                effect="black-and-white"
                                                src={value.productId.thumb} />
                                            {/* <img src={value.productId.thumb} alt="" /> */}
                                        </div>
                                        <p>{value.productId.name}</p>
                                    </td>
                                    <td>{value.productId.price.toLocaleString('it-IT')}</td>
                                    <td>{value.quantity}</td>
                                    <td>{(value.productId.price * value.quantity).toLocaleString('it-IT')}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DescOrder