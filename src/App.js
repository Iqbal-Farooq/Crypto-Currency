import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import Footer from './Components/Footer/Footer'
import Fetchcoins from './Components/Coins/Fetchcoins';
import Market from './Components/Market/Market';
import { Routes,Route } from 'react-router-dom';
import Profile from './Components/profile/Profile';
import Home from './Components/Home/Home';
import All from './Components/Coins/All';
import TopGainers from './Components/Coins/TopGainers';
import Toplosers from './Components/Coins/Toplosers';
function App() {
return(<>

  {/* <Fetchcoins /> */}
  <Footer />
  <Routes>
  <Route path="" exact element={<Home />} />
   <Route path="home" exact element={<Home />} />
    <Route path='/profile' exact element={<Profile/>} />
    <Route path='market' exact element={<Market />} />
    <Route path="/all" exact element={<All />} />
    </Routes>
</>)
 
}

export default App;
