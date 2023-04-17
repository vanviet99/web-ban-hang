import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineStar } from "react-icons/ai";
import './evaluate..css'
import Button from 'react-bootstrap/Button';
function Evaluate() {
  return (
    <Container>
        <Row>
            <Col lg={3} className='evaluate_list'>
            <p className='evaluate_left'>Đánh Giá (0)</p>
            </Col>
            <Col lg={9} className='evl'>
            <p className='evaluate_center' > Đánh giá Túi Shoulder Bag móc treo rua rua DFJL</p>
            <Row className='evaluate'>
                <Col lg={9}>
                   <Row>
                   <Col lg={1}>
                        1 <AiOutlineStar className='evaluate_icon'></AiOutlineStar>
                        </Col>
                        <Col span={11}><progress max="number" value="number" className='progress'></progress></Col>
                   </Row>        
                </Col>
                <Col lg={3}>
                    <span>0% | 0 đánh giá</span>
                </Col>
            </Row>
            <Row className='evaluate'>
                <Col lg={9}>
                   <Row>
                   <Col lg={1}>
                        2 <AiOutlineStar className='evaluate_icon'></AiOutlineStar>
                        </Col>
                        <Col span={11}><progress max="number" value="number" className='progress'></progress></Col>
                   </Row>        
                </Col>
                <Col lg={3}>
                <span>0% | 0 đánh giá</span>
                </Col>
            </Row>
            <Row className='evaluate'> 
                <Col lg={9}>
                   <Row>
                   <Col lg={1}>
                        3 <AiOutlineStar className='evaluate_icon'></AiOutlineStar>
                        </Col>
                        <Col span={11}><progress max="number" value="number" className='progress'></progress></Col>
                   </Row>        
                </Col>
                <Col lg={3}>
                <span>0% | 0 đánh giá</span>
                </Col>
            </Row>
            <Row className='evaluate'>
                <Col lg={9}>
                   <Row>
                   <Col lg={1}>
                        4 <AiOutlineStar className='evaluate_icon'></AiOutlineStar>
                        </Col>
                        <Col span={11}><progress max="number" value="number" className='progress'></progress></Col>
                   </Row>        
                </Col>
                <Col lg={3}>
                <span>0% | 0 đánh giá</span>
                </Col>
            </Row>
            <Row className='evaluate'>
                <Col lg={9}>
                   <Row>
                   <Col lg={1}>
                        5 <AiOutlineStar className='evaluate_icon'></AiOutlineStar>
                        </Col>
                        <Col span={11}><progress max="number" value="number" className='progress'></progress></Col>
                   </Row>        
                </Col>
                <Col lg={3}>
                <span>0% | 0 đánh giá</span>
                </Col>
            </Row>
            <Row>
                <Button className='btn_evaluate'>Đánh Giá Ngay</Button>
            </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Evaluate