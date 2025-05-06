import React from 'react';
import { Link } from 'react-router-dom';
import GujaratYojnaLogo from '../images/GujaratYojnaLogo.png'; // New logo

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 text-black px-6 py-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="flex items-center space-x-3 text-black">
          <img
            src={GujaratYojnaLogo}
            alt="Gujarat Yojna Logo"
            className="h-16 w-auto object-contain"
          />
          {/* Remove the English text if you want only Gujarati text in logo */}
        </Link>

        <div className="flex-1 mx-6 max-w-lg ml-100">
        <input
          type="text"
          placeholder="Search schemes..."
          className="w-full  px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>
        
        <div className="space-x-6 text-lg font-medium">
          <Link to="/" className="hover:underline transition duration-200">Home</Link>
          <Link to="/about" className="hover:underline transition duration-200">About</Link>
          <Link to="/contact" className="hover:underline transition duration-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
