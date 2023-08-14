import React, {useState} from 'react';
import { Row, Col, Container, Nav, Navbar, Image, Card, Offcanvas,ButtonGroup,Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import {Badge, Divider, Rating} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_TO_CART, ADD_QUINTITY, DECREMENT_QUINTITY } from '../state/action';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [totalPrise, setTotalPrice] = useState(0);
    const cartItem = useSelector((state)=> state.allCarts.cart);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const numberFormat = (value) =>
      new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
    }).format(value);

    const AddCartQnty = useCallback((data)=>{ 
        dispatch(ADD_QUINTITY(data));   
    },[dispatch])

    const DecrementCartQnty = useCallback((id)=>{  
        dispatch(DECREMENT_QUINTITY(id));   
    },[dispatch])
    
    
    const handleRemoveCartItem = (id)=>{
      dispatch(REMOVE_TO_CART(id));
    }

    const total = useCallback(()=>{
      let price = 0;
      cartItem.map((el, i)=> {
         price = parseInt(el.price) * parseInt(el.quantity) + price;
         return price;
      });
      setTotalPrice(price);
    },[cartItem])

    
    useEffect(()=>{
      total();
    }, [total])


    const AddedCartItem = ()=>{ 
      return cartItem.map((el, index)=>{ 
          return (           
            <Row key={index} className='d-flex justify-conten-beween my-3' >
              <Col lg={12}>
                <Card>
                  <Card.Body>
                    <Row className='my-1'>
                      <Col xs md={3} className='overflow-hidden'>
                        <Link to={`/cart-details/${el.id}`} onClick={handleClose}><Image src={el.image} rounded  style={{width:140, marginLeft:-34 }} /></Link>
                      </Col>
                      <Col>
                        <Card.Subtitle style={{minHeight:40}} >
                          <Link to={`/cart-details/${el.id}`} onClick={handleClose}>{el.title}</Link>
                        </Card.Subtitle>
                        <Row className='my-3'>
                          <Col>
                            <Card.Text> {numberFormat(el.price)}</Card.Text>
                          </Col>
                          <Col className='d-flex justify-content-end'><Rating className="read-only" size="small" value={parseInt(el.rating)} readOnly /></Col>
                        </Row>
                        <Row>
                          <Col>
                            <Card.Text>Quintity: {el.quantity}</Card.Text>
                          </Col>
                          <Col>
                            <ButtonGroup aria-label="Add Quintity" size="sm">
                              <Button variant="primary" onClick={() => DecrementCartQnty(el.id)}>-</Button>
                              <Button variant="light" disabled>{el.quantity}</Button>
                              <Button variant="primary" onClick={() => AddCartQnty(el)}>+</Button>
                            </ButtonGroup>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs md={2}><DeleteIcon className='cursor-pointer' onClick={() => handleRemoveCartItem(el.id)} style={{color:'#f00'}}></DeleteIcon></Col>
                    </Row>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>            
          )
        
        })      
    }
  return (
   <>
    <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src="./logo.png" width={40} alt='' /> RK Developer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
          </Nav>
          <div className='text-white'>
            <strong>Item Cart </strong>
            <Badge style={{cursor: 'pointer'}} badgeContent={cartItem.length} color="success" onClick={handleShow}>
                <ShoppingCartIcon />
            </Badge>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart Box</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  { cartItem.length? (
                    <>
                    { AddedCartItem()}
                    <Divider></Divider>
                    <h4>Total: {numberFormat(totalPrise)}</h4>
                    </>
                  )
                  :(
                    <Row className='my-3'>
                      <Col><Card.Text>Your Cart Is Empty <img src='./img/cart.gif' style={{width:'20%'}} alt='cart icon' /></Card.Text></Col>
                    </Row>
                  )}
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Container>
      </Navbar>
   </>
  )
}

export default Header