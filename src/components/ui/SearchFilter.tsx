
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchFilterProps {
  onFilterChange: (filters: {
    type?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
  }) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    type: '',
    status: '',
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined,
    bedrooms: undefined as number | undefined
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    let parsedValue: string | number | undefined = value;
    
    // Parse numeric values
    if (['minPrice', 'maxPrice', 'bedrooms'].includes(name) && value) {
      parsedValue = parseInt(value, 10);
    }
    
    // If empty string, set to undefined for numeric fields
    if (['minPrice', 'maxPrice', 'bedrooms'].includes(name) && value === '') {
      parsedValue = undefined;
    }
    
    setFilters(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary"
            >
              <option value="">Any Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleChange}
              className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary"
            >
              <option value="">Any Status</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price From</label>
            <select
              name="minPrice"
              value={filters.minPrice?.toString() || ''}
              onChange={handleChange}
              className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary"
            >
              <option value="">No Min</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>
              <option value="300000">$300,000</option>
              <option value="500000">$500,000</option>
              <option value="1000000">$1,000,000</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price To</label>
            <select
              name="maxPrice"
              value={filters.maxPrice?.toString() || ''}
              onChange={handleChange}
              className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary"
            >
              <option value="">No Max</option>
              <option value="300000">$300,000</option>
              <option value="500000">$500,000</option>
              <option value="750000">$750,000</option>
              <option value="1000000">$1,000,000</option>
              <option value="2000000">$2,000,000+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <select
              name="bedrooms"
              value={filters.bedrooms?.toString() || ''}
              onChange={handleChange}
              className="w-full border-gray-200 rounded-md focus:ring-estate-secondary focus:border-estate-secondary"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-5 mt-2">
            <Button type="submit" className="w-full bg-estate-primary hover:bg-estate-secondary">
              <Search className="mr-2 h-4 w-4" /> Search Properties
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;
