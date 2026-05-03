import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { isLoggedIn, setShowLoginModal } = useAuth();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`, { replace: true });
    }
  }, [query, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/visily-group-15.png" alt="Chefify" className="w-8 h-8 object-contain" />
          <Link to="/" className="text-xl font-bold text-pink-500">Chefify</Link>
        </div>

        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8 relative hidden md:block">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="What would you like to cook?"
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all"
          />
        </form>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/what-to-cook" className={`transition-colors ${isLoggedIn ? 'hover:text-pink-500' : 'cursor-not-allowed opacity-50'}`} onClick={e => !isLoggedIn && e.preventDefault()}>What to cook</Link>
          <Link to="/recipes" className={`transition-colors ${isLoggedIn ? 'hover:text-pink-500' : 'cursor-not-allowed opacity-50'}`} onClick={e => !isLoggedIn && e.preventDefault()}>Recipes</Link>
          <Link to="/" className="hover:text-pink-500 transition-colors">Ingredients</Link>
          <Link to="/" className="hover:text-pink-500 transition-colors">Occasions</Link>
          <Link to="/" className="hover:text-pink-500 transition-colors">About Us</Link>
        </nav>

        <div className="flex items-center gap-3 ml-6">
          {isLoggedIn ? (
            <>
              <Link to="/recipe-box" className="hidden md:flex items-center justify-center px-4 py-2 bg-pink-100 text-pink-600 rounded-lg text-sm font-semibold hover:bg-pink-200 transition-colors">
                Your Recipe Box
              </Link>
              <Link to="/dashboard" className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-100 hover:border-pink-300 transition-all">
                <img src="/images/visily-avatar-42.png" alt="Customer" className="w-full h-full object-cover" />
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowLoginModal(true)} 
                className="flex items-center justify-center px-6 py-2 bg-white border-2 border-pink-500 text-pink-500 rounded-full text-sm font-semibold hover:bg-pink-50 transition-colors"
              >
                Login
              </button>
              <button 
                className="flex items-center justify-center px-6 py-2 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/20"
                onClick={() => setShowLoginModal(true)}
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
