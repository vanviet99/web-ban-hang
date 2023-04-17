import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import  './nav.css'
import { BsCartCheck,BsFillFilePersonFill} from "react-icons/bs";
import {  useEffect, useState } from 'react';
function Navbarr() {  
  const [userr,setUserr] = useState('')
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')) : false
    setUserr(user.username)
  }, [])
 
  function logout(){
    localStorage.removeItem("user")
  }

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><input type="search" placeholder='Search by name product' className='nav_search'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='' className='nav_link'>
            <Nav.Link>Giới Thiệu</Nav.Link>
            </Link>
            <Link className='nav_link'> <Nav.Link >Túi Sách</Nav.Link>
            </Link>
           <Link className='nav_link'><Nav.Link >Túi Nữ Cầm tay</Nav.Link></Link>
            <Link className='nav_link'><Nav.Link >Túi Kamicy</Nav.Link></Link>
           <Link className='nav_link'><Nav.Link >VÍ Da</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>{userr ? <div>{userr}<a href=''className='nav_link white' onClick={()=>logout()}>Logout</a></div>: <div><BsFillFilePersonFill></BsFillFilePersonFill><Link to='login' className='nav_link white'>Đăng Nhập</Link></div>}</Navbar.Brand>
        <Navbar.Brand className='cart_quantyti'> <BsCartCheck></BsCartCheck><span>0</span></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbarr;