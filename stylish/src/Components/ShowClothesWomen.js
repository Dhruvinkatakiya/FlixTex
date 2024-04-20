import React from 'react'
import Navbar from './Navbar';
import men from '../../src/Assests/women.png';
import Bottombar from './Bottombar';
import Womenclothes from './Womenclothes.js';



function ShowClothesWomen() {
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
        <Womenclothes />        
             <Bottombar />
       </>
    </div>
  )
}

export default ShowClothesWomen


