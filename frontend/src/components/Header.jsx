import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Zap className="h-10 w-10 text-orange-500" />
                        <span className="ml-2 text-2xl font-bold text-gray-900">Electro</span>
                        <span className="ml-1 text-sm text-gray-600">Kenya</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#home" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300" 
                            onClick={closeMenu}>
                                Home
                            </a>

                            <a href="#products" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300" onClick={closeMenu}>
                                Products
                            </a>

                            <a href="#features" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300" onClick={closeMenu}>
                                Features
                            </a>

                            <a href="#reviews" className="text-gray-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300" onClick={closeMenu}>
                                Reviews
                            </a>
                        </div>
                    </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-orange-500 focus:outline-none">
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute w-full bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium" 
                        onClick={closeMenu}>
                            Home
                        </a>

                        <a href="#products"
                        className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
                        onClick={closeMenu}>
                            Products
                        </a>

                        <a href="#features"
                        className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
                        onClick={closeMenu}>
                            Features
                        </a>

                        <a href="#reviews"
                        className="text-gray-900 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
                        onClick={closeMenu}>
                            Reviews
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;