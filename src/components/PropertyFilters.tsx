import { Search, SlidersHorizontal } from 'lucide-react';
import type { Filter } from '../types';

interface PropertyFiltersProps {
  filters: Filter;
  onFilterChange: (filters: Filter) => void;
}

export function PropertyFilters({ filters, onFilterChange }: PropertyFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.location || ''}
              onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
            />
          </div>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <select
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.bedrooms || ''}
            onChange={(e) => onFilterChange({ ...filters, bedrooms: Number(e.target.value) })}
          >
            <option value="">Beds</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}+ beds</option>
            ))}
          </select>
          
          <select
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.minPrice || ''}
            onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
          >
            <option value="">Min Price</option>
            {[1000, 2000, 3000, 4000, 5000].map((price) => (
              <option key={price} value={price}>${price.toLocaleString()}</option>
            ))}
          </select>
          
          <select
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.maxPrice || ''}
            onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
          >
            <option value="">Max Price</option>
            {[2000, 3000, 4000, 5000, 6000].map((price) => (
              <option key={price} value={price}>${price.toLocaleString()}</option>
            ))}
          </select>
          
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
            <SlidersHorizontal className="w-5 h-5" />
            More Filters
          </button>
        </div>
      </div>
    </div>
  );
}