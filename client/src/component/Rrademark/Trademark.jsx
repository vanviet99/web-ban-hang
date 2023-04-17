import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import Container from 'react-bootstrap/Container';
export default class Trademark extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
      <Container>
        <div>
        <div className="product_headding">
                <span className='aaaa'></span>
                <h2>Trademark</h2>
                <span className='aaaa'></span>
            </div>
        
        <Slider {...settings}>
          <div>
            <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_1.png" alt="" />
          </div>
          <div>
            <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_9-1.png" alt="" />
          </div>
          <div>
          <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_6-1.png" alt="" />
          </div>
          <div>
            <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_5-1.png" alt="" />
          </div>
          <div>
            <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_10.png" alt="" />
          </div>
          <div>
          <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_9.png" alt="" />
          </div> <div>
            <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_8.png" alt="" />
          </div>
          <div>
            <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_7.png" alt="" />
          </div>
          <div>
          <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/popular_brand_img_6.png" alt="" />
          </div>
        </Slider>
      </div>
      </Container>
    );
  }
}