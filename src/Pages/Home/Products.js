
import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import { ADD_TO_CART } from '../../state/action'
import { useDispatch } from 'react-redux'

const Products = ({pData}) => {
  const dispatch = useDispatch();
 const handlarAddCart = (data)=>{
  dispatch(ADD_TO_CART(data))
 }
  
  const proData = ()=>{
    return pData.map((d, index) =>  
      (        
        <Col xs={12} md={6} lg={3} key={index} className='d-flex align-items-stretch py-2' >
          <Card>
            <Card.Img className='my-3' variant="top" src={d.image} alt={d.title} />
            <Card.Body>
              <Card.Subtitle style={{minHeight:40}}>{d.title}</Card.Subtitle>
              <Row className='my-3'>
                <Col><Card.Text> <img src="./img/currency-rupee.svg" alt='' width="15" />{d.price}</Card.Text></Col>
                <Col className='d-flex justify-content-end'><Rating className="read-only" value={parseInt(d.rating)} readOnly /></Col>
              </Row>
              
              <Button className='w-100' variant="primary" onClick={()=> handlarAddCart(d)}>Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      )
    );
  }

  
  return (
    <> 
    <Container>
      <Row className='my-5'>
        <h2>Mobile Showcase</h2>
        {proData()}
      </Row>      
    </Container>
    </>
  )
}

export default Products