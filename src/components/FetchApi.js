import React,{useEffect,useState} from 'react'
// import CardsItems from './Cards'
import CardsApi from './Cards'
// import Cards from './Cards'
function FetchApi() {
    const API_URL = 'https://fakestoreapi.com/products'
    // console.log(API_URL)
    const [api,setApi]=useState([])
    useEffect(() => {
        fetch(API_URL).then(t => t.json()).then(data =>
            setApi(data))
            console.log(api)
      },[])
      return(
        <div className='container'>
            {api.map((item =>{
               return(
                 <CardsApi
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                description={item.description}
            />)
            }))}
        </div>
      )
   

  


   
  
}

export default FetchApi