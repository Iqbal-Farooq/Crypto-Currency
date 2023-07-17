import React from 'react'
import {CgProfile} from "react-icons/cg"
import {FiUser} from "react-icons/fi"
import {BsBank} from 'react-icons/bs'
import {BiHistory} from 'react-icons/bi'
import {LiaWalletSolid} from 'react-icons/lia'
import {HiDocumentReport} from 'react-icons/hi'
import {RiUserShared2Line} from 'react-icons/ri'
import {AiOutlineSetting} from 'react-icons/ai'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {FiHelpCircle} from "react-icons/fi"
import {FcRating} from 'react-icons/fc'
import {AiOutlineTwitter} from 'react-icons/ai'
import "./profile.css"
const Profile = () => {
  return (
    <div className='container profile_container'>

    <div className='profile_header'>
        <a>
           <CgProfile /> 
        </a>
        <h2>iqbal ahmad</h2>
        <h4>+91-9890765437</h4>
        <h5>xyz@gmail.com</h5>
    </div>
   
   
    
    <div className='account_info'>
    Account info
    <div className='card_one'>
    <a><FiUser /></a>
    <div>
        <h4>
            user verification
        </h4>
        <p>complete your kyc to buy sell and withdraw</p>
    </div>
      
    </div>
    <div className='card_one'>
    <a> <BsBank /></a>
    <div>
    <h4>
      bank details

    </h4>
      
      <p> this account is used to faciliate all your deposits and withdrawls</p>

    </div>
    </div>
    <div className='card_one'>
    <a> <BiHistory /></a>
    <div>
    <h4>
     history

    </h4>
     <p>view your past History</p>
    </div>
    </div>

      <div className='card_one'>
    <a> <LiaWalletSolid /></a>
    <div>
    <h4>
     wallets

    </h4>
      <p>check your wallet balance</p>
  
    </div>
    </div>

        <div className='card_one'>
    <a> <HiDocumentReport /></a>
    <div>
    <h4>
     Reports

    </h4>
      <p>download your acc statement</p>
    </div>
    </div>
<div className='app_setting'>App seeting
    <div className='card_one'>
    <a> <IoIosNotificationsOutline /></a>
    <div>
    <h4>
     notification

    </h4>
   
    </div>
    </div>

   

     <div className='card_one'>
    <a> <AiOutlineSetting /></a>
    <div>
    <h4>
     settings

    </h4>
   
    </div>
    </div>

      <div className='card_one'>
    <a> <RiUserShared2Line /></a>
    <div>
    <h4>
     refer and Earn

    </h4>
   
    </div>
    </div>
    
    </div>
    <div className='help_support'>
    How can we help you

       <div className='card_one'>
    <a> <FiHelpCircle /></a>
    <div>
    <h4>
    Help & support

    </h4>
    <p>create a ticket and we will contact you</p>
    </div>
    </div>

        <div className='card_one'>
    <a> <AiOutlineTwitter/></a>
    <div>
    <h4>
    follow us on twitter

    </h4>
      <p>get the latest news and views</p>
  
    </div>
    </div>

          <div className='card_one'>
    <a> <FcRating/></a>
    <div>
    <h4>
    Rate us

    </h4>
        <p>tell us what you think</p>
  
    </div>
    </div>


    </div>
    </div>

   
    
  




    </div>


  )
}

export default Profile