import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, ArrowRight, BadgeIndianRupee, Trash2 } from 'lucide-react';
import { Property } from '@/data/properties';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  property: Property;
  onRemove?: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onRemove }) => {
  const formatPrice = (price: number) => {
    const priceInINR = price;
    if (priceInINR >= 10000000) {
      return `₹${(priceInINR / 10000000).toFixed(2)} Cr`;
    }
    if (priceInINR >= 100000) {
      return `₹${(priceInINR / 100000).toFixed(2)} Lac`;
    }
    return `₹${priceInINR.toLocaleString()}`;
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
    <Card className="overflow-hidden property-card-hover h-full">
      <div className="relative">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="h-60 w-full object-cover"
        />
        <Badge className={`absolute top-4 left-4 ${getStatusColor(property.status)}`}>
          {property.status}
        </Badge>
        {onRemove && (
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => onRemove(property.id)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove property</span>
          </Button>
        )}
      </div>
      
      <CardContent className="pt-6">
        <h3 className="text-xl font-serif font-semibold mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm truncate">{property.address}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-estate-primary font-semibold text-lg">
            <BadgeIndianRupee size={16} className="mr-1" />
            {formatPrice(property.price)}
          </div>
          <Badge variant="outline" className="text-estate-secondary border-estate-secondary">
            {property.type}
          </Badge>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 border-t pt-4">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div>
            <span>{property.area} sqft</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link 
          to={`/property/${property.id}`}
          className="text-estate-secondary hover:text-estate-primary flex items-center text-sm font-medium transition-colors"
        >
          View Details
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
