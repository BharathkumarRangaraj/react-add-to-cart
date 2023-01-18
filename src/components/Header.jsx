import React,{useState} from 'react'
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UpdateCart from '../Reducers/updateCart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Add from '../Actions/ReduxAction';
import removeOne from '../Actions/removeOne';
import Deleteproduct from '../Reducers/deleteProductFromcartAction';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Table } from 'react-bootstrap';
import { TheatersSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';


const Header = () => {
  const [total,settotal]=useState(0)
  const dispatch=useDispatch()
const {cart}=useSelector(state=>state.UpdateCart)

const getTotal = ()=>{
  let price=0
  cart.map(product=>
    price=product.price*product.rating.count+price
    
  )
  settotal(price)
}

useEffect(()=>{
  getTotal()
});



const Sendaddtocart=(product)=>{
  dispatch(Add(product))

}
const sendremoveonefromcart=(product)=>{
  dispatch(removeOne(product))

}
const deleteproduct=(product)=>{
  dispatch(Deleteproduct(product))
}
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <div>
      
         <Navbar bg="dark" variant ='dark' expand="lg">
      <Container className='text-white'>
        <Navbar.Brand href="#home">Add To Cart Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <NavLink className={'text-decoration-none text-white'} to="/">Products</NavLink>
            <NavLink className={'text-decoration-none text-white w-100'}>
              <Badge  
            badgeContent={cart.length} color="primary" style={{float:"right"}}><ShoppingCartIcon 
            onClick={handleClick} />
            </Badge>
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem /*onClick={handleClose}*/>
          {
            cart.length === 0 ? <div>your cart is empty</div>:<div>
              <Table striped bordered hover style={{width:"10rem" }}>
                <thead>
                  <tr>
                  <td>photo</td>
                   <td>Details</td>
                   </tr>
                </thead>
                {
                  cart.map(product=>{
                    return(
                    <tbody key={product.id}>
                      <tr>
                  <td>
                    <img style={{width:'5rem' , height:'5rem'}} src={product.image} />
                  </td>
                  <td>
                    <p>{product.title}</p>
                    <p>price :${product.price}</p>
                    <p>Ratings {product.rating.rate}</p>
                    <div className='d-flex justify-content-between w-50'>
                      <p onClick={ ()=>Sendaddtocart(product)}>+</p>
                      <p>x{product.rating.count}</p>
                      <p onClick={product.rating.count == 1 ?()=>deleteproduct(product): ()=>sendremoveonefromcart(product)}>-</p>
                    </div>
                  </td>
                  <td>
                    <DeleteIcon style={{color:'red',fontSize:'2.5rem'}} onClick={()=>deleteproduct(product)}/>
                  </td>
                  </tr>
                  </tbody>

                  )})
                }
                
                  <tfoot>
                    <tr>
                    <div className='text-center'>total: ${total.toFixed(2)}</div>
                    </tr>
                  </tfoot>
              </Table>
              </div>
          }
          </MenuItem>
        
      </Menu>
    </div>
  )
}

export default Header;