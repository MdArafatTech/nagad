import React from 'react';
import footerIconLeft from "../assets/footer1.jpg";
import footerIconRight from "../assets/nogod-icon.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="bg-white py-8 px-4 rounded-t-3xl mt-10"
      style={{
        boxShadow: "0 20px 30px red, 0 -10px 30px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Logo */}
        <div className="w-32">
          <a href="/">
            <img src={footerIconLeft} alt="Footer Left Logo" className="w-full h-auto object-contain" />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-gray-700 text-2xl">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-600 transition" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-600 transition" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-blue-800 transition" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-black transition" />
          </a>
        </div>

        {/* Right Logo */}
        <div className="w-32">
          <a href="/">
            <img src={footerIconRight} alt="Footer Right Logo" className="w-full h-auto object-contain" />
          </a>
        </div>
      </div>

      <hr className="border-t border-black my-6" />

      <div className="px-[4%]">
        <div className="md:px-10 flex flex-col md:flex-row justify-between gap-6">
          
          {/* Left Text and Button */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-red-500 mb-4">
              To make your life easier, download the Nagad app and access all our services from a single touchpoint.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.konasl.nagad&hl=bn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white px-6 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition"
            >
              Download App
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-4 text-center md:text-left">
            <Link to="/terms" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition">
              Terms of Use
            </Link>
            <Link to="/nagadfaq" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border text-center border-red-500 transition">
              FAQ
            </Link>
            <Link to="/media" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition">
              Media Center
            </Link>
            <Link to="/contact" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-white hover:text-red-500 border border-red-500 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nagad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
