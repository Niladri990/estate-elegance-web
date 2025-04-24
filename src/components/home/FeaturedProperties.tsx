
import React from 'react';
import PropertyCard from '@/components/property/PropertyCard';
import { getFeaturedProperties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties that offer exceptional quality, location, and value.
          </p>
        </div>
        
        <div className="property-grid mb-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-estate-primary hover:bg-estate-secondary px-8">
            <Link to="/properties">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
