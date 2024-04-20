import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logopic from "../../src/Assests/logo.png"

function Bottombar() {
  return (
    <footer className="footer p-10 bg-black  text-yellow-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

        <aside className="flex flex-col justify-center items-center md:items-start">
        <img
    src={logopic}
    alt="Logo"
    className="w-40"
    style={{
      
      filter: "drop-shadow(0px 1px 2px rgba(236, 201, 75, 1.0))  drop-shadow(0px -1px 2px rgba(236, 201, 75, 1.0))"    }}
/>


          <p className="text-center md:text-left">Andy Designer Ltd.<br /> since 1992</p>
        </aside>

        {/* Services */}
        <nav className="text-center md:text-left">
          <h6 className="footer-title mb-4">Services</h6>
          <a href="#" className="link link-hover block mb-2">Branding</a>
          <a href="#" className="link link-hover block mb-2">Design</a>
          <a href="#" className="link link-hover block mb-2">Marketing</a>
          <a href="#" className="link link-hover block">Advertisement</a>
        </nav>

        {/* Company Links */}
        <nav className="text-center md:text-left">
          <h6 className="footer-title mb-4">Company</h6>
          <a href="#" className="link link-hover block mb-2">About us</a>
          <a href="#" className="link link-hover block mb-2">Contact</a>
          <a href="#" className="link link-hover block mb-2">Jobs</a>
          <a href="#" className="link link-hover block">Press kit</a>
        </nav>

        {/* Legal Links */}
        <nav className="text-center md:text-left">
          <h6 className="footer-title mb-4">Legal</h6>
          <a href="#" className="link link-hover block mb-2">Terms of use</a>
          <a href="#" className="link link-hover block mb-2">Privacy policy</a>
          <a href="#" className="link link-hover block">Cookie policy</a>
        </nav>
      </div>

      {/* Social Media Links */}

      <div className="flex justify-center md:justify-start mt-8">
        <a href="#" className="link link-hover mr-4"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
        <a href="#" className="link link-hover mr-4"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a href="#" className="link link-hover"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
      </div>
    </footer>
  );
}

export default Bottombar;
