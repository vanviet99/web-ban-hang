import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminChart from '../AdminChart/AdminChart';
import './admonproduct.css'
import Producttable from '../ProductTable/Producttable';
import { notification } from 'antd';
import axios from 'axios';
function Adminproduct() {
  const [checkeditadmproduct, setCheckeditadmproduct] = useState(true)
  const [listProduct, setListProduct]= useState([])
  const handleAddproduct = () => {
    console.log();
    let name = document.querySelector('.name').value
    let price = document.querySelector('.price').value
    let stock = document.querySelector('.stock').value
    let sale = document.querySelector('.sale').value
    let thumb = document.querySelector('.thumb').value
    let desc = document.querySelector('.desc').value
    let brand = document.querySelector('.brand').value

    if (name && price && stock && sale && thumb && desc && brand) {
      let A = { name, price, stock, sale, thumb, desc,brand }
      axios.post('http://localhost:8000/v1/product/create', A)
        .then(value => {
          openNotificationWithIcon('success', "Thêm sản phẩm hoàn tất")
          setListProduct(value.data)
        })
        .catch(value => {
          console.log(value);
        })
    } else {
      openNotificationWithIcon('error', "Hãy điền đầy đủ thông tin")
    }

  }

  const handleEdit=()=>{

  }
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, mes) => {
    api[type]({
      message: mes,
      // description:
      //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <div className="adminproduct_product">
      {contextHolder}
      <Row>
        <Producttable listProduct={listProduct} setCheckeditadmproduct={setCheckeditadmproduct}></Producttable>
      </Row>
      <Row>
        {/* <Col lg={4} className='adminchartchart'>
          <AdminChart></AdminChart>
        </Col> */}
        <Col lg={8} className='adminformform'>
          <form className='adminproduct_form'>
            <div className="adminproduct_flex adminproduct_flex1">
              <label className='adminproduct_lable'>Name:</label>
              <input type='text' required className='adminproduct_input name'></input>
              <label className='adminproduct_lable'>Brand:</label>
              <input type='text' required className='adminproduct_input brand'></input>
              <label className='adminproduct_lable'>Price:</label>
              <input type='number' required className='adminproduct_input price'></input>
            </div>
            <div className="adminproduct_flex ">
              <label className='adminproduct_lable'>Sale:</label>
              <input type='number' required className='adminproduct_input sale'></input>
              <label className='adminproduct_lable'>Stock:</label>
              <input type='number' required className='adminproduct_input stock'></input></div>
            <label className='adminproduct_lable' >Thumb</label>
            <input type='text' required className='adminproduct_input thumb'></input>
            <label className='adminproduct_lable'>Description</label>
            <textarea required className='adminproduct_input adminproduct_textara desc'></textarea >
          </form>
          {checkeditadmproduct ? <button onClick={handleAddproduct} className="adminproduct_input__btn"><span>Add to Cart</span></button> : <button onClick={handleEdit} className="adminproduct_input__btn edit"><span>Edit to Cart</span></button>}
        </Col>
      </Row>
     
    </div>


  )
}

export default Adminproduct

