

import React from 'react'
import './mainheader.css'
import {CgProfile} from "react-icons/cg"
import {BiSearchAlt2} from 'react-icons/bi'

const MainHeader = () => {
  return (
    <div className='container mainheader_container'>

    <div className="profile">
        
        <CgProfile />
    </div>
    <div className='refer_earn'>
    refer

    </div>
    <div className='search'>
        <BiSearchAlt2 />
    </div>

    </div>
  )
}


export default MainHeader