import { Clock, Bookmark } from 'lucide-react';
import { useState } from 'react';

export default function EditorPickCard({ recipe }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group flex gap-5 bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
      <div className="relative w-36 h-36 flex-shrink-0 rounded-2xl overflow-hidden">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.target.src = 'https://placehold.co/200x200?text=Food'}
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between py-1 relative">
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className={`absolute top-0 right-0 p-1.5 rounded-full transition-all ${saved ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'
            }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-pink-500' : ''}`} />
        </button>

        <div>
          <div className="flex items-center gap-2 mb-1.5 pr-8">
            <h3 className="font-bold text-gray-900 leading-snug line-clamp-1">{recipe.title}</h3>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-medium mb-2">
            <Clock className="w-3 h-3" /> {recipe.time}
          </span>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{recipe.desc}</p>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <img
            src="/images/visily-avatar-42.png"
            alt={recipe.author}
            className="w-7 h-7 rounded-full object-cover border-2 border-pink-50"
            onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(recipe.author)}&background=fce7f3&color=ec4899&size=28`}
          />
          <span className="text-sm font-semibold text-gray-700">{recipe.author}</span>
        </div>
      </div>
    </div>
  );
}
