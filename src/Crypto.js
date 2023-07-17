import React, { useEffect, useState } from 'react';

const CryptoComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
         const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (data.length==0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    {
        data.map((coin)=>{return <div>
        <h1>{coin.name}</h1>
        
      <p>Current price:{coin.current_price} </p>
       <p>Current price:{coin.image} </p>
       <img src={coin.image} />
   
   

         </div>})
    }
       </div>
  );
};

export default CryptoComponent;