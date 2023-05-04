import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineStar } from "react-icons/ai";
import './evaluate..css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Evaluate(props) {
    let product = props.product
    let productId = props.productId
    const [show, setShow] = useState(false);
    const [countRate, setCountRate] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let A = [1, 2, 3, 4, 5]
    const handleChooseRate = (rate) => {
        setCountRate(rate)
    }
    let token = JSON.parse(window.localStorage.getItem("user"))?.accesstoken
    const [data, setData] = useState([])
    const handleUpdateRate = (ID) => {
        if (token) {
            axios.post("http://localhost:8000/v1/product/updaterate", { productId: productId, rate: countRate })
                .then(value => {
                    window.localStorage.setItem("updaterate", false)
                    setData(value.data[0])
                })
                .catch(value => {
                    console.log(value);
                })
            console.log(productId, countRate);
        } else {

        }
        setShow(false)
    }

    let totaldata = data.rate?.length > 0 ? data : product
    let list = totaldata?.rate
    let B = A.map(value => {
        let count = 0
        list?.map(value1 => {
            if (value1 == value) { count += 1 }
        })
        value = { rate: value, amount: count, phantram: (count / list?.length) * 100 }
        return value
    })


    return (
        <Container>
            <Row>
                <Col lg={3} className='evaluate_list'>
                    <p className='evaluate_left'>Đánh Giá ({list?.length})</p>
                </Col>
                <Col lg={9} className='evl'>
                    <p className='evaluate_center' > Đánh giá Túi Shoulder Bag móc treo rua rua DFJL</p>
                    {B.map(value => {
                        return (
                            <Row className='evaluate'>
                                <Col lg={9}>
                                    <Row>
                                        <Col lg={1}>
                                            {value.rate} <AiOutlineStar className='evaluate_icon'></AiOutlineStar>
                                        </Col>
                                        <Col span={11}>
                                            <ProgressBar variant="warning" now={value.phantram} />
                                            {/* <progress max={100} value={value.phantram} variant="warning" className='progress'></progress> */}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={3}>
                                    <span>{ value.phantram?  value.phantram.toFixed(2): 0}% | {value.amount? value.amount: 0} đánh giá</span>
                                </Col>
                            </Row>
                        )
                    })}
                    <Row>
                        <Button variant="primary" onClick={handleShow} className='btn_evaluate'>Đánh Giá Ngay</Button>
                    </Row>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đánh giá sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal__body'>
                    {A.map(value => {
                        return (
                            <div className="modal__body__evaluate">
                                <AiOutlineStar onClick={() => { handleChooseRate(value) }} className={`evaluate_icon evaluate__star  ${value <= countRate ? "action__evaluate__star" : ""}`} id={value}></AiOutlineStar>
                                <p className={` ${value <= countRate ? "action__evaluate__star" : ""}`}>{value} Sao</p>
                            </div>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                     <Button variant="primary" onClick={() => { handleUpdateRate() }}>
                        Xác nhận
                    </Button> 

                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Evaluate