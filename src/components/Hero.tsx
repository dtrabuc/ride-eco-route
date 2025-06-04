
import React from 'react';
import { Leaf, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Voyagez <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">écologique</span>
            <br />
            avec EcoRide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            La plateforme de covoiturage qui respecte l'environnement. 
            Partagez vos trajets, réduisez votre empreinte carbone et découvrez une nouvelle façon de voyager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
              Trouver un covoiturage
            </button>
            <button className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">
              Proposer un trajet
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Écologique</h3>
            <p className="text-gray-600">Réduisez votre empreinte carbone en partageant vos trajets</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Communauté</h3>
            <p className="text-gray-600">Rencontrez des personnes partageant vos valeurs</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pratique</h3>
            <p className="text-gray-600">Voyagez facilement entre les principales villes de France</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
