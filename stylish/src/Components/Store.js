import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import Navbar from "./Navbar"; 
import location from '../../src/Assests/location.png';
import Bottombar from "./Bottombar";

const StoreLocationInfo = ({ name, address, phoneNumber, getLocation }) => {
    return (
      <div>
        <h2 className="text-2xl text-black font-semibold mb-4">{name}</h2>
        <h2 className="font-semibold mb-4 text-gray-600">{address}</h2>
        
        <p className="text-gray-600 mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> 
          {phoneNumber}
        </p>
        
        <div className="flex items-center mt-4 mb-2">
          <div className="text-blue-600 hover:text-yellow-500">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 
            <a href={`https://maps.app.goo.gl/VzqtZ8TJp77m8cvD6`}>{getLocation}</a> {/* Address link */}
          </div>
        </div>
      </div>
    );
};

const StoreLocationPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white relative" style={{ backgroundImage: `url(${location})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
        <h1 className="text-4xl font-extrabold mb-8 text-center relative z-10">OUR STORE</h1> {/* z-10 ensures it's above the overlay */}
        <div className="max-w-7xl px-4 w-full md:px-0 md:flex relative z-10">
          <div className="bg-white rounded-lg shadow-md p-8 md:w-1/2 md:mr-4 mb-8 md:mb-0">
            <StoreLocationInfo
              name="FLIXTIX - WEDDING CLOTHING HUB"
              address="8th Floor, Avadh Textile Market, Opp New Bombay Market, Sahara Darwaja, Umarwada, Surat, Gujarat 395010"
              phoneNumber="9944778855"
              getLocation="Get Location"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 md:w-1/2 md:ml-4 mb-8 md:mb-0">
            <StoreLocationInfo
              name="FLIXTIX - WEDDING CLOTHING HUB"
              address="101-110, Anupam Business Hub, Yogichowk, to, Mahalaxmi Road, Surat, Gujarat 395010"
              phoneNumber="9944756655"
              getLocation="Get Location"
            />
          </div>
        </div>
      </div>
      <Bottombar/>
    </>
  );
};

export default StoreLocationPage;
