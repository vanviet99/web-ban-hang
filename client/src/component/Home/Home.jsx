import React from 'react'
import PauseOnHover from '../Slick/PauseOnHover'
import Navbarr from '../navbar/Navbarr'
import home from './home.css'

import { BsFillArrowUpCircleFill } from "react-icons/bs";
function Home() {
  return (
    <div className='home'>
      <Navbarr></Navbarr>
      <PauseOnHover></PauseOnHover>
      <div className='home_top'>
      <a href='#' className='home-top-animation'><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></a>
      </div>
    </div>
  )
}

export default Home