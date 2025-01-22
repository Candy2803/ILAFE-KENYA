import React from 'react';
// import { Shield } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  return (
    <nav className="bg-blue-900 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            {/* <Shield className="w-8 h-8" /> */}
            <span className="font-bold text-xl">ILAFE KENYA</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-200 mt-2">Home</a>
            <a href="#about" className='hover:text-blue-200 mt-2'>About</a>
            <a href="#badges" className='hover:text-blue-200 mt-2'>Badges</a>
            <a href="#services" className="hover:text-blue-200 mt-2">Services</a>
            <button
              onClick={onApplyClick}
              className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Start Application
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;