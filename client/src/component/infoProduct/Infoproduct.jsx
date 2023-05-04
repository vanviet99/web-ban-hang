import React, { useEffect, useState } from 'react'
import Navbarr from '../navbar/Navbarr'
import Footer from '../footer/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Evaluate from '../Evaluate/Evaluate';
import { AiFillCar, AiFillGift, AiTwotoneStar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import Description from '../Description/Description';
import './infoproduct.css'
import Command from '../Command/Command';
import Magnifier from "react-magnifier";
import axios from 'axios';
import { notification, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addtocartRq, getproductinfoRq } from '../../redux-saga/action';


function Infoproduct() {

  // const [dataCart, setDatacart] = useState([])
  const nav = useNavigate()
  const [amount, setAmount] = useState(1)
  const dispatch = useDispatch()
  const dataProducts = useSelector((state) => { return state.myReducer.productInfo })
  const loading = useSelector((state) => { return state.myReducer.loading })
  const dataCart = useSelector((state) => { return state.myReducer.newCart })
  let IDproduct = useParams().id
  let listbrnad = JSON.parse(window.localStorage.getItem("listbrand"))

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch(getproductinfoRq({ IDproduct: IDproduct }))
  }, [IDproduct])

  const handleChangeAmount = (value) => {
    if (value == 0) {
      if (amount !== 1) {
        let newamount = amount - 1
        setAmount(newamount)
      }
    } else {
      if (amount <= dataProducts.stock) {
        let newamount = amount + 1
        setAmount(newamount)
      }
    }
  }

  let userId = JSON.parse(window.localStorage.getItem("user"))._id
  const handleAddtoCart = () => {
    dispatch(addtocartRq({
      userId: userId,
      productId: dataProducts._id,
      quantity: amount,
      buy: false,
      callback: function () {
        openNotificationWithIcon('success')
      }
    }))
  }
  const buynow = () => {
    dispatch(addtocartRq({
      userId: userId,
      productId: dataProducts._id,
      quantity: amount,
      buy: true,
      callback: function () {
        openNotificationWithIcon('success')
        nav(`/cart/${userId}`)
      }
    }))
  }

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Thêm sản phẩm thành công',
      // description:
      //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <div className='info__Product'>
      {loading ? <div className='Loading__info'><p>Loading...</p></div> : ''}
      {contextHolder}
      <Navbarr dataCart={dataCart} listbrnad={listbrnad}></Navbarr>
      <Container>
        <div className="list">
          <Link to='/' className='list_link'>Trang Chủ</Link> / <Link to='/' className='list_link'>Túi Sách</Link>
        </div>
      </Container>
      <Container className='container_list'>
        <Row className="infroproduct">
          <Col lg={5} className=''>
            <Magnifier src={dataProducts.thumb} />
          </Col>
          <Col lg={4}>
            <div className="list_danhmuc">
              <p>Danh Mục: <Link to='/' className='list_danhmuc-link'>{dataProducts.brand}</Link></p>
            </div>
            <div className="list_title">
              <h3>{dataProducts.name}</h3>
              <div className="list_title-price">
                {dataProducts.price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
              </div>
              <div className="list_btn">
                <div className="list_btn-left">
                  <button onClick={() => { handleChangeAmount(0) }}>-</button>
                  <input type="text" value={amount} />
                  <button onClick={() => { handleChangeAmount(1) }}>+</button>
                </div>
                <div className="list_btn-right">
                  <button onClick={handleAddtoCart}>Thêm Vào Giỏ Hàng</button>
                </div>
              </div>
              <div className="list_thanhtien">
                <p>Thành Tiền :</p>
                <span> {dataProducts.price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
              </div>
              <div className="list_btn-have">
                <button onClick={buynow} className='btn_have'>MUA NGAY<br></br><span>Gọi Điện và xác nhận giao hàng tận nơi</span></button>
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
      <Description data={dataProducts.description}></Description>
      <Evaluate productId={IDproduct} product={dataProducts}></Evaluate>
      <Command productId={IDproduct} ></Command>
      <Footer></Footer>
    </div>


  )
}

export default Infoproduct