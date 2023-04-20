import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './description.css'
function Description(props) {
  let data = props.data
  return (
    <Container fluid>
            <Container>
              <div className="description">
                <div className="description_heading">
                    <h3>MÔ TẢ CHI TIẾT</h3>
                </div>
                <Row className='description-title'>
                  <Col lg={3}>  
                    <p>MÔ TẢ</p>
                  </Col>
                  <Col lg={9}>
                  <p>{data}</p>
                  </Col>
                </Row>
              </div>
            </Container>
        </Container>
  )
}

export default Description