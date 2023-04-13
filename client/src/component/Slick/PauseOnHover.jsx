import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import './slick.css'
export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
           <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/slideshow_2-1.jpg" alt="" />
          </div>
          <div>
            <img src="https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/ferrari-testarossa-3840x2160-retrowave-pink-4k-19899-1.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

