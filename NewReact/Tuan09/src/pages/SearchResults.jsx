import { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown, ChevronUp, Clock, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from '../components/home/RecipeCard';

const typeFilters = ['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed', 'Healthy'];
const ratingFilters = [5, 4, 3, 2, 1];

export default function SearchResults() {
  const { allRecipes } = useRecipes();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [timeLimit, setTimeLimit] = useState(120);
  const [sortBy, setSortBy] = useState('A-Z');
  
  const [showTypeFilter, setShowTypeFilter] = useState(true);
  const [showTimeFilter, setShowTimeFilter] = useState(true);
  const [showRatingFilter, setShowRatingFilter] = useState(true);

  // Lọc dữ liệu thực tế dựa trên toàn bộ recipes trong context
  const filteredRecipes = useMemo(() => {
    let results = allRecipes;

    if (query.trim()) {
      results = results.filter(r => r.title.toLowerCase().includes(query.trim().toLowerCase()));
    }

    if (selectedTypes.length > 0) {
      results = results.filter(r => selectedTypes.includes(r.type));
    }

    if (selectedRatings.length > 0) {
      results = results.filter(r => selectedRatings.includes(r.rating));
    }

    results = results.filter(r => {
      const mins = parseInt(r.time) || 0;
      return mins <= timeLimit;
    });

    if (sortBy === 'A-Z') {
      results = [...results].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'Newest') {
      results = [...results].reverse();
    }

    return results;
  }, [allRecipes, query, selectedTypes, selectedRatings, timeLimit, sortBy]);

  const toggleType = (type) => setSelectedTypes(prev =>
    prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
  );
  
  const toggleRating = (r) => setSelectedRatings(prev =>
    prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
  );

  return (
    <div className="w-full py-8 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-28">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-gray-700" />
              <h2 className="font-extrabold text-gray-800 uppercase tracking-widest text-sm">Filters</h2>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-100">
              <button className="w-full flex items-center justify-between mb-4" onClick={() => setShowTypeFilter(v => !v)}>
                <span className="font-bold text-gray-800">Type</span>
                {showTypeFilter ? <ChevronUp className="w-4 h-4 text-pink-500" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              {showTypeFilter && (
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {typeFilters.map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                      />
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedTypes.includes(type) ? 'bg-pink-500 border-pink-500' : 'border-gray-300 group-hover:border-pink-400'}`}>
                        {selectedTypes.includes(type) && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <span className="text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6 pb-6 border-b border-gray-100">
              <button className="w-full flex items-center justify-between mb-4" onClick={() => setShowTimeFilter(v => !v)}>
                <span className="font-bold text-gray-800">Time (Max {timeLimit}m)</span>
                {showTimeFilter ? <ChevronUp className="w-4 h-4 text-pink-500" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              {showTimeFilter && (
                <div className="px-2">
                  <input 
                    type="range" min="5" max="120" step="5"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold uppercase tracking-tighter">
                    <span>5m</span>
                    <span>120m</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6">
              <button className="w-full flex items-center justify-between mb-4" onClick={() => setShowRatingFilter(v => !v)}>
                <span className="font-bold text-gray-800">Rating</span>
                {showRatingFilter ? <ChevronUp className="w-4 h-4 text-pink-500" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              {showRatingFilter && (
                <div className="space-y-3">
                  {ratingFilters.map(r => (
                    <label key={r} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedRatings.includes(r)}
                        onChange={() => toggleRating(r)}
                      />
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedRatings.includes(r) ? 'bg-pink-500 border-pink-500' : 'border-gray-300 group-hover:border-pink-400'}`}>
                        {selectedRatings.includes(r) && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <div className="flex text-yellow-400 text-xs">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < r ? '★' : '☆'}</span>
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => { setSelectedTypes([]); setSelectedRatings([]); setTimeLimit(120); }}
              className="w-full py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">
              {query ? `Results for "${query}"` : 'All Recipes'}{' '}
              <span className="text-gray-400 font-semibold text-xl">({filteredRecipes.length})</span>
            </h1>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white cursor-pointer"
            >
              <option value="A-Z">Sort: A-Z</option>
              <option value="Newest">Sort: Newest</option>
            </select>
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
               <p className="text-gray-500 text-lg font-medium">No recipes match your filters.</p>
               <button onClick={() => { setSelectedTypes([]); setSelectedRatings([]); setTimeLimit(120); }} className="text-pink-500 font-bold hover:underline mt-2">Reset all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-12">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}

          {filteredRecipes.length > 0 && (
            <div className="flex items-center justify-center gap-2 pt-8 border-t border-gray-100">
              <button className="w-10 h-10 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center shadow-lg shadow-pink-500/20">1</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
