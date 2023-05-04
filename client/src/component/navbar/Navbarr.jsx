
import Nav from 'react-bootstrap/Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'
import { BsCartCheck, BsFillFilePersonFill } from "react-icons/bs";
import { useCallback, useEffect, useState } from 'react';
import OffCanvasExample from '../offcanvas/Offcanvas';
import Myinfo from '../myinfo/Myinfo'
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchproductbynameRq, setloginSuccess } from '../../redux-saga/action';
import { debounce } from "debounce";


function Navbarr(props) {
    const dispatch = useDispatch()
    const dataSearch = useSelector((state)=>{return state.myReducer.dataProductSearch})
    const loading = useSelector((state)=>{return state.myReducer.loading})

  const nav = useNavigate()
  const [userr, setUserr] = useState('')
  const listbrnad = props.listbrnad
  const dataCart = props.dataCart
  const [amount, setamount] = useState(0)
  const role = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).admin : false
  let userId = JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user"))._id : ''


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : false
    setUserr(user.username)
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:8000/v1/cart/get/${userId}`)
      .then(value => {
        setamount(value.data[0].list.length)
      })
      .catch(value => {
        console.log(value);
      })

  }, [dataCart])


  function logout() {
    dispatch(setloginSuccess({}))
    localStorage.removeItem("user")
    nav('/')
  }
  const handleclickBrand = (value) => {
    nav(`/brand/${value}`)
  }

  const handleToDashboard =()=>{
    const check  = JSON.parse(window.localStorage.getItem("user")).admin
    if(check){
      nav('/admin')
    }else{
      nav(`/order/${userId}`)
    }
  }
  const [searching, setSearching] = useState(false)


  function fetchDropdownOptions(key) {
    dispatch(searchproductbynameRq({name:key, callback: function(){
      setSearching(true)
  }}))
  }

  const debounceDropDown = useCallback(debounce((nextValue) => fetchDropdownOptions(nextValue), 1000), [])

  const handleChangeSearch=(e)=>{
    if(e.target.value.length >= 2){
      debounceDropDown(e.target.value)
      
    }else{
      if(e.target.value.length == 0){
        dispatch(searchproductbynameRq({name: "asdasdasdasdasdadasd", callback:function(){
          setSearching(false)
        }}))
      }
    }
    
  }

  const handleSelectitem=(ID)=>{
    nav(`/${ID}`)
    setSearching(false)
  }

  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='test' fixed="top" >
     {searching ?  <div onClick={function(){setSearching(false)}} className="fades"></div>: ''}
      <Myinfo></Myinfo>
      <Container className='th'>
        <Navbar.Brand><div class="wrapper">
          <div class="bg"> VT Shop </div>
          <div class="fg">  VT Shop  </div>
        </div></Navbar.Brand>
        <Navbar.Brand className='input__nav'>  
          <div className="nav__input__block">
          <input onChange={handleChangeSearch} type="search" placeholder='Search by name product' className='nav_search' />
          {searching? 
            <div className="nav__input__block__data">
              {loading? <div class="loader posi"></div> :'' }
            {dataSearch ? dataSearch.map(value=>{
              return (
                <div onClick={()=>{handleSelectitem(value._id)}} className="brandproduct__content__left__listproduct__item more">
                <div className="brandproduct__content__left__listproduct__item__img">
                  <LazyLoadImage
                    alt={value.thumb.alt}
                    effect="black-and-white"
                    src={value.thumb} />
                </div>
                <div className="brandproduct__content__left__listproduct__item__desc">
                  <p>{value.name}</p>
                  <span className='brandproduct__content__left__listproduct__item__price'>{value.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                </div>
              </div>
              )
            })
            
            : ''
            }
            </div>
            :''
          }
          </div>

          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" variant="pills" defaultActiveKey="/">
            <Link to='/' className='nav_link'>
              <Nav.Link href="/" eventKey="link-1">Trang Chủ</Nav.Link>
            </Link>
            {listbrnad?.map(value => {
              if (value !== undefined) {
                return (
                  <Link onClick={() => { handleclickBrand(value) }} className='nav_link'> <Nav.Link eventKey="link-5">{value}</Nav.Link>
                  </Link>
                )
              }
            })}

          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>{userr ? <div onClick={handleToDashboard} className='dashboardUser'><p>{ role? 'Dash board' : userr}</p><a href='' className='nav_link white' onClick={() => logout()}>Logout</a></div> : <div><BsFillFilePersonFill></BsFillFilePersonFill><Link to='/login' className='nav_link white'>Đăng Nhập</Link></div>}</Navbar.Brand>
        {['end'].map((placement, idx) => (
          <OffCanvasExample setamount={setamount} dataCart={dataCart} key={idx} placement={placement} name={<Navbar.Brand className='cart_quantyti'> <BsCartCheck></BsCartCheck><span className='amount__cart'>{amount}</span></Navbar.Brand>} />
        ))}

      </Container>
    </Navbar>

    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
    //     <Navbar.Brand > </Navbar.Brand>
    //     <Navbar.Brand ><input type="search" placeholder='Search by name product' className='nav_search'/></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto" variant="pills" defaultActiveKey="/">
    //         <Link to='/' className='nav_link'>
    //         <Nav.Link  href="/" eventKey="link-1">Trang Chủ</Nav.Link>
    //         </Link>
    //         <Link className='nav_link'> <Nav.Link  eventKey="link-5">Túi Sách</Nav.Link>
    //         </Link>
    //        <Link className='nav_link' ><Nav.Link eventKey="link-2" >Túi Nữ Cầm tay</Nav.Link></Link>
    //         <Link className='nav_link' ><Nav.Link eventKey="link-3">Túi Kamicy</Nav.Link></Link>
    //        <Link className='nav_link' ><Nav.Link eventKey="link-4" >VÍ Da</Nav.Link></Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //     <Navbar.Brand>{userr ? <div>{userr}<a href=''className='nav_link white' onClick={()=>logout()}>Logout</a></div>: <div><BsFillFilePersonFill></BsFillFilePersonFill><Link to='login' className='nav_link white'>Đăng Nhập</Link></div>}</Navbar.Brand>
    //     {[ 'end'].map((placement, idx) => (
    //     <OffCanvasExample key={idx} placement={placement} name={<Navbar.Brand className='cart_quantyti'> <BsCartCheck></BsCartCheck><span className='amount__cart'>0</span></Navbar.Brand>} />
    //   ))}
    // </Navbar>
  );
}

export default Navbarr;