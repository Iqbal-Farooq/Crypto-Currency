import React,{useState,useEffect} from 'react'
import Coin from './Coins';
import MarketNav from '../Market/MarketNav';
import useFetchcoins from './useFetchcoins';


const All = () => {
  const{coins,loading}=useFetchcoins();
 
  


  
  return (<>
  <MarketNav />
  

    <div className="coin-app">
     
   
      {!loading ?coins.map(coin=>{
        return(
          <Coin 
          key={coin.id} 
          name={coin.name}
          sm={coin.symbol} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
         
          />
        );
      }):<span className='loader' ></span>}


    </div>
    </>
  );
}

export default All