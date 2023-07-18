import React from 'react';
import './ScrollingImages.css'; // Import the CSS file containing the styles
import useFetchcoins from '../Components/Coins/useFetchcoins';
const ScrollingImages = () => {
    const{coins,loading}=useFetchcoins();
  return (
    <div className="container scrolling-container">
{coins.map((coin,index)=>{return  <div className=" container scrolling-images">
<img src={coin.image} alt={`image${index}`} />
 
  </div>})}
     

     
    </div>
  );
};

export default ScrollingImages;