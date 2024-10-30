import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PropertyFilters } from './components/PropertyFilters';
import { PropertyCard } from './components/PropertyCard';
import type { Property, Filter } from './types';

// Mock data
const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Luxurious apartment with city views',
    price: 2500,
    location: 'Seattle, WA',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80'],
    amenities: ['Parking', 'Gym', 'Pool'],
    owner: { id: '1', name: 'John Doe', email: 'john@example.com', role: 'owner' },
    available: true
  },
  {
    id: '2',
    title: 'Cozy Suburban House',
    description: 'Family-friendly home with large backyard',
    price: 3200,
    location: 'Bellevue, WA',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2000,
    images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80'],
    amenities: ['Garage', 'Backyard', 'Fireplace'],
    owner: { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'owner' },
    available: true
  },
  {
    id: '3',
    title: 'Luxury Waterfront Condo',
    description: 'High-end living with water views',
    price: 4500,
    location: 'Kirkland, WA',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80'],
    amenities: ['Concierge', 'Spa', 'Rooftop'],
    owner: { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'owner' },
    available: true
  }
];

function App() {
  const [filters, setFilters] = useState<Filter>({});
  
  const filteredProperties = MOCK_PROPERTIES.filter(property => {
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) return false;
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Home</h1>
          <p className="text-gray-600">Explore properties available for rent in your area</p>
        </div>
        
        <PropertyFilters filters={filters} onFilterChange={setFilters} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No properties found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;