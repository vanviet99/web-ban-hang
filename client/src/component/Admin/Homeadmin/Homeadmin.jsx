import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import Useradmin from '../Useradmin/Useradmin';
import {useFormik} from 'formik'
import * as Yup from "yup"
import axios from 'axios';
import '../button.css'
import './homeadmin.css'
function Homeadmin() {
    const [errr,setErrr] = useState('')
    const [userdata,setUserdata] =useState([]) 
    const [role,setRole] =useState() 


    const handleChanges=(value)=>{
        setRole(value)
    }

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
            console.log(role);
            if(role){
                let a = role ==1? false: true
                console.log(a);
                axios.post('http://localhost:8000/v1/auth/register',{
                    username: value.username,
                    password: value.password,
                    role: a
                })
                .then((dataa)=>{
                 setUserdata(dataa.data)
                 console.log(dataa.data)
              
                })
                .catch((errr)=>{
                        setErrr(errr.response
                            .data.message)
                })
            }
          
        }
    })
    const [data, setData]= useState()
    const [data1, setdata1] = useState()
    const [data2, setdata2] = useState()

    useEffect(()=>{
        axios.get("http://localhost:8000/v1/product/getall")
        .then(value => {
          setData(value.data)
        })
        .catch(value => {
          console.log(value);
        })
        axios.get('http://localhost:8000/v1/user')
        .then(data =>{
            setdata1(data.data)
        })
        .catch(err =>{
            console.log(err)
        })
        axios.get('http://localhost:8000/v1/order/getall')
        .then(data =>{
            setdata2(data.data)
        })
        .catch(err =>{
            console.log(err)
        })
      },[])
      
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
                    <h3>{data1?data1.length: 0}</h3>
                    <div className="homeadmin_banner-icon">
                       <FaUser className='homeadmin_banner-icon-icon'></FaUser>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="homeadmin_banner">
                    <p>Order</p>
                    <h3>{data2?data2.length: 0}</h3>
                    <div className="homeadmin_banner-icon">
                       <BsFillHandbagFill className='homeadmin_banner-icon-icon green'></BsFillHandbagFill>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="homeadmin_banner">
                    <p>Product</p>
                    <h3>{data?data.length: 0}</h3>
                    <div className="homeadmin_banner-icon">
                       <FaProductHunt className='homeadmin_banner-icon-icon blue'></FaProductHunt>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='homeadmin-wraper'>
            <Col lg={8}>
            <Useradmin userdata={userdata}></Useradmin>
            </Col>
            <Col lg={4} className='homeadmin_form'>
            <form className='form_homeadmn' onSubmit={formik.handleSubmit} >
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
                <div> <input name='radio' type="radio" onClick={()=>{handleChanges(1)}} className='radio'/>User   </div>
                <div><input name='radio' type="radio" onClick={()=>{handleChanges(2)}} className='radio'/>Admin</div>

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