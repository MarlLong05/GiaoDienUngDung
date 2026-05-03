import { useState, useEffect } from 'react';
import { Star, Clock, Users, ChevronRight, Heart, CheckSquare, Square, ThumbsUp, Bookmark, Send } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

export default function WhatToCook() {
  const { id } = useParams();
  const { allRecipes, toggleSaveRecipe, savedRecipeIds, addToShoppingList } = useRecipes();
  
  // Tìm recipe theo ID
  const recipe = allRecipes.find(r => r.id === parseInt(id)) || allRecipes[0];
  
  const [checked, setChecked] = useState([]);
  const [followed, setFollowed] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([
    { id: 1, user: 'Emily Davis', time: 'Just now', text: 'Looks amazing! Can\'t wait to try it.', helpful: 5, avatar: '/images/visily-avatar-42.png' },
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  const isSaved = savedRecipeIds.includes(recipe.id);

  // Scroll to top when recipe changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const toggleCheck = (i) =>
    setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  const handleAddToList = () => {
    addToShoppingList(recipe.ingredients || []);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handlePostNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    
    const newNote = {
      id: Date.now(),
      user: 'You',
      time: 'Just now',
      text: noteText,
      helpful: 0,
      avatar: '/images/visily-avatar-42.png'
    };
    
    setNotes([newNote, ...notes]);
    setNoteText('');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-pink-500 font-medium">Recipe Detail</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mb-12">
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            {recipe.title}
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <img src="/images/visily-avatar-42.png" alt={recipe.author} className="w-10 h-10 rounded-full object-cover border-2 border-pink-50" />
            <div>
              <p className="font-bold text-gray-900 text-sm">{recipe.author || 'Chefify Member'}</p>
              <p className="text-xs text-gray-400">Recipe Author</p>
            </div>
            <button
              onClick={() => setFollowed(f => !f)}
              className={`ml-2 px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all ${
                followed ? 'bg-pink-500 text-white border-pink-500' : 'border-pink-400 text-pink-500 hover:bg-pink-50'
              }`}
            >
              {followed ? 'Following' : 'Follow'}
            </button>
            <button
              onClick={() => toggleSaveRecipe(recipe.id)}
              className={`ml-auto p-2 rounded-full transition-all ${isSaved ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'}`}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-pink-500' : ''}`} />
            </button>
          </div>

          <div className="flex items-center gap-6 mb-6 p-5 bg-gray-50 rounded-2xl">
            <div className="text-center flex-1">
              <Clock className="w-5 h-5 text-pink-500 mx-auto mb-1" />
              <p className="text-xs text-gray-400 font-medium uppercase">Time</p>
              <p className="font-extrabold text-gray-900 text-sm">{recipe.time}</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center flex-1">
              <Users className="w-5 h-5 text-pink-500 mx-auto mb-1" />
              <p className="text-xs text-gray-400 font-medium uppercase">Yields</p>
              <p className="font-extrabold text-gray-900 text-sm">{recipe.yields || 'Serves 2'}</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center flex-1">
              <div className="flex justify-center mb-1 text-yellow-400">
                {'★'.repeat(recipe.rating || 5)}{'☆'.repeat(5 - (recipe.rating || 5))}
              </div>
              <p className="text-xs text-gray-400 font-medium uppercase">Rating</p>
              <p className="font-extrabold text-gray-900 text-sm">{recipe.rating || 5} / 5</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm">
            {recipe.description || 'Enjoy this delicious and easy-to-make recipe from Chefify.'}
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mb-14">
        <div className="lg:w-5/12">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">Ingredients</h2>
          <ul className="space-y-3 mb-8">
            {(recipe.ingredients || ['Ingredients list not available']).map((ing, i) => (
              <li
                key={i}
                onClick={() => toggleCheck(i)}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <div className="mt-0.5 flex-shrink-0">
                  {checked.includes(i)
                    ? <CheckSquare className="w-5 h-5 text-pink-500 fill-pink-50" />
                    : <Square className="w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-colors" />}
                </div>
                <span className={`text-sm leading-relaxed ${checked.includes(i) ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {ing}
                </span>
              </li>
            ))}
          </ul>
          <button 
            onClick={handleAddToList}
            className="w-full py-3.5 bg-pink-500 text-white rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 active:scale-95"
          >
            <Heart className="w-5 h-5" /> {showSuccess ? 'Added to List!' : 'Add to the recipe list'}
          </button>
        </div>

        <div className="lg:w-7/12">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">Instructions</h2>
          <div className="space-y-8">
            {(recipe.instructions || [{ n: 1, text: 'Follow the instructions provided by the chef.' }]).map(step => (
              <div key={step.n} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow-sm shadow-pink-500/30">
                  {step.n}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm pt-1">
                   {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mb-14">
        <h2 className="text-xl font-extrabold text-gray-900 mb-8 border-b border-gray-100 pb-4">Cooking Notes</h2>
        
        <form onSubmit={handlePostNote} className="mb-10 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Share your experience or tips with this recipe..."
            className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-pink-200 resize-none min-h-[100px] text-sm"
          />
          <div className="flex justify-end mt-4">
             <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 transition-all shadow-md">
               Post Note <Send className="w-4 h-4" />
             </button>
          </div>
        </form>

        <div className="space-y-6">
          {notes.map(note => (
            <div key={note.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-4 animate-in fade-in slide-in-from-top-4">
              <img src={note.avatar} alt="" className="w-10 h-10 rounded-full border-2 border-pink-50" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900">{note.user}</span>
                  <span className="text-xs text-gray-400">{note.time}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{note.text}</p>
                <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors">
                  <ThumbsUp className="w-4 h-4" /> Helpful ({note.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
