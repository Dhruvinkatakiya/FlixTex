import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOut, faShoppingCart, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import logopic from '../../src/Assests/logo.png';
import CartSidebar from './CartSidebar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const email = localStorage.getItem("email");

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    const confirmSignOut = window.confirm('Are you sure you want to log out?');
    if (confirmSignOut) {
      localStorage.clear();
      window.location.href = '/home';
    }
  };

  return (
    <nav className="bg-transparent w-full top-0 py-4">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        <div className="flex items-center h-10">
          <a href="/home">
            <img src={logopic} alt="Logo" className="w-40" />
          </a>
        </div>
        <div className="lg:hidden relative">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </button>
          <div className="lg:hidden relative">
            <button className="focus:outline-none" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
            </button>
            {isOpen && (
              <div className="absolute top-8 right-0 w-32 z-10 bg-black shadow-lg rounded-lg lg:hidden">
                <ul className="text-center text-sm py-2">
                  <li><a href="men" className="text-white hover:text-yellow-500 block py-2">MEN</a></li>
                  <li><a href="#experience" className="text-white hover:text-yellow-500 block py-2">WOMEN</a></li>
                  <li><a href="#projects" className="text-white hover:text-yellow-500 block py-2">SALE</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex gap-8">
            <li><Link to="http://localhost:3000/men" className="text-lg text-black hover:text-yellow-500">MEN</Link></li>
            <li><Link to="http://localhost:3000/women" className="text-lg text-black hover:text-yellow-500">WOMEN</Link></li>
            <li><Link to="http://localhost:3000/store" className="text-lg text-black hover:text-yellow-500 mr-4">STORE</Link></li>
          </ul>
          <div className="flex items-center justify-center ml-4">
            {email ? (
              <>
                <div className="relative flex items-center px-4 py-2 bg-yellow-500 text-black rounded-md">
                  <FontAwesomeIcon icon={faCircleUser} size="lg" />
                  <span className="ml-2">{email}</span>
                </div>
                <div className="ml-2">
                  <button onClick={handleSignOut} className="bg-yellow-500 text-black rounded-md hover:bg-black hover:text-yellow-500 transition duration-300" style={{ padding: "7px" }}>
                    <FontAwesomeIcon icon={faSignOut} size="lg" />
                  </button>
                </div>
              </>
            ) : (
              <button className="bg-yellow-500 text-black rounded-md px-4 py-2 hover:bg-black hover:text-yellow-500 transition duration-300" onClick={() => window.location.href = '/'}>
                <FontAwesomeIcon icon={faCircleUser} size="lg" />
                <span className="ml-2 font-semibold ">Login Now</span>
              </button>
            )}
          </div>
          <div className="ml-3 text-yellow-500 hover:text-black transition duration-300">
            <button onClick={() => setShowSidebar(!showSidebar)} className="focus:outline-none">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            </button>
          </div>
        </div>
      </div>
      <CartSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </nav>
  );
}

export default Navbar;
