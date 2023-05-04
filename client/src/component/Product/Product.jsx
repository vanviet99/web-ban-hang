import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import './product.css'
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Product(props) {
    let brand = props.brand
    let listproduct = props.listproduct
    const nav = useNavigate()
    const handleclick = (ID) => {
        nav(`/${ID}`)
    }
    return (
        <Container>
            <Row>
                <div className="product_headding">
                    <span className='aaaa'></span>
                    <h2>Product</h2>
                    <span className='aaaa'></span>
                </div>
                {listproduct.map(value => {
                    let sum  = 0
                    value.rate.map(value=>{sum += value })
                    console.log(sum);
                    let rate= (sum /value.rate.length).toFixed(1)
                    let rates = rate?rate: 10
                    return (
                        <Col onClick={() => { handleclick(value._id) }} className='product' lg={3}>
                            <div className="product_img">
                                <LazyLoadImage
                                    alt={value.thumb.alt}
                                    effect="black-and-white"
                                    src={value.thumb} />
                                <div className="btnsale">-{value.sale}%</div>
                                <div className="product_cart">
                                    <AiOutlineShoppingCart className='product_cart-cart'></AiOutlineShoppingCart>
                                    <BsFillHeartFill className='heart'></BsFillHeartFill>
                                </div>
                            </div>
                            <div className="product_title">
                                <div className="product_title-heading">
                                    <p>{value.name}</p>
                                </div>
                                <div className="product_star">
                                    { [1, 2, 3, 4, 5].map(value => {
                                        return(
                                            <AiOutlineStar className={value <= rates?'iconsss':''}></AiOutlineStar>
                                        )
                                    })}

                                </div>
                                <div className="product_title-price">
                                    <p>{value.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                </div>

                            </div>
                        </Col>
                    )
                })}


            </Row>
            {/* {!brand ? <Pagination defaultCurrent={1} total={50} className='pagini' /> : <div className='showmore__block'><button className='showmore' variant="light">Show More</button></div>} */}

        </Container>

    )
}

export default Product