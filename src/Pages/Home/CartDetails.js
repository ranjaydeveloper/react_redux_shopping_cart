import React,{useCallback} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProdData from './productsdata.json';
import { useSelector } from 'react-redux';
import { Card, Col, Container, Row, ButtonGroup,Breadcrumb } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { ADD_TO_CART, ADD_QUINTITY, DECREMENT_QUINTITY, REMOVE_TO_CART } from '../../state/action'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const CartDetails = () => {
  const navigation = useNavigate();
  const [bTitle, setBTititle] = useState();
  const param = useParams();
  const stateData = useSelector((state)=> state.allCarts.cart);
  const dispatch = useDispatch();
  const handlarAddCart = (data)=>{
      dispatch(ADD_TO_CART(data)); 
      toast.success('Item Add In Your Cart');   
  }
  const AddCartQnty = useCallback((data)=>{ 
      dispatch(ADD_QUINTITY(data));   
  },[dispatch])

  const DecrementCartQnty = useCallback((id)=>{  
      dispatch(DECREMENT_QUINTITY(id));   
  },[dispatch])

  const handleRemoveCartItem = (id)=>{
    dispatch(REMOVE_TO_CART(id));
    navigation('/');
  }

  const numberFormat = (value) =>
      new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
    }).format(value);

  useEffect(()=>{
    const jsData = ProdData.filter((elm)=>{ return elm.id === param.id; })
    setBTititle(jsData[0].title);
  },[param])
 
  const ProductDeatil = ()=>{ 
    let ProductData = [];   
    const fdata = stateData.filter((elm) => { return elm.id === param.id; });
    const jData = ProdData.filter((elm)=>{ return elm.id === param.id; })
    if(fdata.length === 0){
      ProductData = jData[0];
    }else{
      ProductData = fdata[0];
    }
    
    return(
      <Row className='my-5'>        
        <Col xs md={4} className='mx-3 overflow-hidden'><img src={ProductData.image} alt={ProductData.title} style={{marginLeft:'-20%'}} /></Col>
        <Col>
          <Card className='py-5 px-3'>
              <Card.Title style={{minHeight:40}}>{ProductData.title}</Card.Title>
              <Card.Text>Whether you're creating templates or trying to plan out a document, dummy text is a useful filler. So, here are the ten best generators online.</Card.Text>
              <Card.Text>1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase</Card.Text>
              <Row className='my-3'>
                <Col><Card.Title>Price: {numberFormat(ProductData.price)}</Card.Title></Col>
                <Col className='d-flex justify-content-end'><Rating className="read-only" value={parseInt(ProductData.rating)} readOnly /></Col>
              </Row>
              {ProductData.quantity === 0?(
                <Button className='w-100' variant="contained"  startIcon={<ShoppingCartRounded />} onClick={()=> handlarAddCart(ProductData)}>Add To Cart</Button>
              ):(
                <Row>
                  <Col>
                    <Card.Text><strong>Quintity:</strong> {ProductData.quantity}</Card.Text>
                  </Col>
                  <Col>
                    <ButtonGroup aria-label="Add Quintity" size="sm">
                      <Button variant="primary" style={{background:'#0d6efd',color:'#ffffff',fontSize:45, lineHeight:0, padding:'0px 8px 6px'}} onClick={() => DecrementCartQnty(ProductData.id)}>-</Button>
                      <Button style={{color:'#000000'}} disabled>{ProductData.quantity}</Button>
                      <Button variant="primary" style={{background:'#0d6efd',color:'#ffffff',fontSize:30, lineHeight:0,padding:'0px 8px 0px'}} onClick={() => AddCartQnty(ProductData)}>+</Button>
                    </ButtonGroup>
                  </Col>
                  <Col xs md={2}>Remove: <DeleteIcon className='cursor-pointer' onClick={() => handleRemoveCartItem(ProductData.id)} style={{color:'#f00'}}></DeleteIcon></Col>
                </Row>
              )}              
              
          </Card>
        </Col>
      </Row>
    )
  }

  return (
    <Container>  
      <Breadcrumb className='my-2'>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>{bTitle}</Breadcrumb.Item>
        </Breadcrumb>    
      {ProductDeatil()}
    </Container>
  )
}

export default CartDetails;