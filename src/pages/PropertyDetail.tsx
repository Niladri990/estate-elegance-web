
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getPropertyById } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, ArrowRight, Check } from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || '');

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-20 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Property Not Found</h1>
          <p className="text-gray-500 mb-8">The property you are looking for does not exist or has been removed.</p>
          <Button asChild className="bg-estate-primary hover:bg-estate-secondary">
            <Link to="/properties">Browse Properties</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    if (property.status === "For Rent") {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'For Sale':
        return 'bg-green-500';
      case 'For Rent':
        return 'bg-blue-500';
      case 'Sold':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Property Header */}
        <div className="bg-estate-dark text-white py-12">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <Badge className={`${getStatusColor(property.status)} mb-3`}>
                  {property.status}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{property.address}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-300 mb-1">Price</div>
                <div className="text-3xl font-serif font-bold">{formatPrice(property.price)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Images */}
        <section className="py-8 bg-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md h-64">
                  <img 
                    src={image} 
                    alt={`${property.title} - Image ${index+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Property Details</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 border-b pb-8">
                    <div>
                      <div className="text-gray-500 text-sm">Property Type</div>
                      <div className="font-semibold">{property.type}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Bedrooms</div>
                      <div className="font-semibold">{property.bedrooms}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Bathrooms</div>
                      <div className="font-semibold">{property.bathrooms}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Area</div>
                      <div className="font-semibold">{property.area} sqft</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Status</div>
                      <div className="font-semibold">{property.status}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold mb-4">Description</h3>
                  <p className="text-gray-600 mb-8">
                    {property.description}
                  </p>
                  
                  <h3 className="text-xl font-serif font-semibold mb-4">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check size={16} className="text-estate-secondary mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-serif font-bold mb-6">Location</h2>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                    Map will be displayed here
                  </div>
                  <p className="mt-4 text-gray-600">
                    {property.address}
                  </p>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                  <h3 className="text-xl font-serif font-semibold mb-6">Contact Agent</h3>
                  <div className="flex items-center mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" 
                      alt="Agent"
                      className="w-16 h-16 object-cover rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-gray-500 text-sm">Sales Agent</div>
                    </div>
                  </div>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input type="text" className="w-full border-gray-200 rounded-md" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full border-gray-200 rounded-md" placeholder="Your email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" className="w-full border-gray-200 rounded-md" placeholder="Your phone" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        className="w-full border-gray-200 rounded-md" 
                        rows={4}
                        placeholder="I'm interested in this property..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-estate-primary hover:bg-estate-secondary">
                      Send Message
                    </Button>
                  </form>
                </div>
                
                <div className="bg-estate-primary/10 rounded-lg p-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">Property Document</h3>
                  <Button asChild variant="outline" className="w-full border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white">
                    <a href="#">
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-estate-dark text-white py-12">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let us help you find the perfect property that meets all your requirements.
            </p>
            <Button asChild className="bg-white text-estate-primary hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
