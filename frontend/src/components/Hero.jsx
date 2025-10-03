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
        className="pt-20 bg-gradient-t0-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">

            {/* Background overlay */}
            <div className="absolute insert-0 bg-white/20"></div>

            <div className="grid lg grid-cols-2 gap-12 items-center">
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
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg">
                            Shop Now - Free Delivery
                        </button>

                        <button
                        onClick={handleCallNow}
                        className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
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
                            Free Shipping Nationwide
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
