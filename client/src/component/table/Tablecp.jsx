import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import "./tablecp.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios';



function Tablecp(props) {
    const listcartcurrent = props.listcartcurrent
    let userId = JSON.parse(window.localStorage.getItem("user"))._id
    const setlistcartcurrent = props.setlistcartcurrent
    const setBtnchange = props.setBtnchange
    const handleDelete = (productId) => {
        axios.post("http://localhost:8000/v1/cart/delete", { userId: userId, productId: productId })
            .then(value => {
                setlistcartcurrent(value.data[0].list)
                // setamount(value.data[0].list.length)
            })
            .catch(value => {
                console.log(value);
            })
    }

    let A = listcartcurrent ? [...listcartcurrent] : []
    const handleChange = (val, stock, productId) => {
        setBtnchange(true)
        let newlist  = listcartcurrent.map(value=>{
            if( value.productId._id ==productId ){
                if(val == 0 ){
                    if(value.quantity > 1){
                        value.quantity = value.quantity -1
                    }
                }else{
                    value.quantity = value.quantity +1
                }
            }
            return value
        })
        setlistcartcurrent(newlist)
    }
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
                    {A.map(value => {
                        return (
                            <tr>
                                <td>
                                    <div className="cart__product">
                                        <p onClick={() => { handleDelete(value.productId._id) }}><AiOutlineCloseCircle></AiOutlineCloseCircle></p>
                                        <div className="cart__product__img">
                                            <img src={value.productId.thumb} alt="" />
                                        </div>
                                        <div className="cart__product__name">
                                            {value.productId.name}
                                        </div>
                                    </div>
                                </td>
                                <td><p className='test1 price'>{value.productId.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p></td>
                                <td>
                                    <div className="cart__amount">
                                        <button onClick={() => { handleChange(0, value.productId.stock,value.productId._id ) }}>-</button>
                                        <button>{value.quantity}</button>
                                        <button onClick={() => { handleChange(1,value.productId.stock,value.productId._id ) }}>+</button>
                                    </div>
                                </td>
                                <td><p className='test1 price'>{(value.productId.price * value.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Tablecp