import React, { useEffect, useState } from 'react'
import Navbarr from '../navbar/Navbarr'
import Footer from '../footer/Footer'
import { Link, useParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Evaluate from '../Evaluate/Evaluate';
import { AiFillCar,AiFillGift ,AiTwotoneStar} from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import Description from '../Description/Description';
import './infoproduct.css'
import Command from '../Command/Command';
import Magnifier from "react-magnifier";
import axios from 'axios';

function Infoproduct() {
   const [yourImage,setYourImage] = useState("https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/kgp6hvho_large-1.jpg")
  const [dataProduct, setdataProduct] = useState({})
//   .magnifier {
//     /* Styles for <div> around image and magnifying glass */
//   }
//   .magnifier-image {
//     /* Styles for large image */ 
//   }
//   .magnifying-glass {
//     /* Styles for magnifying glass */
//   }\
let IDproduct = useParams().id
let user = JSON.parse(window.localStorage.getItem("user"))
useEffect(()=>{

  axios.get(`http://localhost:8000/v1/product/findbyID/${IDproduct}` )
  .then(value=>{
    setdataProduct(value.data[0])
    console.log(value);
  })
  .catch(value=>{
    console.log(value)
  })
},[])

  return (
    <div>
        <Navbarr></Navbarr>
      <Container>
      <div className="list">
            <Link to='/' className='list_link'>Trang Chủ</Link> / <Link to='/'  className='list_link'>Túi Sách</Link>
        </div>
      </Container>
        <Container className='container_list'>
        <Row className="infroproduct">
        <Col lg={5}  className=''>
        <Magnifier src={dataProduct.thumb}/>
        </Col>
        <Col lg={4}>
        <div className="list_danhmuc">
            <p>Danh Mục: <Link to='/' className='list_danhmuc-link'>{dataProduct.brand}</Link></p>
          </div>
          <div className="list_title">
            <h3>{dataProduct.name}</h3>
            <div className="list_title-price">
           {dataProduct.price?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
            </div>
            <div className="list_btn">
            <div className="list_btn-left">
            <button>-</button>
              <input type="text" value={1}/>
              <button>+</button>
              </div>
              <div className="list_btn-right">
                <button>Thêm Vào Giỏ Hàng</button>
            </div>
          </div>
          <div className="list_thanhtien">
            <p>Thành Tiền :</p>
            <span> {dataProduct.price?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
          </div>
          <div className="list_btn-have">
            <button className='btn_have'>MUA NGAY<br></br><span>Gọi Điện và xác nhận giao hàng tận nơi</span></button>
          </div>
        
          </div>
        </Col>
        <Col lg={3}>
          <div className="list_shiiping">
            <div className="list_shiiping-heading">
              <p>SẼ CÓ TẠI NHÀ BẠN</p>
              <span>Từ 1-5 ngày làm việc</span>
            </div>
            <div className="list_shipping-title">
              <AiFillCar className='list_icon'></AiFillCar>
              <div className="list_title-title">
                  <p>Miễn phí giao hàng</p>
                  <span>Nhận hàng trong vòng 3 ngày</span>
              </div>
            </div>
            <div className="list_shipping-title">
              <AiFillGift className='list_icon'></AiFillGift>
              <div className="list_title-title">
                  <p>Quà tặng</p>
                  <span>Nhiều quà tặng hấp dẫn</span>
              </div>
              
            </div>
            <div className="list_shipping-title">
              <AiTwotoneStar className='list_icon'></AiTwotoneStar>
              <div className="list_title-title">
                  <p>Sản phẩm đã dược kiểm định</p>
                  <span>Sản phẩm đã dược kiểm định</span>
              </div>
              
            </div>
            <div className="list_shipping-title">
              <BiSupport className='list_icon'></BiSupport>
              <div className="list_title-title">
                  <p>0899 355 377</p>
                  <span>Dịch vụ hỗ trợ bạn 24/7</span>
              </div>
            </div>
          </div>
        </Col>
        </Row>
        </Container>
       <Description data={dataProduct.description}></Description>
       <Evaluate></Evaluate>
       <Command productId={IDproduct} ></Command>
        <Footer></Footer>
    </div>
  )
}

export default Infoproduct