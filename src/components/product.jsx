import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';
import Add from '../Actions/ReduxAction';





const Product = () => {
  const cart=useSelector(state=>state.UpdateCart)
  const dispatch=useDispatch()
  console.log(cart)
  
    const [data,setdata]=useState([]);


   const getData=async ()=>{
    const responce= await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            setdata(responce)
}   

useEffect(()=>{
getData()
},[])

const Sendaddtocart=(list)=>{
  dispatch(Add(list))

}
  return (
    
    <div>
        <div className='ms-5 mt-5 row d-flex gap-5'>
        {
            data && data.map(list=>{
                return (
                    <Card style={{ width: '13rem' , height:'fit content'}} key={list.id}>
                <Card.Img style={{ width: '10rem',height:'10rem' }} variant="top" src={list.image}/>
                <ListGroup variant="flush">
        <ListGroup.Item>{list.title}</ListGroup.Item>
        <ListGroup.Item>Price - ${list.price}</ListGroup.Item>
        <ListGroup.Item>rating :{list.rating.rate}</ListGroup.Item>
        <ListGroup.Item>  <Button onClick={()=>Sendaddtocart(list)} variant="primary">Add to Cart</Button></ListGroup.Item>
      </ListGroup>
    
              </Card>
                )

            })
        }
        
      
     
   
        </div>
    </div>
  )
}

export default Product