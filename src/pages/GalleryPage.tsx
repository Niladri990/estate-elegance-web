
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';

const GalleryPage = () => {
  const allImages = properties.reduce((acc, property) => {
    const propertyImages = property.images.map(image => ({
      src: image,
      alt: property.title,
      type: property.type
    }));
    return [...acc, ...propertyImages];
  }, [] as {src: string; alt: string; type: string}[]);
  
  const [filter, setFilter] = useState('All');
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const propertyTypes = ['All', ...Array.from(new Set(properties.map(p => p.type)))];
  
  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(image => image.type === filter);

  const openLightbox = (imageSrc: string) => {
    setActiveImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-estate-primary text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gallery</h1>
            <p className="text-xl max-w-3xl">
              Browse our collection of beautiful properties and interior designs.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {propertyTypes.map(type => (
                  <Button
                    key={type}
                    variant={filter === type ? "default" : "outline"}
                    onClick={() => setFilter(type)}
                    className={filter === type ? "bg-estate-primary" : ""}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden shadow-md h-64 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(image.src)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No images found for this filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {activeImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-w-4xl max-h-[80vh]" onClick={e => e.stopPropagation()}>
              <img 
                src={activeImage} 
                alt="Property" 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
