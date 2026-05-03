import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Banner() {
  const { isLoggedIn, setShowLoginModal } = useAuth();

  return (
    <section className="w-full">
      {!isLoggedIn ? (
        <div className="w-full rounded-3xl my-6 overflow-hidden relative shadow-md min-h-[450px] flex flex-col items-center justify-center text-center group cursor-pointer">
          <img
            src="/images/visily-image-32.png"
            alt="Welcome to Chefify"
            className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
          <div className="relative z-20 px-6 py-12 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Discover Your Next <br /> <span className="text-pink-400">Favorite Recipe</span>
            </h1>
            <p className="text-gray-100 mb-10 max-w-2xl text-lg md:text-xl mx-auto drop-shadow-md font-medium">
              Chefify is your personal recipe box. Search thousands of recipes, plan your meals, and get inspired every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => setShowLoginModal(true)} className="px-8 py-3.5 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-lg shadow-pink-500/30">
                Get Started for Free
              </button>
              <Link to="/pricing" className="px-8 py-3.5 bg-white/20 backdrop-blur-md text-white border-2 border-white/50 rounded-full font-bold text-lg hover:bg-white/30 transition shadow-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-3xl my-6 overflow-hidden relative shadow-md min-h-[400px] flex items-center group cursor-pointer">
          <img
            src="/images/visily-image-32.png"
            alt="Recipe of the day"
            className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 pointer-events-none" />
          <div className="relative z-20 p-10 md:p-14 w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center text-left">
            <span className="text-pink-400 font-extrabold uppercase tracking-widest text-xs mb-4 block">Recipe of the day</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              Delicious <br /> Sweet & Savory <br /> Pancakes
            </h1>
            <p className="text-gray-200 mb-8 text-base leading-relaxed drop-shadow-md">
              Start your day right with fluffy pancakes, topped with fresh berries and maple syrup.
            </p>
            <button className="px-8 py-3 bg-pink-500 text-white rounded-full font-bold text-sm hover:bg-pink-600 transition shadow-lg shadow-pink-500/30 w-fit">
              View Recipe
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
