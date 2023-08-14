
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { ADD_TO_CART } from '../../state/action'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Products = ({pData}) => {
 const dispatch = useDispatch();
 const handlarAddCart = (data)=>{
    dispatch(ADD_TO_CART(data)); 
    toast.success('Item Add In Your Cart');   
 }
  
  const proData = ()=>{
    return pData.map((d, index) =>  
      (        
        <Col xs={12} md={6} lg={3} key={index} className='d-flex align-items-stretch py-2' >
          <Card>
            <Link to={`/cart-details/${d.id}`}><Card.Img className='my-3' variant="top" src={d.image} alt={d.title} /></Link>
            <Card.Body>
              <Link to={`/cart-details/${d.id}`}><Card.Subtitle style={{minHeight:40}}>{d.title}</Card.Subtitle></Link>
              <Row className='my-3'>
                <Col><Card.Text> <img src="./img/currency-rupee.svg" alt='' width="15" />{d.price}</Card.Text></Col>
                <Col className='d-flex justify-content-end'><Rating className="read-only" value={parseInt(d.rating)} readOnly /></Col>
              </Row>              
              <Button className='w-100' variant="contained"  startIcon={<ShoppingCartRounded />} onClick={()=> handlarAddCart(d)}>Add To Cart</Button>
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