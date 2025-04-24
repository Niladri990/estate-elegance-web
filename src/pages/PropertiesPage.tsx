
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/property/PropertyCard';
import SearchFilter from '@/components/ui/SearchFilter';
import { filterProperties, properties } from '@/data/properties';

const PropertiesPage = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (filters: {
    type?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
  }) => {
    const results = filterProperties(filters);
    setFilteredProperties(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-estate-primary text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Properties</h1>
            <p className="text-xl max-w-3xl">
              Explore our curated selection of exceptional properties for sale and rent.
            </p>
          </div>
        </div>

        {/* Properties Section */}
        <section className="section-padding">
          <div className="container-custom">
            <SearchFilter onFilterChange={handleFilterChange} />
            
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProperties.length}</span> properties
              </p>
            </div>
            
            {filteredProperties.length > 0 ? (
              <div className="property-grid">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
