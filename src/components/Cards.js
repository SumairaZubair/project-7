import React from 'react';
// import {useNavigate} from 'react-router-dom';
import './Card.css'
function CardsApi(props) {
   const{id,title,image,price,description}=props
  //  const navigate = useNavigate()
   return (
    // <div className='content' >
    //     <div className='display' key={id}>
    //     <div className='image'>
    //       <img src={image} alt='photo' className='photo'></img>
    //     </div>
    //     <div className="item-info">
		// 					<header>
		// 						<h4>{title.substring(0,15)}</h4>
		// 						<h4 className="price">${price}</h4>
		// 					</header>
		// 					<p className="item-text"><i>{description.substring(0, 60)}</i></p>
    //           {/* <button onClick={()=>{}}>Add to card</button> */}
		// 				</div>
    //     </div>
					
    //                 </div>
    <div className="Card-container" >
              <div className="menu-item" key={id}>
                <img src={image} alt={title} className="cardimg" />
                
                <div className="item-info">
                  
                  <header>
                    <h4>{title.substring(0, 13)}</h4>
                    <h3 className="cardprice">${price}</h3>
                  </header>
                  <p className="item-text">
                    <i>{description.substring(0, 100)}</i>
                  </p>
                </div>
              </div>

              {/* <CardsApi key={product.id} product={product} /> */}
      
            </div>

    
  )
}

export default CardsApi