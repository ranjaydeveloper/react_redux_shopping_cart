import React, {useState} from 'react';
import { Row, Col, Container, Nav, Navbar, Image, Card, Offcanvas,ButtonGroup,Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge, Rating} from '@mui/material';
import { useSelector } from 'react-redux';

const Header = () => {
    
    const cartItem = useSelector((state)=> state.allCarts.cart);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const AddedCartItem = ()=>{
      return cartItem.map((el, index)=>{
          return (
            <Row key={index} className='d-flex justify-conten-beween my-3' >
              <Col lg={12}>
                <Card>
                  <Card.Body>
                    <Row className='my-1'>
                      <Col xs md={4} className='overflow-hidden'><Image src={el.image} rounded  style={{width:140, marginLeft:-30 }} /></Col>
                      <Col>
                        <Card.Subtitle style={{minHeight:40}}>{el.title}</Card.Subtitle>
                        <Row className='my-3'>
                          <Col><Card.Text> <img src="./img/currency-rupee.svg" alt='' width="15" />{el.price}</Card.Text></Col>
                          <Col className='d-flex justify-content-end'><Rating className="read-only" value={parseInt(el.rating)} readOnly /></Col>
                        </Row>
                        <ButtonGroup aria-label="Add Quintity" size="sm">
                          <Button variant="primary">-</Button>
                          <Button variant="light" disabled>{el.quantity}</Button>
                          <Button variant="primary">+</Button>
                        </ButtonGroup>
                      </Col>
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
          <Navbar.Brand href="#home"><img src="./logo.png" width={40} alt='' /> RK Developer</Navbar.Brand>
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
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              {AddedCartItem()}
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Container>
      </Navbar>
   </>
  )
}

export default Header