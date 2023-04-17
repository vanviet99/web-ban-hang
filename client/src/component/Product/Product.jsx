import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineShoppingCart ,AiOutlineStar} from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import './product.css'
import { Pagination } from 'antd';
function Product(props) {
    let brand  = props.brand
  return (
   <Container>
    <Row>
    <div className="product_headding">
                <span className='aaaa'></span>
                <h2>Product</h2>
                <span className='aaaa'></span>
            </div>
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="btnsale">-15%</div>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
        <Col className='product' lg={3}>
            <div className="product_img">
                    <img src='https://tt03.chonweb.vn/wp-content/uploads/2021/03/jacket-bomber-pb-1.jpg' className='product_img-img'></img>
                    <div className="product_cart">
                        <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                        <BsFillHeartFill className='heart'></BsFillHeartFill>
                    </div>
            </div>
            <div className="product_title">
                <div className="product_title-heading">
                    <p>Jacket bomber pb</p>
                </div>
                <div className="product_star">
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="product_title-price">
                        <p>300.000 đ</p>
                </div>
    
            </div>
        </Col>  
    </Row>
    {!brand? <Pagination defaultCurrent={1} total={50} className='pagini' />: <div className='showmore__block'><button className='showmore' variant="light">Show More</button></div>}
    
   </Container>
   
  )
}

export default Product