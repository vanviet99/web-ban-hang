import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"
import  '../Register/register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Admin/button.css'
function Login() {
    const nav = useNavigate()
    const [errr,setErrr] = useState('')
    const formik =  useFormik({
        initialValues:{
        username :'',
        password: ''
        },
         validationSchema :  Yup.object({
            username : Yup.string().required('UserName Khong Duoc De Trong').min(6,"username qua ngan"),
            password : Yup.string().required("PassWord khong duoc de trong").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,19}$/,"Password gom 8-19 ky tu ,it nhat 1 chu cai va 1 so")
        }),
        onSubmit:(value) =>{
            axios.post('http://localhost:8000/v1/auth/login',{
                username: value.username,
                password: value.password
            })
            .then((data)=>{
                localStorage.setItem('user',JSON.stringify(data.data))
                console.log(data.data.admin)
                console.log(data)
                if(data.data.admin) {
                    nav('/admin')
                }else{
                    nav('/')
                }
            })
            .catch((err)=>{
                    setErrr(err.response
                        .data)
            })
        }
    })

  return (
    <div className='header_body'>
        <header className='header'> <div class="wrapper header">
      <div class="bg"> Welcome to VT Shop </div>
      <div class="fg">  Welcome to VT Shop  </div>
</div></header>
        <section>
            <form className='infoform' onSubmit={formik.handleSubmit}>
               <div className="form_one">
               <label className='label_form'>Your Name</label>
                <input type='text' id='name' placeholder='username' name='username' onChange={formik.handleChange} value={formik.values.username} className='input_form'>
                </input>
                {formik.errors.username &&(
                        <p className='error'>{formik.errors.username}</p>
                    )}
                    {errr &&(
                        <p className='error'>{errr}</p>
                    )}
               </div>
               <div className="form_one">
               <label  className='label_form'>Your Password</label>
                <input type='password' id='password' placeholder='password' name='password' onChange={formik.handleChange} value={formik.values.password} className='input_form'></input>
                {formik.errors.password  &&(
                        <p className='error'>{formik.errors.password}</p>
                    )}
               </div>
               <div className="form_btn">
               <button class="animated-button1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                 Submit Login
            </button>
                <p className='linhchocho'>Bạn chưa có tài khoản <Link to='/register' className='linhcho'>register</Link></p>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Login
