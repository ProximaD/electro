import React, { useState } from 'react';
import { Star, Truck, ShieldCheck } from 'lucide-react';
import singleElectricPlate from '../assets/products/P01.jpg';
import doubleElectricPlate from '../assets/products/P02.jpg';
import infraredElectricPlate from '../assets/products/P03.jpg';
import electricStovePro from '../assets/products/P04.jpg';
import smartTouchPlate from '../assets/products/P05.png';
import ecoSaverPlate from '../assets/products/P06.jpg';

const Products = () => {
  const [showMore, setShowMore] = useState(false);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const products = [
    {
      id: 1,
      name: "Single Electric Plate",
      price: "KSh 3,200",
      image: singleElectricPlate,
      description: "Compact and portable single burner for quick and efficient cooking — perfect for small spaces.",
      category: "Basic"
    },
    {
      id: 2,
      name: "Double Electric Plate",
      price: "KSh 5,800",
      image: doubleElectricPlate,
      description: "Cook two meals at once with fast-heating technology and energy-efficient performance.",
      category: "Pro"
    },
    {
      id: 3,
      name: "Infrared Electric Plate",
      price: "KSh 6,900",
      image: infraredElectricPlate,
      description: "Modern design with infrared heating for even cooking — stylish and durable for Kenyan homes.",
      category: "Smart"
    },
    {
      id: 4,
      name: "Electric Stove Pro",
      price: "KSh 7,500",
      image: electricStovePro,
      description: "Professional-grade dual stove built for energy efficiency and fast heating performance.",
      category: "Pro"
    },
    {
      id: 5,
      name: "Smart Touch Plate",
      price: "KSh 8,200",
      image: smartTouchPlate,
      description: "Touch-controlled technology for precision cooking — modern and sleek for every kitchen.",
      category: "Smart"
    },
    {
      id: 6,
      name: "Eco Saver Plate",
      price: "KSh 4,900",
      image: ecoSaverPlate,
      description: "Save energy and money with eco-smart design that keeps your meals hot longer.",
      category: "Eco"
    },
  ];

  // Filter and sort logic (optional for now)
  const filteredProducts = category === "All" 
    ? products 
    : products.filter(p => p.category === category);

  const displayedProducts = showMore ? filteredProducts : filteredProducts.slice(0, 3);

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-orange-500">Best Sellers</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our range of electric cooking plates designed for Kenyan kitchens — safe, efficient, and elegant.
        </p>

        {/* 🧠 Filter + Sort Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {["All", "Basic", "Pro", "Smart", "Eco"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === cat
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>Newest</option>
            <option>Popular</option>
            <option>Price (Low–High)</option>
          </select>
        </div>

        {/* Product Grid */}
        <div 
          className={`grid gap-10 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ease-in-out ${
            showMore ? 'max-h-[2000px]' : 'max-h-[900px]'
          } overflow-hidden`}
        >
          {displayedProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-orange-50 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-fit"
              />

              <div className="p-6 text-left space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="text-orange-500 font-bold text-lg">{product.price}</p>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Show Less Button */}
        <div className="mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
          >
            {showMore ? 'Show Less Products' : 'View More Products'}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-700 text-sm">
          <div className="flex items-center">
            <Truck className="text-orange-500 h-5 w-5 mr-2" />
            Free Delivery Nationwide
          </div>
          <div className="flex items-center">
            <ShieldCheck className="text-orange-500 h-5 w-5 mr-2" />
            2-Year Warranty
          </div>
          <div className="flex items-center">
            <Star className="text-orange-500 h-5 w-5 mr-2" />
            4.9/5 Customer Satisfaction
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
