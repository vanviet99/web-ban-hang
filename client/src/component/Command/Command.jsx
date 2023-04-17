import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './command.css'
function Command() {
    const [btncolor,setBtncolor] = useState(false)
    const [colorr,setColorr] =useState('')
    function keycomment(){
            setBtncolor(true) 
            if(colorr.length ==''){
                setBtncolor(false)
            }
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
              {btncolor ?   <Button className='comment_btn'>Comment</Button>: <Button variant="secondary">Comment</Button>}
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