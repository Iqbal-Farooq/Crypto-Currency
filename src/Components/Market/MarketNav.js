
import React from 'react'
import './marketnav.css'
import {BiSearchAlt2} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import All from '../Coins/All'
const MarketNav = () => {
  return (<>
  <div className='container main_wrapper'>
    <div className='container market_nav'>
<div className="top_nav">

<h3>Crypto</h3>
<Link to='/search'><BiSearchAlt2 /></Link>

</div>
<div className="topsec_nav">

    <Link to='/all'>All</Link>
    <Link to='/top_gainers'>Top Gainers</Link>
    <Link to='/top_losers'>Top Losers</Link>
</div>
        
    </div>
    </div>
    {/* <div><All /></div> */}

    </>
  )
}

export default MarketNav