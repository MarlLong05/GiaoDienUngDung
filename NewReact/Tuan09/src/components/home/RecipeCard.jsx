import { Clock, Bookmark, Play } from 'lucide-react';
import { useRecipes } from '../../context/RecipeContext';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe, type = 'standard' }) {
  const { savedRecipeIds, toggleSaveRecipe } = useRecipes();
  const isSaved = savedRecipeIds.includes(recipe.id);

  return (
    <Link to={`/recipes/${recipe.id}`} className="group cursor-pointer block">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm border border-gray-100 bg-white">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.target.src = 'https://placehold.co/400x400?text=Food'}
        />
        
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-pink-500 fill-pink-500 ml-0.5" />
            </div>
          </div>
        )}

        <button
          onClick={(e) => { 
            e.preventDefault();
            e.stopPropagation(); 
            toggleSaveRecipe(recipe.id); 
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-sm z-10 ${isSaved ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-400 hover:bg-pink-50'
            }`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
        </button>
      </div>
      <div className="px-1">
        <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2">{recipe.title}</h3>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-500 text-sm font-semibold px-3 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5" /> {recipe.time}
          </span>
          {recipe.rating && (
            <span className="text-xs font-bold text-yellow-500 flex items-center gap-0.5">
              ★ {recipe.rating}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
