import React, { useEffect, useState } from 'react'
import PauseOnHover from '../Slick/PauseOnHover'
import Navbarr from '../navbar/Navbarr'
import './home.css'
import Support from '../Support/Support'
import Product from '../Product/Product'
import Trademark from '../Rrademark/Trademark'
import Footer from '../footer/Footer'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { getallproductRq } from '../../redux-saga/action'
function Home() {
  const listProduct = useSelector((state) => { return state.myReducer.listAllProduct })
  const loading = useSelector((state) => { return state.myReducer.loading })
  const dispatch = useDispatch()
  
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch(getallproductRq())
  }, [])

  let brandlistall = listProduct.map(value => value.brand)
  let brand = brandlistall.filter((value, index) => {
    return brandlistall.indexOf(value) == index
  })
  window.localStorage.setItem("listbrand", JSON.stringify(brand))
  return (
    <div >
      {loading ? <div className='home__block'><span class="loader"></span> </div>
        : <div className='home'>
          <Navbarr listbrnad={brand}></Navbarr>
          <PauseOnHover></PauseOnHover>
          <Support></Support>
          <Product listproduct={listProduct}></Product>
          <Trademark></Trademark>

          {/* <button onClick={() => { dispatch(getallproductRq()) }}>asdasdasd</button> */}
          <Footer></Footer>
          <div className='home_top'>
            <a href='#' className='home-top-animation'><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></a>
          </div>
        </div>
      }

    </div>

  )
}

export default Home