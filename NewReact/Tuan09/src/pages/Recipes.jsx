import { CheckCircle2, ChevronRight, Star, Clock, Heart } from 'lucide-react';

const relatedRecipes = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 min', rating: 4.8, img: '/images/visily-image-32.png' },
  { id: 2, title: 'Vegetable and meat stew', time: '45 min', rating: 4.9, img: '/images/visily-image-72.png' },
  { id: 3, title: 'Roasted chicken with vegetables', time: '60 min', rating: 4.7, img: '/images/visily-image-93.png' },
];

export default function Recipes() {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-0 min-h-[620px] rounded-3xl overflow-hidden my-6 shadow-xl border border-gray-100">
        <div className="lg:w-1/2 bg-white p-10 md:p-14 flex flex-col justify-center">
          <div className="flex items-center text-sm mb-8 text-gray-400 gap-2">
            <span>Recipes</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-pink-500 font-medium">Subscribe</span>
          </div>

          <p className="text-gray-500 font-semibold text-sm uppercase tracking-widest mb-4">
            This recipe is exclusively available to subscribers
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-500 leading-tight mb-8">
            Join now to access effortless, hassle-free recipes
          </h1>

          <ul className="space-y-4 mb-10">
            {[
              "20,000+ recipes to suit all tastes and skill levels",
              "Filter for diets, cook times, and more",
              "Personal Recipe Box for favorites",
              "Gain exclusive access to our subscriber-only mobile app",
            ].map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-pink-500 pl-5 mb-8 bg-pink-50/60 py-3 pr-4 rounded-r-2xl">
            <div className="text-3xl font-extrabold text-gray-900">
              0.25<span className="text-xl">USD</span>
              <span className="text-base font-semibold text-gray-400 ml-1">/ Week</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">Billed as $1 every 4 weeks for the first year</p>
          </div>

          <button className="w-full sm:w-auto px-12 py-4 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition-all shadow-xl shadow-pink-500/30 mb-3">
            Subscribe Now
          </button>
          <p className="text-pink-400 text-sm font-medium cursor-pointer hover:underline">
            Cancel or Pause anytime
          </p>
        </div>

        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-0">
          <img
            src="/images/visily-image-130.png"
            alt="Featured Recipe"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      <div className="max-w-xl mx-auto bg-white border border-gray-100 rounded-3xl p-10 shadow-lg text-center mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-pink-500"></div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/images/visily-group-15.png" alt="Chefify" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-extrabold text-pink-500">Chefify</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3">Subscribe to Chefify Cooking only</h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.
        </p>

        <div className="space-y-3 mb-8 text-left">
          <label className="flex items-center gap-4 p-4 border-2 border-pink-500 rounded-2xl bg-pink-50/50 cursor-pointer">
            <input type="radio" name="plan" className="w-5 h-5 accent-pink-500" defaultChecked />
            <div>
              <span className="font-bold text-gray-900">$2</span>
              <span className="text-gray-500 text-sm"> /month</span>
              <span className="text-gray-400 text-xs ml-2">(Billed every 4 weeks)</span>
            </div>
          </label>
          <label className="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-2xl hover:border-pink-200 cursor-pointer transition-colors">
            <input type="radio" name="plan" className="w-5 h-5 accent-pink-500" />
            <div>
              <span className="font-bold text-gray-900">$20</span>
              <span className="text-gray-500 text-sm"> /year</span>
              <span className="text-gray-400 text-xs ml-2">(Billed annually)</span>
            </div>
          </label>
        </div>

        <button className="w-full py-4 bg-pink-500 text-white rounded-2xl font-bold text-base hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/20 mb-4">
          Subscribe Now
        </button>
      </div>

      <div className="px-6 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedRecipes.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-pink-500 shadow-sm hover:bg-pink-50 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">{r.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {r.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-pink-400" /> {r.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
