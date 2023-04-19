import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminChart from '../AdminChart/AdminChart';
import './admonproduct.css'
import Producttable from '../ProductTable/Producttable';
function Adminproduct() {
  const [checkeditadmproduct,setCheckeditadmproduct] = useState(true)
  return (
<div className="adminproduct_product">
<Row>
      <Col lg={4} className='adminchartchart'>
        <AdminChart></AdminChart>
      </Col>
      <Col lg={8} className='adminformform'>
        <form className='adminproduct_form'>
         <div className="adminproduct_flex">
         <label className='adminproduct_lable'>Name:</label>
          <input type='text' required className='adminproduct_input'></input>
          <label className='adminproduct_lable'>Quantity:</label>
          <input type='number' required className='adminproduct_input'></input>
         </div>
         <div className="adminproduct_flex"> <label className='adminproduct_lable'>Sale:</label>
          <input type='number' required className='adminproduct_input'></input>
          <label className='adminproduct_lable'>Stock:</label>
          <input type='number' required className='adminproduct_input'></input></div>
          <label className='adminproduct_lable' >Thumb</label>
          <input type='text' required className='adminproduct_input'></input>
          <label className='adminproduct_lable'>Description</label>
          <textarea  required className='adminproduct_input adminproduct_textara'></textarea >
          {checkeditadmproduct ?  <button className="snip1547"><span>Add to Cart</span></button> : <button className="snip1547"><span>Edit to Cart</span></button> }
        </form>
      </Col>
    </Row>
    <Row>
      <Producttable checkeditadmproduct={checkeditadmproduct}></Producttable>
    </Row>
</div>
    
    
  )
}

export default Adminproduct

