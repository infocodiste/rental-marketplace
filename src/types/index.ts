export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  amenities: string[];
  owner: User;
  available: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'renter';
  properties?: Property[];
}

export interface Filter {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  location?: string;
}