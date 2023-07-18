import React from 'react'
import Coin from './Coins';
import {useState,useEffect} from 'react'

const useFetchcoins = () => {
  const[coins,setCoins]=useState([]);
  const [loading,setLoading]=useState(false)

   useEffect(() => {
    const fetchData = async () => {
         setLoading(true);
      try {
     
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=200&page=1&sparkline=false')
         const jsonData = await response.json();
        console.log(jsonData);
        setCoins(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
        setLoading(false);
    };

    fetchData();
  }, []);
 
  

 
  return {coins,loading};
}

export default useFetchcoins;