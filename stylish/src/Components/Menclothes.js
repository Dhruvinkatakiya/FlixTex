import React, { useState, useEffect } from 'react';
import i1 from "../../src/Assests/men/indo3.png";
import i2 from "../../src/Assests/men/sherwani.png";
import i3 from "../../src/Assests/men/indo1.png";
import i4 from "../../src/Assests/men/indo2.png";
import i5 from "../../src/Assests/men/kurta1.png";



function Menclothes() {
  const [clothesData, setClothesData] = useState([]);

  useEffect(() => {
    // Fetch products data from the API
    fetch('http://localhost:8081/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => setClothesData(data))
      .catch(error => console.error('Error fetching products:', error)); // Log error to console
  }, []);

  const handleSubmit = async (productId) => {
    const email = localStorage.getItem('email')

    await fetch(`http://localhost:8081/cart/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'email': email // Include the email as a header
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Product added to cart:', data.product);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  }


  const getImageSource = (index) => {
    switch (index % 10) {
      case 0:
        return i1;
      case 1:
        return i2;
      case 2:
        return i3;
      case 3:
        return i4;
      case 4:
        return i5;
      case 5:
        return i3;
      case 6:
        return i3;
      default:
        return i1;
    }
  };

  let maleClothData = clothesData.filter(item => item.Gender === "Male");

  return (

    <div className="flex flex-wrap justify-center">
      {maleClothData.map((item, index) => (
        <div key={index} className="group my-10 mx-4 flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition duration-300 ">
          <a className="relative flex h-96 overflow-hidden rounded-xl" href={item.link}>
            <img className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105" src={getImageSource(index)} alt="product image" />
            <div className="absolute bottom-0 mb-4 flex space-x-2 w-full justify-center">
              <div className="rounded-full h-2 w-2 bg-gray-200 border-2 border-white"></div>
              <div className="rounded-full h-2 w-2 bg-gray-200 border-2 border-white"></div>
              <div className="rounded-full h-2 w-2 bg-gray-200 border-2 border-white"></div>
            </div>
          
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href={item.link} className="text-lg font-semibold text-gray-800 hover:text-slate-900">{item.Name}</a>
            <div className="mt-2 mb-3 flex items-center justify-between">
              <p>
                <span className="text-xl font-semibold pr-1 text-gray-800">₹{item.DiscountPrice}</span>
                <span className="text-sm text-gray-500 line-through">₹{item.MRP}</span>
              </p>
              <div className="flex items-center space-x-2">
                <select
                  className="border border-gray-300 rounded-md px-3 m-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <button className="flex items-center justify-center rounded-md bg-slate-900 px-2 py-2 mr-3 text-sm font-medium text-white hover:bg-yellow-500 hover:text-black" onClick={() => handleSubmit(item.ProductID)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex row">AddCart</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menclothes;
