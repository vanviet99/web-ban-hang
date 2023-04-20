import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './command.css'
import axios from 'axios';
function Command(props) {
    const [btncolor,setBtncolor] = useState(false)
    const [colorr,setColorr] =useState('')
    function keycomment(){
            setBtncolor(true) 
            if(colorr.length ==''){
                setBtncolor(false)
            }
    }
    const productId = props.productId
    const userdata = JSON.parse(window.localStorage.getItem("user"))
    const handlecomment = ()=>{
        let cmt  = document.querySelector(".avsadsad").value
        axios.post("http://localhost:8000/v1/product/comment", {productId:productId, username:userdata.username, cmt:cmt})
        .then(value=>{
            console.log(value);
        })
        .catch(value=>{
            console.log(value);
        })
        console.log( userdata.username , cmt , productId);
    }
   
  return (
    <Container>
        <div className="comment">
            <div className="comment_totle">
                    <p> 3 Comment</p>
            </div>
           <Row>
            <Col lg={3}>
            </Col>
            <Col lg={9}>
            <div className="comment_add">
                <input type="text" placeholder='Add a Comment' onChange={(e)=>setColorr(e.target.value)} className='avsadsad' value={colorr} onKeyDown={()=>keycomment()}/>
              {btncolor ?   <Button className='comment_btn' onClick={handlecomment}>Comment</Button>: <Button variant="secondary">Comment</Button>}
            </div>
            </Col>
           </Row>
            <Row className='comment-comment'>
                <Col lg={3}>
                    <p>Hà Linh</p>
                </Col>
                <Col lg={9}>
                    Hàng chất lượng
                </Col>
            </Row>
            <Row className='comment-comment'>
                <Col lg={3}>
                    <p>Hà Linh</p>
                </Col>
                <Col lg={9}>
                    Hàng chất lượng
                </Col>
            </Row  >
            <Row className='comment-comment'>
                <Col lg={3}>
                    <p>Hà Linh</p>
                </Col>
                <Col lg={9}>
                    Hàng chất lượng
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default Command