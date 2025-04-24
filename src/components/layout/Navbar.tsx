
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold text-estate-primary">EstateElegance</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-estate-dark hover:text-estate-secondary transition-colors">Home</Link>
            <Link to="/properties" className="text-estate-dark hover:text-estate-secondary transition-colors">Properties</Link>
            <Link to="/services" className="text-estate-dark hover:text-estate-secondary transition-colors">Services</Link>
            <Link to="/gallery" className="text-estate-dark hover:text-estate-secondary transition-colors">Gallery</Link>
            <Link to="/about" className="text-estate-dark hover:text-estate-secondary transition-colors">About</Link>
            <Link to="/contact" className="text-estate-dark hover:text-estate-secondary transition-colors">Contact</Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="bg-estate-primary hover:bg-estate-secondary transition-colors">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-estate-dark focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-estate-dark hover:text-estate-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="text-estate-dark hover:text-estate-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/services" 
              className="text-estate-dark hover:text-estate-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="text-estate-dark hover:text-estate-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className="text-estate-dark hover:text-estate-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-estate-dark hover:text-estate-secondary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-estate-primary hover:bg-estate-secondary transition-colors w-full">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get In Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
