import React from 'react'
import "./footer.css"
import {AiOutlineHome} from "react-icons/ai"
import {MdAutoGraph} from 'react-icons/md'
import {FaBookReader} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (<div className='footer_container' >
  <div className='container footer_logos'>
        <div>
            <Link to='home'>{<AiOutlineHome />}</Link>
            <p>home</p>
        </div>
         <div>
            <Link to='market'>{<MdAutoGraph />}</Link>
            <p>market</p>
        </div>
         <div>
            <Link to='crypto'>{<FaBookReader />}</Link>
            <p>About-crypto</p>
        </div>
    </div>
    </div>
  )
}

export default Footer;