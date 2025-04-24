
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')" }}>
      <div className="hero-overlay"></div>
      <div className="container-custom h-full flex flex-col justify-center relative z-10">
        <div className="max-w-2xl">
          <span className="px-3 py-1 bg-estate-accent text-white rounded-md inline-block mb-4">Premium Properties</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-lg">
            Discover a curated selection of the finest properties in the most desirable locations. Your journey to finding the perfect home starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-estate-primary hover:bg-estate-secondary text-white px-8 py-6 text-lg">
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white px-8 py-6 text-lg backdrop-blur-sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 hidden lg:block">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="col-span-5 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Looking for</label>
              <select className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary">
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            <div className="col-span-5 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary">
                <option>Any Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Commercial</option>
              </select>
            </div>
            <div className="col-span-5 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary">
                <option>Any Location</option>
                <option>New York</option>
                <option>Boston</option>
                <option>San Francisco</option>
                <option>Miami</option>
                <option>Chicago</option>
              </select>
            </div>
            <div className="col-span-5 md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <select className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary">
                <option>Any Price</option>
                <option>$100k - $300k</option>
                <option>$300k - $500k</option>
                <option>$500k - $800k</option>
                <option>$800k - $1M</option>
                <option>$1M+</option>
              </select>
            </div>
            <div className="col-span-5 md:col-span-1">
              <Button className="w-full bg-estate-primary hover:bg-estate-secondary h-10 mt-5">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
