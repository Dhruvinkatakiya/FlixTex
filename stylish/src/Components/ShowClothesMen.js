import React from 'react'
import Navbar from './Navbar';
import men from '../../src/Assests/mens.png';
import Bottombar from './Bottombar';
import Showclothes from './Menclothes';

function ShowClothesMen() {
  return (
    <div>
     <>
             <div className="grid grid-rows-1 divide-y ">
                 <Navbar />
                 <div className="flex flex-wrap justify-center  ">
                     <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                         <img src={men} alt="Product Image" className="w-full h-10 " />
                   </div>
                 </div>
             </div>
             <Showclothes />
        
             <Bottombar />
       </> 
    </div>
  )
}

export default ShowClothesMen
