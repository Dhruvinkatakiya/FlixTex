import React from 'react';
import shopby from "../../src/Assests/category.png";
import Bottombar from './Bottombar';
import men from '../../src/Assests/mens.png';
import women from '../../src/Assests/women.png';
import Four1 from './Four1';
import Malecollection from './Malecollection';
import Womencollection from './Womancollection';


function Homepage() {
  return (
    <div className="home-container">
     <Four1 />
      <div className="flex justify-center items-center mx-auto mt-4 mb-10 md:mt-0 p-4 md:p-0">
        <img src={shopby} alt="Logo" className="h-10 md:h-8 lg:h-6 mr-2" />
      </div>
      <div className="flex justify-left items-center mx-auto mt-10 mb-5 md:mt-0 ml-10 p-4 md:p-0">
        <img src={men} alt="Logo" className="h-10 md:h-8 lg:h-6 mr-2" />
      </div>
      
    <Malecollection />
    
     <div className="flex justify-left items-center  mx-auto mt-10 mb-5 md:mt-0 ml-10 p-4 md:p-0">
        <img src={women} alt="Logo" className="  h-10 md:h-8 lg:h-6 mr-2" />
      </div>
      <Womencollection />

      <Bottombar />
    </div>
  );
}

export default Homepage;
