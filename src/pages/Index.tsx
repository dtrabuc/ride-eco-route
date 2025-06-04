
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <Hero />
      <SearchForm />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
