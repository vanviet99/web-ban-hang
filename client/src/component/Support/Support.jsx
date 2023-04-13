import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillCar,AiFillGift ,AiTwotoneStar} from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import suport from './suport.css'
function Support() {
  return (
    <Container className='mt50'>
      <Row className='support'>
        <Col className='support_list'>
            <div className="support_icon">
                <AiFillCar></AiFillCar>
            </div>
            <div className="support_title">
                <span className='support_span'></span>
                <div className="support_title-heading">Miễn phí giao hàng</div>
                <div className="support_title-title">Nhận hàng trong vòng 3 ngày</div>
            </div>
        </Col>
        <Col className='support_list'><div className="support_icon">
                <AiFillGift></AiFillGift>
            </div>
            <div className="support_title">
            <span className='support_span'></span>
                <div className="support_title-heading">Quà tặng</div>
                <div className="support_title-title">Nhiều quà tặng hấp dẫn</div>
            </div></Col>
        <Col className='support_list'>
        <div className="support_icon">
                <AiTwotoneStar></AiTwotoneStar>
            </div>
            <div className="support_title">
            <span className='support_span'></span>
                <div className="support_title-heading">Bảo đảm chất lượng</div>
                <div className="support_title-title">Sản phẩm đã dược kiểm định</div>
            </div>
        </Col>
        <Col className='support_list'>
        <div className="support_icon">
                <BiSupport></BiSupport>
            </div>
            <div className="support_title">
            <span className='support_span'></span>
                <div className="support_title-heading">0899 355 377</div>
                <div className="support_title-title">Dịch vụ hỗ trợ bạn 24/7</div>
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Support