import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import   './footer.css'
function Footer() {
  return (
   <Container fluid className='footer'>
    <Row>
        <Col lg={3}>
            <div className="footer-heading">
                <h4>HOTLINE: 028.33.344.555</h4>
            </div>
            <ul className='footer-ul'>
                <li>Chính sách bảo mật của K&K Fashion</li>
                <li>Thời trang nữ - Thời trang công sở K&K Fashion 2019</li>
                <li>® Bản quyền thuộc thời trang K&K Fashion</li>
                <li>Powered by SAGO</li>
            </ul>
        </Col>
        <Col lg={3}>
            <div className="footer-heading">
                <h4>THÔNG TIN LIÊN HỆ</h4>
            </div>
            <ul className='footer-ul'>
                <li>Trang chủ</li>
                <li>Liên hệ</li>
                <li>Hướng dẫn mua hàng</li>
                <li>Hệ thống cửa hàngO</li>
            </ul>
        </Col>
        <Col lg={3}>
            <div className="footer-heading">
                <h4>DANH MỤC SẢN PHẨM</h4>
            </div>
            <ul className='footer-ul'>
                <li>Túi Kamicy</li>
                <li>Túi nữ cầm tay</li>
                <li>Túi Xách</li>
                <li>Ví da</li>
            </ul>
        </Col>
        <Col lg={3}>
            <div className="footer-heading">
                <h4>FANPAGE FACEBOOK</h4>
            </div>
            <ul className='footer-ul footer_flex'>
                <li className='footer-li'><BsFacebook></BsFacebook></li>
                <li className='footer-li'><AiFillInstagram></AiFillInstagram></li>
                <li className='footer-li'><IoLogoYoutube></IoLogoYoutube></li>
            </ul>
        </Col>
    </Row>
   </Container>
  )
}

export default Footer