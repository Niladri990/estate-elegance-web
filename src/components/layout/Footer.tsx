import React from "react";
import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="text-gray-300 mb-4 mt-4">
              Your trusted partner in urban development and real estate solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-estate-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-estate-accent transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-estate-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-estate-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-estate-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-estate-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-estate-accent transition-colors">
                <Link to="/services">Property Sales</Link>
              </li>
              <li className="text-gray-300 hover:text-estate-accent transition-colors">
                <Link to="/services">Property Rentals</Link>
              </li>
              <li className="text-gray-300 hover:text-estate-accent transition-colors">
                <Link to="/services">Property Management</Link>
              </li>
              <li className="text-gray-300 hover:text-estate-accent transition-colors">
                <Link to="/services">Mortgage Services</Link>
              </li>
              <li className="text-gray-300 hover:text-estate-accent transition-colors">
                <Link to="/services">Investment Advisory</Link>
              </li>
              <li className="text-gray-300 hover:text-estate-accent transition-colors">
                <Link to="/services">Home Valuation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-estate-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Estate Street, Real City, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-estate-accent flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-estate-accent flex-shrink-0" />
                <span className="text-gray-300">info@estateelegance.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Home size={20} className="text-estate-accent flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1A1F2C]/80 py-4">
        <div className="container-custom text-center text-sm">
          <p>&copy; {new Date().getFullYear()} S N Urban Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
