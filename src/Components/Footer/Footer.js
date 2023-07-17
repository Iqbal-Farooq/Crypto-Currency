import React from 'react'
import "./footer.css"
import {AiOutlineHome} from "react-icons/ai"
import {MdAutoGraph} from 'react-icons/md'
import {FaBookReader} from "react-icons/fa"

const Footer = () => {
  return (<div className='footer_container' >
  <div className='container footer_logos'>
        <div>
            <a href=''>{<AiOutlineHome />}</a>
            <p>home</p>
        </div>
         <div>
            <a href=''>{<MdAutoGraph />}</a>
            <p>market</p>
        </div>
         <div>
            <a href=''>{<FaBookReader />}</a>
            <p>About-crypto</p>
        </div>
    </div>
    </div>
  )
}

export default Footer;