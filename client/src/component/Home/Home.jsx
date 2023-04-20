import React, { useEffect, useState } from 'react'
import PauseOnHover from '../Slick/PauseOnHover'
import Navbarr from '../navbar/Navbarr'
import './home.css'
import Support from '../Support/Support'
import Product from '../Product/Product'
import Trademark from '../Rrademark/Trademark'
import Footer from '../footer/Footer'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import axios from 'axios'
function Home() {
  const [listProduct, setListProduct] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/v1/product/getall")
    .then(value=>{
      setListProduct(value.data)
    })
    .catch(value=>{
      console.log(value);
    })
  }, [])
  return (
    <div className='home'>
      <Navbarr></Navbarr>
      <PauseOnHover></PauseOnHover>
      <Support></Support>
      <Product listproduct={listProduct}></Product>
      <Trademark></Trademark>

      <Footer></Footer>
      <div className='home_top'>
      <a href='#' className='home-top-animation'><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></a>
      </div>
    </div>
  )
}

export default Home