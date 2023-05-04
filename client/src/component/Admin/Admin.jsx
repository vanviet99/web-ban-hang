import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import {  useNavigate } from 'react-router-dom'
import Navadmin from './navadmin/Navadmin'
import Headeradmin from './Headeradmin/Headeradmin';

import './admin.css'
function Admin() {
    const nav = useNavigate()
    useEffect(() => {
     const user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')) : false
     if(!user.admin){
       return  nav('/login')
     }
     
    }, [])
  return (
    <Container fluid> 
    <Headeradmin></Headeradmin>
    <Navadmin></Navadmin>
    </Container>
  )
}

export default Admin