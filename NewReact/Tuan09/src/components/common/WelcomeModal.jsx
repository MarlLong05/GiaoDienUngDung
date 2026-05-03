import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenWelcome', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 pt-10 flex flex-col items-center text-center">
          <div className="w-full aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-inner">
            <img 
              src="/images/visily-image-93.png" 
              alt="Welcome to Chefify" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl font-extrabold text-pink-500 mb-4 tracking-tight">
            Discover Chefify
          </h1>

          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
            Easy and delicious cooking instructions right here. Start exploring now!
          </p>

          <div className="flex gap-2 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
          </div>

          <div className="w-full space-y-4">
            <button 
              onClick={handleClose}
              className="w-full py-4 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/30 transform active:scale-[0.98]"
            >
              Next
            </button>
            <button 
              onClick={handleClose}
              className="block w-full text-pink-500 font-bold text-base hover:text-pink-600 transition-colors"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
