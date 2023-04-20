import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './command.css'
import axios from 'axios';
function Command(props) {
    const dataProduct = JSON.parse(window.localStorage.getItem("listcomment")).reverse()

    const [datacomment, setDataComment] = useState([])
    const [btncolor, setBtncolor] = useState(false)
    const [colorr, setColorr] = useState('')
    function keycomment() {
        setBtncolor(true)
        if (colorr.length == '') {
            setBtncolor(false)
        }
    }

    const productId = props.productId
    const userdata = JSON.parse(window.localStorage.getItem("user"))
    const handlecomment = () => {
        let cmt = document.querySelector(".avsadsad").value
        axios.post("http://localhost:8000/v1/product/comment", { productId: productId, username: userdata.username, cmt: cmt })
            .then(value => {
                console.log(value.data.comment);
                // console.log({ productId: productId, username: userdata.username, cmt: cmt });
                setDataComment(value.data.comment.reverse())
                setColorr('')
            })
            .catch(value => {
                console.log(value);
            })
    }

    return (
        <Container>
            <div className="comment">
                <div className="comment_totle">
                    <p> {datacomment.length>0?datacomment.length: dataProduct.length} Comment</p>
                </div>
                <Row>
                    <Col lg={3}>
                    </Col>
                    <Col lg={9}>
                        <div className="comment_add">
                            <input type="text" placeholder='Add a Comment' onChange={(e) => setColorr(e.target.value)} className='avsadsad' value={colorr} onKeyDown={() => keycomment()} />
                            {btncolor ? <Button className='comment_btn' onClick={handlecomment}>Comment</Button> : <Button variant="secondary">Comment</Button>}
                        </div>
                    </Col> 
                </Row>
                {datacomment.length>0 ?datacomment.map(value => {
                    return (
                        <Row className='comment-comment'>
                            <Col lg={3}>
                                <p>{value.username}</p>
                            </Col>
                            <Col lg={9}>
                               <p> {value.cmt}</p>
                            </Col>
                        </Row>
                    )
                }):dataProduct.map(value => {
                    return (
                        <Row className='comment-comment'>
                            <Col lg={3}>
                                <p>{value.username}</p>
                            </Col>
                            <Col lg={9}>
                               <p> {value.cmt}</p>
                            </Col>
                        </Row>
                    )
                })}
            </div>
        </Container>
    )
}

export default Command