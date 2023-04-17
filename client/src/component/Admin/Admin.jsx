import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, useNavigate } from 'react-router-dom'
import Navadmin from './navadmin/Navadmin'
import Headeradmin from './Headeradmin/Headeradmin';
import Useradmin from './Useradmin/Useradmin';
function Admin() {
    const nav = useNavigate()
    useEffect(() => {
     const user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')) : false
     console.log(user.admin)
     if(!user.admin){
       return  nav('/login')
     }
     
    }, [])
  return (
    <Container fluid> 
    <Headeradmin></Headeradmin>
      <Row>
        <Col lg={3}>
          <Navadmin></Navadmin>
        </Col>
        <Col lg={9}>
          <Useradmin></Useradmin>
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  )
}

export default Admin