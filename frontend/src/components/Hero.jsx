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
}