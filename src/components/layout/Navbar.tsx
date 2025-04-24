
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-[#F1F0FB] shadow-md py-4">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link text-[#1A1F2C] hover:text-[#9b87f5]">Home</Link>
            <Link to="/properties" className="nav-link text-[#1A1F2C] hover:text-[#9b87f5]">Properties</Link>
            <Link to="/services" className="nav-link text-[#1A1F2C] hover:text-[#9b87f5]">Services</Link>
            <Link to="/gallery" className="nav-link text-[#1A1F2C] hover:text-[#9b87f5]">Gallery</Link>
            <Link to="/about" className="nav-link text-[#1A1F2C] hover:text-[#9b87f5]">About</Link>
            <Link to="/contact" className="nav-link text-[#1A1F2C] hover:text-[#9b87f5]">Contact</Link>
            <Button 
              asChild 
              className="bg-[#9b87f5] text-white hover:bg-[#7E69AB]"
            >
              <Link to="/add-listing">
                <FileText className="mr-2 h-4 w-4" />
                Add Listing
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-[#1A1F2C] hover:bg-[#F1F0FB]">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
