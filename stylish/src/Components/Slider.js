import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa'; // Importing the filled circle icon
import bg1 from '../../src/Assests/men/header3.png';
import bg2 from '../../src/Assests/women/header4.png';
import bg3 from '../../src/Assests/men/header1.png';
import bg4 from '../../src/Assests/women/header5.png';

function Slider() {
  const slides = [
    { url: bg1 },
    { url: bg2 },
    { url: bg3 },
    { url: bg4 },
    // { url: bg6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval when component unmounts
    };
  }, [currentIndex]);

  function prevSlide() {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='relative w-full h-[56.25vw] max-h-[580px] overflow-hidden'> {/* 16:9 aspect ratio */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.url} alt={`Slide ${index}`} className='w-full h-full object-cover' />
        </div>
      ))}
      <div className='absolute top-0 left-0 w-full h-full flex justify-between items-center'>
        {/* Left Arrow */}
        <div className='pl-4'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} className='text-white cursor-pointer' />
        </div>
        {/* Right Arrow */}
        <div className='pr-4'>
          <BsChevronCompactRight onClick={nextSlide} size={30} className='text-white cursor-pointer' />
        </div>
      </div>
      <div className='absolute bottom-4 left-0 w-full flex justify-center'>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 cursor-pointer ${index === currentIndex ? 'text-white' : 'text-gray-400'}`}
          >
            <FaCircle size={20} className='inline-block' /> {/* Replacing with the filled circle icon */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
