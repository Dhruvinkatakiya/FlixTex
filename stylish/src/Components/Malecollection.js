import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import i1 from "../../src/Assests/men/indo2.png"; 
import i2 from "../../src/Assests//men/sherwani.png"; 
import i3 from "../../src/Assests//men/kurta1.png"; 

function Malecollection() {
    const [clothItems, setClothItems] = useState([]);

    useEffect(() => {
        // Fetch clothing items data from backend server
        fetch('http://localhost:8081/clothItems')
            .then(response => response.json())
            .then(data => setClothItems(data))
            .catch(error => console.error('Error fetching cloth items:', error));
    }, []);
        
    const getImageSource = (index) => {
        switch (index % 3) {
            case 0:
                return i1;
            case 1:
                return i2;
            case 2:
                return i3;
            default:
                return i1;
        }
    };

    let maleClothItems = clothItems.filter(item => item.gender === "Male");

    return (
        <div>
            <div className="flex flex-row overflow-auto ml-24 mx-auto space-x-2 justify-center">
                {maleClothItems.map((item, index) => (
                    <div key={index} className="group my-10 mx-4 flex flex-col border-gray-100 bg-white" style={{ width: '250px', marginRight: index !== clothItems.length - 1 ? '80px' : 0 }}>
                        <a className="relative flex items-start justify-start overflow-hidden rounded-xl" href={item.link} style={{ height: '389px' }}>
                            <img className="absolute top-0 right-0 h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src={getImageSource(index)} alt="product image" />
                        </a>
                        <div className="mt-2 pb-5">
                            <a href={item.link} className="m-0 text-lg font-semibold text-gray-800 hover:text-slate-900">{item.name}</a>
                            <div className="flex items-start justify-between">
                                <p>
                                    <span className="text-sm font-semibold text-gray-400">Explore Now!</span>
                                </p>
                                <div className="flex-initial">
                                    <a href={item.link} className="flex items-end justify-end rounded-md px-3 py-1.5 text-sm pl-20 font-medium text-black">
                                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Malecollection;
