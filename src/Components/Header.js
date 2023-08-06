import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge, Menu,MenuItem} from '@mui/material';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {usePopupState,bindTrigger,bindMenu,} from 'material-ui-popup-state/hooks'

const Header = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
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
            <Badge badgeContent={4} color="success" {...bindTrigger(popupState)}>
                <ShoppingCartIcon />
            </Badge>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile Profile Profile Profile</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
            </Menu>
          </div>
        </Container>
      </Navbar>
   </>
  )
}

export default Header