import React from 'react'
import './coins.css'


const Coin = ({image,name,sm,price,volume,pricechange,marketcap}) => {
  
    return (
     
  
        <div className=" container coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <div className='sy_name'>
                    <p className="coin-symbol">{sm}</p>

                      <p className='c_name'>{name}</p>

                    </div>
                  
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price"> ₹{price}</p>
                   {pricechange<0 &&(
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    )}
                    
                     {  pricechange >= 0 && pricechange !==null && <p className="coin-percent green">{pricechange.toFixed(2)}%</p>} 
                    
               
              
                </div>
            </div>
            
        </div>
          
    )
}

export default Coin