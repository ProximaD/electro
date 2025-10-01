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
                    </div>
                </div>
            </div>
        </section>
    )
}
