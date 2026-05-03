import { useState } from 'react';
import { Share2, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from '../components/home/RecipeCard';

export default function RecipeBox() {
  const [activeTab, setActiveTab] = useState('Saved Recipes');
  const { savedRecipes } = useRecipes();

  return (
    <div className="w-full py-8 px-6 max-w-7xl mx-auto">
      <div className="text-sm mb-4">
        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <span className="text-gray-400 mx-2">{'>'}</span>
        <span className="text-pink-500 font-medium">Your Recipe Box</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Recipe Box</h1>

      <div className="bg-white rounded-3xl p-8 mb-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-shrink-0">
          <img
            src="/images/visily-avatar-42.png"
            alt="User"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-sm"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Welcome to your personal recipe box. Here you can find all your saved culinary inspirations and manage your folders.
          </p>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <span className="text-pink-500 font-bold text-lg">{savedRecipes.length} Saved Recipes</span>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 transition shadow-lg shadow-pink-500/30">
              <Share2 className="w-4 h-4" /> Share Box
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-10 border-b border-gray-100 pb-2">
        {['Saved Recipes', 'Folders', 'Recently Viewed'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-bold transition-all ${activeTab === tab
                ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                : 'bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {savedRecipes.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <Bookmark className="w-12 h-12 text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500 font-medium">You haven't saved any recipes yet.</p>
          <Link to="/" className="text-pink-500 font-bold hover:underline mt-2 inline-block">Explore Recipes</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12">
          {savedRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

      {savedRecipes.length > 0 && (
        <div className="flex justify-center items-center gap-2 pt-8 border-t border-gray-100">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center">1</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
