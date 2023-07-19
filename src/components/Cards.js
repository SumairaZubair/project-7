import React from 'react'

function CardsApi(props) {
   const{id,title,image,price,description}=props
  return (
    <div className='content'>
        <div className='display'>
        <div className='image'>
          <img src={image} alt='photo' className='photo'></img>
        </div>
        <div className="item-info">
							<header>
								<h4>{title.substring(0,15)}</h4>
								<h4 className="price">${price}</h4>
							</header>
							<p className="item-text"><i>{description.substring(0, 60)}</i></p>
						</div>
        </div>
					
                    </div>

    
  )
}

export default CardsApi