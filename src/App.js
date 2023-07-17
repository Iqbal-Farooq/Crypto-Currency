import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import MainHeader from './Components/Header/MainHeader';
import Footer from './Components/Footer/Footer'
import Fetchcoins from './Components/Coins/Fetchcoins';

function App() {
return(<>
<MainHeader />
  <Fetchcoins />
  <Footer />
</>)
 
}

export default App;
