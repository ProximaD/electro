import React from 'react';
import { Flame, CheckCircle } from 'lucide-react';

const Hero = () => {
    const handleShopNow = () => {
        //Scroll to products section
        document.getElementById('products') ?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCallNow =() => {
        //Open phone dialer
        window.location.href='tel:+254712345678';
    };

    return (
        <section id="home" 
        className="min-h-screen flex items-center justify-center m-0 p-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">

            {/* Background overlay */}
            <div className="absolute inset-0 bg-white/20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left column- Text content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                            <Flame className="h-4 w-4 mr-2" />
                            Kenya's #1 Electric Cooking Solution
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Cook Smarter with
                            <span className="text-orange-500 block">
                                Electro Plates
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Transform your kitchen with energy efficient, safe, and modern electric cooking plates.
                            Perfect for apartments, offices, and modern homes across Kenya.
                        </p>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                        onClick={handleShopNow}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                            Shop Now - Free Delivery
                        </button>

                        <button
                        onClick={handleCallNow}
                        className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                            Call: 0700 123 456
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            2-Year Warranty
                        </div>

                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            30-Day Money Back Guarantee
                        </div>

                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            Free Shipping
                        </div>
                    </div>
                </div>

                {/*Right column - Hero Image */}
                <div className="relative">
                    {/* Background decoration */} 
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl transform rotate-6 opacity-20"></div>

                    {/* Main Product Image */}
                    <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" 
                    alt="Electro electric plate"
                    className="relative z-10 w-full h-auto rounded-3xl shadow-2xl" 
                    />

                    {/* Price Badge */}
                    <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold z-20">
                        From KSh 3,200
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Hero;
