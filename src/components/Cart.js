import React, { useEffect, useState } from 'react'
import './Cart.css'
// // import { useParams } from 'react-router-dom'
// // import { useParams } from 'react-router-dom'

// import React from "react";


function Cart() {
  const [products,setProducts]=useState([])
  const [mergedData, setMergedData] = useState([]);
  const [itemQuantity ,setItemQuantity]=useState(0)
  // const [quantity, setQuantity]=useState([])
  var total=0
//   const [carts,setCarts]=useState([])
//   // const {userId} = useParams()
    const productsApi = `https://fakestoreapi.com/products`
    
//     const cartsApi = `https://fakestoreapi.com/carts/user/1`

    const fetchProducts = async()=>{
      const res = await fetch(productsApi);
      const productsData = await res.json();
      setProducts(productsData)
    }
    console.log(products ,'all products')
    useEffect(()=>{
      fetchProducts()
     },[])
    useEffect(()=>{ 
         if(products?.length ){
      const getItem = JSON.parse(localStorage.getItem('cart'))||[]
        console.log(getItem ,'jjj')
        const mergedArray = getItem.map(cartItem => {
         const product = products.find(product => product.id === cartItem.productId);
            if (product) {
              return {
                ...product,
                quantity: cartItem.quantity,
              };
            } else {
              return cartItem;
            }
          });
          console.log(mergedArray,'kjgfds')
          setMergedData(mergedArray)
      
}},[products])
    console.log(mergedData,'mergedata')
    return (
    <div className='addTocart'>
     <div className='addItem'>
      <div className='header'>
        <h2>MY CART</h2>
        <p>PRODUCTS YOU LIKE TO BUY</p>
      </div>
      <div className="cart-list">
  {mergedData.map((item) => {
total+=item.price*item.quantity
return (
  <div className="carts-list">
     <img src={item.image} alt={item.title} className="image"/>

    <br />
    <div className="tag">
    <p className="price">${item.price}<br/></p>
    <p className="cart-title">{item.title}</p>
    <div className="quan-save">

    <button className="save"> ❤ Save  later</button>
    {/* <span>{item.price * item.quantity}</span> */}
    {/* <button className="quantity"  >{item.quantity}</button> */}
    <div className='quan-btn'>
     <button onClick={()=> setItemQuantity(()=>{{item.quantity--}})}>-</button>
    <span className="quantity"> Quantity: {item.quantity}</span>

     <button onClick={()=> setItemQuantity(item.quantity++)}>+</button>

    {/* <p className="quantity"> Quantity: {item.quantity}</p> */}
    </div>
    </div>
</div>
  </div>
);
})}
<h2 className="subtotal">SUB-TOTAL: ${total.toFixed(2)}</h2>
  </div>
      </div>
     <div className='addDetails'>  
     
      <h1>TOTAL</h1>
      <h3 className="subtotal1">SUB-TOTAL: <span>${total.toFixed(2)}</span></h3>
      <p>Delivery</p>
     <p>Stantdard delivery  (Free)</p>
      </div>
     
      </div>
  
  
  
    
   
  )
}

export default Cart