import React,{useEffect,useState} from 'react'
// import CardsItems from './Cards'
// import './App.css'
import CardsApi from './Cards'
import { Link, useLocation } from 'react-router-dom'
// import Cards from './Cards'
function FetchApi() {
    const [categories, setCategories] = useState([])
    
    const API_URL = 'https://fakestoreapi.com/products'
    // console.log(API_URL)
    const [api,setApi]=useState([])
    const location = useLocation();
    console.log(location)
    useEffect(() => {
        fetch(API_URL).then(t => t.json()).then(data =>
            setApi(data))
            console.log(api)
      },[])

      const API__CAT= 'https://fakestoreapi.com/products/categories'
      async function fetchData( ){
        let response = await fetch(API__CAT)
        let categoriesData = await response.json();
        setCategories(categoriesData)
        console.log(categories,'category')
      }
      useEffect(()=>{
        fetchData()
      },[])

      const handleCategory = async (category)=>{
        const categoryResult = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        const filterProduct = await categoryResult.json()
        setApi(filterProduct)
console.log(api,'dfghjk')
      }

      return(
        <div>
       <div className='btn-set'>
        {categories.map((category =>{
            return <button className='buttons' onClick={()=>handleCategory(category)}>{category}</button>
        }))}
       </div>
        <div className='section-center'>

            {api.map((item =>{
               return(
                <Link to={`/detailpage/${item.id}`} >
                 <CardsApi
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                description={item.description}          
            />
            </Link>
            )
            }))}
        </div>
        </div>
      )
}

export default FetchApi