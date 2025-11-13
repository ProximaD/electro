import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      quote: "Electro Kenya helped me reduce my carbon footprint by 40% in just 3 months. The appliances are incredibly energy-efficient!",
      author: "Katy Wanjiku",
      role: "Student & Environmental Enthusiast",
      initial: "K",
      bgColor: "from-pink-50 to-purple-50",
      avatarColor: "bg-green-500"
    },
    {
      quote: "I decided to switch to solar-powered devices from Electro Kenya, and the impact on my energy bills has been phenomenal.",
      author: "Walter Otieno",
      role: "Camper & Nature Lover",
      initial: "W",
      bgColor: "from-green-50 to-turquoise-50",
      avatarColor: "bg-green-500"
    },
    {
      quote: "Back in the day, I was skeptical about energy-efficient appliances. But Electro Kenya's products have truly transformed my lifestyle for the better.",
      author: "Ibrahim Hassan",
      role: "Electrical Engineer",
      initial: "I",
      bgColor: "from-yellow-50 to-orange-50",
      avatarColor: "bg-yellow-500"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ELECTRO Kenya
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">4.9/5 from 10,000+ users</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className={`bg-gradient-to-br ${review.bgColor} rounded-2xl p-8`}>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{review.quote}"</p>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                  {review.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{review.author}</div>
                  <div className="text-sm text-gray-600">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

              {/* Payment Illustration */}
        <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Accepted Payments</h3>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/M-PESA_LOGO-01.svg" alt="Mpesa" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-8" />
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Powered by secure and verified payment partners.
          </p>
        </div>
    </section>
  );
}