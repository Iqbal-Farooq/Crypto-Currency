

import React from 'react'
import './mainheader.css'
import {CgProfile} from "react-icons/cg"
import {RiUserShared2Line} from 'react-icons/ri'
import {BiSearchAlt2} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div className='container mainheader_container'>

    <div className="profile">
        
       <Link to='/profile' ><CgProfile /></Link> 
    </div>
    <div className='refer_earn'>
    <a ><RiUserShared2Line /></a>

    </div>
    <div className='search'>
       <Link to=''> <BiSearchAlt2 /> </Link>
    </div>

    </div>
  )
}


export default MainHeader