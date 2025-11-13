import React from "react";
import { ShieldCheck, CreditCard, Smile, Star } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20" id="features">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Headline */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Secure. Simple. Seamless.
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Shop confidently with fast checkout, verified payments, and happy customers across Kenya.
        </p>

        {/* --- Features --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <ShieldCheck className="mx-auto text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Trusted Security</h3>
            <p className="text-gray-600 text-sm">
              Every payment is protected with bank-grade encryption — so you stay safe.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <CreditCard className="mx-auto text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Payments</h3>
            <p className="text-gray-600 text-sm">
              Pay via Mpesa, Mastercard, or Visa — in seconds, not minutes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <Smile className="mx-auto text-yellow-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Happiness</h3>
            <p className="text-gray-600 text-sm">
              We’re here to make your experience smooth, fun, and 100% hassle-free.
            </p>
          </div>
        </div>

        {/* --- Testimonials --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">What our shoppers say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Achieng’ W.", quote: "Smooth checkout and my order arrived on time!" },
              { name: "Brian K.", quote: "Loved that I could pay with Mpesa instantly." },
              { name: "Zawadi M.", quote: "Beautiful products and great customer care!" },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex justify-center mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">"{t.quote}"</p>
                <h4 className="text-sm font-semibold text-gray-800">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* --- Payment Illustration --- */}
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

      </div>
    </section>
  );
};

export default FeaturesSection;
