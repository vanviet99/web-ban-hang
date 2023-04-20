import React from 'react'
import Table from 'react-bootstrap/Table';
import "./tablecp.css"
import { AiOutlineCloseCircle } from "react-icons/ai";



function Tablecp() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SẢN PHẨM</th>
                        <th>GIÁ</th>
                        <th>SỐ LƯỢNG</th>
                        <th>TẠM TÍNH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="cart__product">
                                <p><AiOutlineCloseCircle></AiOutlineCloseCircle></p>
                                <div className="cart__product__img">
                                    <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/qcxspevx_large-425x425.jpg" alt="" />
                                </div>
                                <div className="cart__product__name">
                                    Túi messenger khóa trái tim nạm đá DFJL
                                </div>
                            </div>
                        </td>
                        <td><p className='test1 price'>499000</p></td>
                        <td>
                            <div className="cart__amount">
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </div>
                        </td>
                        <td><p className='test1 price'>499000</p></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart__product">
                                <p><AiOutlineCloseCircle></AiOutlineCloseCircle></p>
                                <div className="cart__product__img">
                                    <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/qcxspevx_large-425x425.jpg" alt="" />
                                </div>
                                <div className="cart__product__name">
                                    Túi messenger khóa trái tim nạm đá DFJL
                                </div>
                            </div>
                        </td>
                        <td><p className='test1 price'>499000</p></td>
                        <td>
                            <div className="cart__amount">
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </div>
                        </td>
                        <td><p className='test1 price'>499000</p></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart__product">
                                <p><AiOutlineCloseCircle></AiOutlineCloseCircle></p>
                                <div className="cart__product__img">
                                    <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/qcxspevx_large-425x425.jpg" alt="" />
                                </div>
                                <div className="cart__product__name">
                                    Túi messenger khóa trái tim nạm đá DFJL
                                </div>
                            </div>
                        </td>
                        <td><p className='test1 price'>499000</p></td>
                        <td>
                            <div className="cart__amount">
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </div>
                        </td>
                        <td><p className='test1 price'>499000</p></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Tablecp