import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbarr from '../navbar/Navbarr'
import './brandproduct.css'
import Myinfo from '../myinfo/Myinfo'
import Dropdown from 'react-bootstrap/Dropdown'
import Product from '../Product/Product'
import Footer from '../footer/Footer'
import axios from 'axios'

function BrandProduct() {
  let param = useParams().brand
  const [dataproduct , setDataProduct] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8000/v1/product/findbybrand/${param}`)
    .then(value=>{
      console.log(value);
      setDataProduct(value.data)
    })
    .catch(value=>{
      console.log(value);
    })
  },[])
  let listbrnad =JSON.parse( window.localStorage.getItem("listbrand"))
  return (
    <div>
      <Navbarr listbrnad={listbrnad}></Navbarr>
      <div className="brandproduct__title">
        <div className="brandproduct__title__left">
          <p className='brandproduct__title__left_back brandproduct__title__left_back__hover'>Trang chủ</p>
          <p className='brandproduct__title__left_back'>/</p>
          <p>param</p>
        </div>
        <div className="brandproduct__title__right">
          <p>Hiển thị tất cả n sản phẩm</p>
          <div className="brandproduct__title__right__select">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tất cả sản phẩm
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Theo thứ tự giá: Thấp đến cao</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Theo thứ tự giá: Cao xuống thấp</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

      </div>
      <div className="brandproduct__content__block">
      <div className="brandproduct__content">
        <div className="brandproduct__content__left">
          <h3>Có thể bạn sẽ thích</h3>
          <div className="brandproduct__content__left__listproduct">
            <div className="brandproduct__content__left__listproduct__item">
              <div className="brandproduct__content__left__listproduct__item__img">
              <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/dctztg96_718c5e9c05ae4220a6e1af0a4b8af904_large-100x100.jpg" alt="" />
              </div>
              <div className="brandproduct__content__left__listproduct__item__desc">
                <p>Túi tote da bò quai hợp kim Heti xanh</p>
                <span>559.000d</span>
              </div>
            </div>
            <div className="brandproduct__content__left__listproduct__item">
              <div className="brandproduct__content__left__listproduct__item__img">
              <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/dctztg96_718c5e9c05ae4220a6e1af0a4b8af904_large-100x100.jpg" alt="" />
              </div>
              <div className="brandproduct__content__left__listproduct__item__desc">
                <p>Túi tote da bò quai hợp kim Heti xanh</p>
                <span>559.000d</span>
              </div>
            </div>
            <div className="brandproduct__content__left__listproduct__item">
              <div className="brandproduct__content__left__listproduct__item__img">
              <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/dctztg96_718c5e9c05ae4220a6e1af0a4b8af904_large-100x100.jpg" alt="" />
              </div>
              <div className="brandproduct__content__left__listproduct__item__desc">
                <p>Túi tote da bò quai hợp kim Heti xanh</p>
                <span>559.000d</span>
              </div>
            </div>
            <div className="brandproduct__content__left__listproduct__item">
              <div className="brandproduct__content__left__listproduct__item__img">
              <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/dctztg96_718c5e9c05ae4220a6e1af0a4b8af904_large-100x100.jpg" alt="" />
              </div>
              <div className="brandproduct__content__left__listproduct__item__desc">
                <p>Túi tote da bò quai hợp kim Heti xanh</p>
                <span>559.000d</span>
              </div>
            </div>
            <div className="brandproduct__content__left__listproduct__item">
              <div className="brandproduct__content__left__listproduct__item__img">
              <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/dctztg96_718c5e9c05ae4220a6e1af0a4b8af904_large-100x100.jpg" alt="" />
              </div>
              <div className="brandproduct__content__left__listproduct__item__desc">
                <p>Túi tote da bò quai hợp kim Heti xanh</p>
                <span>559.000d</span>
              </div>
            </div>
          </div>
        </div>
        <div className="brandproduct__content__right">
              <Product listproduct={dataproduct} brand={true}></Product>
        </div>

      </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default BrandProduct