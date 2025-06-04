
import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const SearchForm = () => {
  const [departure, setDeparture] = useState('Toulouse');
  const [arrival, setArrival] = useState('Lyon');
  const [date, setDate] = useState('');

  const cities = [
    'Paris', 'Toulouse', 'Bordeaux', 'Lyon', 'Strasbourg', 
    'Nantes', 'Marseille', 'Lille', 'Nice', 'Montpellier'
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Rechercher un covoiturage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select 
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select 
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Rechercher</span>
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Suggestion d'itinéraire populaire :</p>
            <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full text-green-700">
              <span className="font-semibold">{departure} → {arrival}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
