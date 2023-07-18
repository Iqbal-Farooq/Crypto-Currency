import React,{ useState,useEffect} from 'react'
import './search.css'
import Coin from './Coins'
import useFetchcoins from './useFetchcoins'
const Search = () => {
    const{coins,loading}=useFetchcoins();
    const[search,setSearch]=useState('');
    const[filtered,setFiltered]=useState([]);

      const handleChange = e =>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
  setFiltered(coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    ) )
  },[search])
 

  return (<>
    <div className='container search_field'>
        <form>
        
            <input
             type='search'
             placeholder='Enter the coin name'
             onChange={handleChange}
             />
        </form>

    </div>
   


     <div className="coin-app">
     
   
      { search !=='' && filtered.map(coin=>{
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
      })}

     

    </div>


    </>

  )
}

export default Search