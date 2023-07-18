import React from 'react'
import MarketNav from '../Market/MarketNav'
import useFetchcoins from './useFetchcoins'
import Coin from './Coins'
const TopGainers = () => {
    const{coins,loading}=useFetchcoins();

    const Gainers=[];
    for(let i=0;i<coins.length;i++){
        
            if(coins[i].price_change_percentage_24h >= 0){
                Gainers.push(coins[i]);

            }
        
    }
  let SortedArray=  [...Gainers].sort((a,b)=>b.price_change_percentage_24h-a.price_change_percentage_24h);
  return (<>
    <MarketNav />

      <div className="coin-app">
     
   
      {!loading ?SortedArray.map(coin=>{
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
          // volume={coin.total_volume}
          />
        );
      }):<span className='loader'></span>}


    </div>
  </>
   
  )
}

export default TopGainers