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
      </div>
    </section>
  );
};

export default FeaturesSection;
