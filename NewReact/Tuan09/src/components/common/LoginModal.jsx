import { X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginModal() {
  const { showLoginModal, setShowLoginModal, login } = useAuth();

  if (!showLoginModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200 flex">
        <button 
          onClick={() => setShowLoginModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-white/80 hover:bg-gray-100 rounded-full p-2 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="hidden md:block w-1/2 relative bg-pink-50">
          <img 
            src="/images/visily-image-72.png" 
            alt="Login Illustration" 
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Login</h2>
          <p className="text-gray-500 mb-10 text-lg">Login to save your recipes and more.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
              <input 
                type="email" 
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all text-gray-900" 
                placeholder="Enter your email" 
              />
            </div>
            
            <button type="submit" className="w-full py-4 mt-6 bg-pink-500 text-white rounded-2xl font-bold text-xl hover:bg-pink-600 shadow-xl shadow-pink-500/30 transition-all transform hover:-translate-y-0.5">
              Continue
            </button>
          </form>

          <div className="mt-10 text-center text-gray-600">
            Don't have an account? <a href="#" className="text-pink-500 font-bold hover:underline text-lg ml-1">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
