import React from 'react'
import "./myinfo.css"
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

function Myinfo() {
    return (
        <div className='myinfo'>
            <div className="myinfo__block__left">
                <p> <AiOutlineMail></AiOutlineMail><a href="">SUPPORT.EGA@GMAIL.COM</a> </p>
                <p> <AiOutlinePhone></AiOutlinePhone><a href="">0967671182</a></p>
            </div>
            <div className="myinfo__block__right">
                <p>Hệ thống cửa hàng</p>
                <p>Hướng dẫn mua</p>
                <div><AiFillFacebook></AiFillFacebook> </div>
                <div><AiFillInstagram></AiFillInstagram> </div>
                <div><AiOutlineTwitter></AiOutlineTwitter> </div>
                <div><AiOutlineMail></AiOutlineMail> </div>
            </div>

        </div>
    )
}

export default Myinfo