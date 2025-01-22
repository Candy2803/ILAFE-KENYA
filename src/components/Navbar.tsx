import React, { useState } from 'react';

interface NavbarProps {
  onApplyClick: () => void;
}

const Navbar: React.FC<NavbarProps>  = ({onApplyClick}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl">ILAFE KENYA</span>
          </div>
          {/* Hamburger icon for mobile */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Full Navbar for Large Screens */}
          <div className="hidden sm:flex sm:space-x-8">
            <a href="#" className="hover:text-blue-200 mt-2">Home</a>
            <a href="#about" className='hover:text-blue-200 mt-2'>About</a>
            <a href="#badges" className='hover:text-blue-200 mt-2'>Badges</a>
            <a href="#services" className="hover:text-blue-200 mt-2">Services</a>
            <button onClick={onApplyClick} className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md">
              Start Application
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-80 z-50 flex justify-center items-center`}>
        <div className="flex flex-col space-y-4 text-center text-lg">
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-black text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times; {/* This is the "×" close symbol */}
          </button>

          <a href="#" className=" text-black hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className=" text-black hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#badges" className="text-black hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>Badges</a>
          <a href="#services" className=" text-black hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <button
            className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md"
            onClick={onApplyClick}
          >
            Start Application
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
