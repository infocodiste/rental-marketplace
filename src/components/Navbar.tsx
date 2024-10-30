import { Home, User, LogIn } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">RentHub</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">List Your Property</button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900">
              <User className="w-5 h-5" />
              Account
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}