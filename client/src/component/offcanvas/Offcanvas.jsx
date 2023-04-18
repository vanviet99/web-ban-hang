import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineCloseCircle } from "react-icons/ai";
import  "./offcanvas.css"

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <div className="brandproduct__content__left__listproduct__item">
                <div className="brandproduct__content__left__listproduct__item__close">
                  <AiOutlineCloseCircle></AiOutlineCloseCircle>
                </div>
              <div className="brandproduct__content__left__listproduct__item__img">
              <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/dctztg96_718c5e9c05ae4220a6e1af0a4b8af904_large-100x100.jpg" alt="" />
              </div>
              <div className="brandproduct__content__left__listproduct__item__desc">
                <p>Túi tote da bò quai hợp kim Heti xanh</p>
                <span className='brandproduct__content__left__listproduct__item__price'>1 x 559.000d</span>
              </div>
            </div> 
            <div className="brandproduct__content__left__listproduct__item">
                <div className="brandproduct__content__left__listproduct__item__close">
                  <AiOutlineCloseCircle></AiOutlineCloseCircle>
                </div>
              <div className="brandproduct__content__left__listproduct__item__img">
              <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/dctztg96_718c5e9c05ae4220a6e1af0a4b8af904_large-100x100.jpg" alt="" />
              </div>
              <div className="brandproduct__content__left__listproduct__item__desc">
                <p>Túi tote da bò quai hợp kim Heti xanh</p>
                <span className='brandproduct__content__left__listproduct__item__price'>1 x 559.000d</span>
              </div>
            </div>
            <div className="brandproduct__content__left__listproduct__item">
                <div className="brandproduct__content__left__listproduct__item__close">
                  <AiOutlineCloseCircle></AiOutlineCloseCircle>
                </div>
              <div className="brandproduct__content__left__listproduct__item__img">
              <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/dctztg96_718c5e9c05ae4220a6e1af0a4b8af904_large-100x100.jpg" alt="" />
              </div>
              <div className="brandproduct__content__left__listproduct__item__desc">
                <p>Túi tote da bò quai hợp kim Heti xanh</p>
                <span className='brandproduct__content__left__listproduct__item__price'>1 x 559.000d</span>
              </div>
            </div>
            <div className="offcanvas__content__totalprice">
              <p>Tổng số phụ:</p> <span>559000d</span>
            </div>
           <div className="offcanvas__content__btn__block">
           <button  className='offcanvas__content__btn'>Xem giỏ hàng</button>
            <button className='offcanvas__content__btn'>Thanh toán</button>
           </div>

         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvasExample
