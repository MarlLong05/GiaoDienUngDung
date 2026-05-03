import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c1c1c] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">About Us</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-white rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              <button className="px-6 py-2 bg-pink-500 text-white rounded-lg text-sm font-bold hover:bg-pink-600 transition-colors">
                Send
              </button>
            </div>
          </div>
          
          <div className="col-span-1 md:pl-12">
            <h4 className="text-lg font-bold mb-6">Learn More</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-pink-400 transition-colors">Our Cooks</Link></li>
              <li><Link to="/" className="hover:text-pink-400 transition-colors">See Our Features</Link></li>
              <li><Link to="/" className="hover:text-pink-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:pl-12">
            <h4 className="text-lg font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-pink-400 transition-colors">Gift Subscription</Link></li>
              <li><Link to="/" className="hover:text-pink-400 transition-colors">Send Us Feedback</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:pl-12">
            <h4 className="text-lg font-bold mb-6">Recipes</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/what-to-cook" className="hover:text-pink-400 transition-colors">What to Cook This Week</Link></li>
              <li><Link to="/search?q=pasta" className="hover:text-pink-400 transition-colors">Pasta</Link></li>
              <li><Link to="/search?q=dinner" className="hover:text-pink-400 transition-colors">Dinner</Link></li>
              <li><Link to="/search?q=healthy" className="hover:text-pink-400 transition-colors">Healthy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <img 
              src="/images/visily-group-15.png" 
              alt="Chefify Logo" 
              className="h-8 object-contain"
            />
            <span className="text-xl font-bold text-white">Chefify</span>
            <span className="text-gray-400 ml-4 font-medium italic">2023 Chefify Company</span>
          </div>
          
          <div className="flex gap-4 text-gray-400 font-medium">
            <Link to="/" className="hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">Terms of Service</Link>
            <span className="text-gray-800">|</span>
            <Link to="/" className="hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
