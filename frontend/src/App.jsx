import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import FeaturesSection from './components/FeaturesSection';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <FeaturesSection />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App; 