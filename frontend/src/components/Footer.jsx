import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Electro Kenya</h2>
          <p className="text-sm leading-relaxed mb-4">
            Powering Kenyan homes with reliable, affordable, and energy-efficient electric appliances.
          </p>
          <div className="flex items-center gap-3">
            <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#products" className="hover:text-orange-500 transition">Products</a></li>
            <li><a href="#features" className="hover:text-orange-500 transition">Why Us</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>Returns & Refunds</li>
            <li>Shipping Information</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div id="contact">
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <div className="flex items-center gap-2 text-sm mb-2">
            <Phone className="w-4 h-4 text-orange-500" /> +254 700 123 456
          </div>
          <div className="flex items-center gap-2 text-sm mb-2">
            <Mail className="w-4 h-4 text-orange-500" /> support@electrokenya.co.ke
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-orange-500" /> Nairobi, Kenya
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} <span className="text-orange-500 font-semibold">Electro Kenya</span>.  
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
