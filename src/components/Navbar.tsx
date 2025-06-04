
import React, { useState } from 'react';
import { Menu, X, Leaf, User, Car } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              EcoRide
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-green-600 transition-colors">
              Accueil
            </a>
            <a href="#covoiturages" className="text-gray-700 hover:text-green-600 transition-colors">
              Covoiturages
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </a>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Connexion</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#accueil" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
              Accueil
            </a>
            <a href="#covoiturages" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
              Covoiturages
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </a>
            <button className="w-full mt-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <User className="h-4 w-4" />
              <span>Connexion</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
