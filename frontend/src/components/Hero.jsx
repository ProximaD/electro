import React from 'react';
import { Flame, CheckCircle } from 'lucide-react';

const Hero = () => {
    const handleShopNow = () => {
        //Scroll to products section
        document.getElementById('products') ?.scrollIntoView({ behavior: 'smooth' });
    };

    const HandleCallNow =() => {
        //Open phone dialer
        window.location.href='tel:+254712345678';
    };

return (
<section id="home"
className="pt-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">

{/* Background overlay*/}
<div className="absolute insert-0 bg-white/20"></div>
);
}