import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const DetailPage = () => {

  const [data, setData] = useState([])
  const { id } = useParams()
  const API = `https://fakestoreapi.com/products/${id}`
  useEffect(() => {
    fetch(API).then(j => j.json()).then(daTa =>
      setData(daTa))
  }, [])


  const [cart, setCart] = useState()
  const cartApi = `https://fakestoreapi.com/carts`

  useEffect(() => {
    fetchCart()

  }, [])
  const fetchCart = async () => {
    const response = await fetch(cartApi);
    const cart = await response.json();
    setCart(cart);
  }

  const addToCart = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const isProductExist = cart.find(item => item.productId === data.id)
    // console.log(item.ProductId, 'exist')
    if(isProductExist){
      isProductExist.quantity +=1
    }else{
      cart.push({productId: data.id,quantity:1})
    }
    localStorage.setItem('cart',JSON.stringify(cart));
  }
   

  return (

    <div>
      <div className='display1' key={id}>
        <div className='image1'>
          <img src={data && data.image} alt='photo' className='photo1'></img>
        </div>
        <div className="item-info1">
          <header>
            <h4 className='heading1'>{data && data.title}</h4>
          </header>
          <p className="price1">${data && data.price}</p>
          <hr />
          <p className="item-text1"><i>{data && data.description}</i></p>
          <Link to={`/cart`} >
            <button className='addToCart' onClick={() => addToCart(id)} >Add to card</button></Link>
        </div>
      </div>
    </div>
  )
}

export default DetailPage