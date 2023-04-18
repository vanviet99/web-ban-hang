import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import Useradmin from '../Useradmin/Useradmin';
import { Pagination } from 'antd';
import {useFormik} from 'formik'
import * as Yup from "yup"
import axios from 'axios';
import '../button.css'
import './homeadmin.css'
function Homeadmin() {
    const [errr,setErrr] = useState('')
    const formik =  useFormik({
        initialValues:{
        username :'',
        password: ''
        },
         validationSchema :  Yup.object({
            username : Yup.string().min(6,"username qua ngan"),
            password : Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,19}$/,"Password gom 8-19 ky tu ,it nhat 1 chu cai va 1 so")
        }),
        onSubmit:(value) =>{
            axios.post('http://localhost:8000/v1/auth/register',{
                username: value.username,
                password: value.password
            })
            .then((data)=>{

            })
            .catch((err)=>{
                    setErrr(err.response
                        .data.message)
            })
        }
    })
  return (
    <div className='Homeadmin'>
        <section class="light">
  <h1 class="gradient1">Good Morning!</h1><br></br>
  <p class="gradient2"> Here's what's happening with your store today.</p>
</section>
        
        <Row>
            <Col lg={4}>
                <div className="homeadmin_banner">
                    <p>User</p>
                    <h3>36,894</h3>
                    <div className="homeadmin_banner-icon">
                       <Link to='/admin'>View all user</Link>
                       <FaUser className='homeadmin_banner-icon-icon'></FaUser>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="homeadmin_banner">
                    <p>Order</p>
                    <h3>36,894</h3>
                    <div className="homeadmin_banner-icon">
                       <Link to='/admin'>View all Order</Link>
                       <BsFillHandbagFill className='homeadmin_banner-icon-icon green'></BsFillHandbagFill>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="homeadmin_banner">
                    <p>Product</p>
                    <h3>36,894</h3>
                    <div className="homeadmin_banner-icon">
                       <Link to='/admin'>View all product</Link>
                       <FaProductHunt className='homeadmin_banner-icon-icon blue'></FaProductHunt>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='homeadmin-wraper'>
            <Col lg={8}>
            <Useradmin></Useradmin>
            <Pagination defaultCurrent={1} total={50} className='pagini_admin' />
            </Col>
            <Col lg={4} className='homeadmin_form'>
            <form className='form_homeadmn'>
            <div className="group">      
                    <input type='text' name='username' onChange={formik.handleChange} value={formik.values.username} className='input_homeadmin' required>
                </input>
                {formik.errors.username &&(
                        <p className='error'>{formik.errors.username}</p>
                    )}
                    {errr &&(
                        <p className='error'>{errr}</p>
                    )}
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className='lable_admin'>UserName</label>
             </div>
      
            <div className="group">      
                <input type='password' id='password'  name='password' onChange={formik.handleChange} value={formik.values.password} className='input_homeadmin' required></input>
                {formik.errors.password  &&(
                        <p className='error'>{formik.errors.password}</p>
                    )}
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className='lable_admin'>Password</label>
            </div>
            <div className="animation_buttonn">
            <button class="animated-button1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Add New Customer
            </button>
            </div>
    
        </form>
            </Col>
        </Row>
    </div>
  )
}

export default Homeadmin