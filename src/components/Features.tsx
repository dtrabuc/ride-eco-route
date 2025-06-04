
import React from 'react';
import { Car, CreditCard, Shield, Star, Zap, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Car,
      title: "Véhicules certifiés",
      description: "Marques françaises et européennes fiables : Peugeot, Citroën, Renault, Mercedes, BMW, Dacia, Toyota",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Énergie verte",
      description: "Privilégiez les véhicules électriques pour des trajets 100% écologiques",
      color: "bg-green-500"
    },
    {
      icon: CreditCard,
      title: "Système de crédits",
      description: "20 crédits offerts à l'inscription. Payez facilement vos trajets",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Trajets sécurisés",
      description: "Conducteurs vérifiés et système d'évaluation communautaire",
      color: "bg-orange-500"
    },
    {
      icon: Star,
      title: "Avis modérés",
      description: "Système d'avis transparent et modéré par notre équipe",
      color: "bg-yellow-500"
    },
    {
      icon: Heart,
      title: "Impact positif",
      description: "Chaque trajet partagé contribue à réduire la pollution",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir EcoRide ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une plateforme complète pensée pour allier praticité, sécurité et respect de l'environnement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${feature.color} p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
