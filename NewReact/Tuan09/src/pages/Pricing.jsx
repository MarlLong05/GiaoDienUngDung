import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="w-full py-16 px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-lg text-gray-500">Upgrade to Pro for unlimited access to premium recipes, meal planning, and more.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <div className="flex-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic</h2>
            <div className="mt-6 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            {['Access to 1,000+ free recipes', 'Basic recipe box', 'Community support'].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-xl font-semibold text-pink-600 bg-pink-50">Current Plan</button>
        </div>

        <div className="flex-1 bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl relative transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
            Most Popular
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Pro</h2>
            <div className="mt-6 flex items-baseline">
              <span className="text-4xl font-extrabold text-white">$9.99</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8">
            {['Unlimited access to all recipes', 'Advanced meal planner', 'Ad-free experience'].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-500 shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="block w-full py-3 text-center rounded-xl font-semibold text-white bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/20 transition-all">
            Upgrade to Pro
          </Link>
        </div>
      </div>
    </div>
  );
}
