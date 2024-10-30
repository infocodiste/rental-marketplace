import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">${property.price.toLocaleString()}/mo</h3>
          <span className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </span>
        </div>
        
        <h4 className="text-lg font-medium mb-2">{property.title}</h4>
        
        <div className="flex items-center gap-4 text-gray-600">
          <span className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            {property.bedrooms} beds
          </span>
          <span className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            {property.bathrooms} baths
          </span>
          <span className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </div>
  );
}