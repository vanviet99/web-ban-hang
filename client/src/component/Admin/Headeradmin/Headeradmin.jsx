import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './headeradmin.css'
function Headeradmin() {

  return (
    <Row className='headeradmin'>
        <Col lg={3}>
        <div class="wrapper">
  <div class="bg"> VT Shop </div>
  <div class="fg">  VT Shop  </div>
</div>
        </Col>
        <Col lg={2}>
        <div className="content">
  <div className="content__container">
    <p className="content__container__text">
      Hello
    </p>
    
    <ul className="content__container__list">
      <li className="content__container__list__item">world !</li>
      <li className="content__container__list__item">bob !</li>
      <li className="content__container__list__item">users !</li>
      <li className="content__container__list__item">everybody !</li>
    </ul>
  </div>
  </div>
        </Col>
        <Col lg={7}>
        <div className="navadmin_header-icon">
            <IoIosNotifications className='navadmin_icon'></IoIosNotifications>
            <span>0</span>
          </div>
        </Col>
    </Row>
  )
}

export default Headeradmin