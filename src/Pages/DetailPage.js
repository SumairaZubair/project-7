import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Cart from '../components/Cart';
// import AddToCart from './Cart';
// import NavBar from '../components/NavBar'
// import Cards from '../components/Cards'
// import CardsApi from '../components/Cards';

const DetailPage = () => {
  // const [item, setItem]=useState([])
  //  const location = useLocation();
  const [data, setData] = useState([])
  const { id } = useParams()
  // console.log(id, "navi")
  const API = `https://fakestoreapi.com/products/${id}`
  // console.log(API ,'real')
  useEffect(() => {
    fetch(API).then(j => j.json()).then(daTa =>
      setData(daTa))
    // console.log(data, 'apiiiii')
  }, [])


  const [cartt, setCart] = useState()
  const cartApi = `https://fakestoreapi.com/carts`

  useEffect(() => {
    fetchCart()

  }, [])
  const fetchCart = async () => {
    const response = await fetch(cartApi);
    const cart = await response.json();
    setCart(cart);
    // console.log(cartt, 'data');
  }
  //  const result = cartt.map((itemm) => ({
  //         id: itemm.id,
  //         product: itemm.products,
  //         // product: products.find(id=>id.productId === item.productId)
  //       }));
  // console.log(result,'result')
  // localStorage.setItem('cart', JSON.stringify([{ productId:1, quantity: 1 }]))
  const addToCart = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const isProductExist = cart.find(item => item.productId === data.id)
    console.log(isProductExist, 'exist')
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
        {/* <div className='item-info'>{data && data.category}</div> */}
        <div className='image1'>
          <img src={data && data.image} alt='photo' className='photo1'></img>
        </div>
        <div className="item-info1">
          <header>
            <h4 className='heading1'>{data && data.title}</h4>
            {/* <br></br> */}
          </header>
          <p className="price1">${data && data.price}</p>
          <hr />
          <p className="item-text1"><i>{data && data.description}</i></p>
          {/* <p className='item-text'>{data && data.count}</p> */}
          <Link to={`/cart`} >
            <button className='addToCart' onClick={() => addToCart(id)} >Add to card</button></Link>
        </div>
      </div>
    </div>
  )
}

export default DetailPage