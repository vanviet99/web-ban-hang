import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./offcanvas.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [listcartcurrent, setlistcartcurrent] = useState([])
  const dataCart = props.dataCart
  const setamount = props.setamount
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let userId = JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user"))._id : ''
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8000/v1/cart/get/${userId}`)
      .then(value => {
        setlistcartcurrent(value.data[0].list)
      })
      .catch(value => {
        console.log(value);
      })
  }, [])

  let A = dataCart?.list?.length > 0 ? dataCart.list : listcartcurrent
  let totalprice = 0
  A.map(value => {
    totalprice += (value.productId.price * 1) * (value.quantity * 1)
  })
  const handleDeleItemCart = (productId) => {
    setLoading(true)
    axios.post("http://localhost:8000/v1/cart/delete", { userId: userId, productId: productId })
      .then(value => {
        setLoading(false)
        setlistcartcurrent(value.data[0].list)
        setamount(value.data[0].list.length)
      })
      .catch(value => {
        console.log(value);
      })
  }
  const nav = useNavigate()
  const handleCartMore = () => {
    nav(`/cart/${userId}`)
  }
  // let check = dataCart?.length > 0 ? dataCart : listcartcurrent
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas__content">
         {loading?  <div class="loader posi"></div>: ''}
            {A?.map(value => {
              return (
                <div className="brandproduct__content__left__listproduct__item">
                  <div className="brandproduct__content__left__listproduct__item__close" onClick={() => { handleDeleItemCart(value.productId._id) }}>
                    <AiOutlineCloseCircle></AiOutlineCloseCircle>
                  </div>
                  <div className="brandproduct__content__left__listproduct__item__img">
                    <LazyLoadImage
                      alt={value.productId.thumb.alt}
                      effect="black-and-white"
                      src={value.productId.thumb} />
                  </div>
                  <div className="brandproduct__content__left__listproduct__item__desc">
                    <p>{value.productId.name}</p>
                    <span className='brandproduct__content__left__listproduct__item__price'>{value.quantity} x {value.productId.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                  </div>
                </div>
              )
            })}
            <div className="offcanvas__content__totalprice">
              <p>Tổng số phụ:</p> <span>{totalprice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
            </div>
           {A.length !=0 ?  <div className="offcanvas__content__btn__block">
              <button onClick={handleCartMore} className='offcanvas__content__btn'>Xem giỏ hàng</button>
              <button onClick={function () { nav(`/cart/${userId}`) }} className='offcanvas__content__btn'>Thanh toán</button>
            </div> : ''}

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvasExample
