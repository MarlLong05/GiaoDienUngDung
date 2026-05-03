import { CreditCard, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [step, setStep] = useState('checkout'); // 'checkout' or 'success'
  const [loading, setLoading] = useState(false);

  const handlePay = (e) => {
    e.preventDefault();
    setLoading(true);
    // Giả lập xử lý thanh toán
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="w-full py-20 px-6 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-md">
          Welcome to Chefify Pro! You now have unlimited access to all premium recipes and features.
        </p>
        <div className="flex gap-4">
          <Link to="/" className="px-8 py-3.5 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 transition shadow-lg shadow-pink-500/25">
            Back to Home
          </Link>
          <Link to="/recipe-box" className="px-8 py-3.5 bg-white border-2 border-pink-500 text-pink-500 rounded-full font-bold hover:bg-pink-50 transition">
            Go to Recipe Box
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12 px-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Checkout Form */}
      <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <CreditCard className="text-pink-500" /> Payment Details
        </h2>
        
        <form onSubmit={handlePay} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Card Information</label>
            <div className="border-2 border-gray-100 rounded-2xl overflow-hidden focus-within:border-pink-300 transition-all">
              <div className="flex items-center px-4 py-4 bg-gray-50/50">
                <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
                <input required type="text" placeholder="Card number" className="w-full bg-transparent focus:outline-none font-medium" />
              </div>
              <div className="flex border-t-2 border-gray-100">
                <input required type="text" placeholder="MM / YY" className="w-1/2 px-4 py-4 bg-gray-50/50 focus:outline-none border-r-2 border-gray-100" />
                <input required type="text" placeholder="CVC" className="w-1/2 px-4 py-4 bg-gray-50/50 focus:outline-none" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Country</label>
            <select className="w-full p-4 bg-gray-50/50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-pink-300 font-medium">
              <option>Vietnam</option>
              <option>United States</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 bg-pink-500 text-white rounded-2xl font-bold text-lg hover:bg-pink-600 transition-all shadow-xl shadow-pink-500/30 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <><Lock className="w-5 h-5" /> Pay $9.99 Now</>
            )}
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="md:w-80 bg-gray-50/80 p-8 rounded-[2.5rem] border border-gray-100 self-start backdrop-blur-sm">
        <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest">Order Summary</h3>
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-pink-500 text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-pink-500/20">PRO</div>
             <div>
                <p className="font-bold text-gray-900 text-sm">Chefify Pro</p>
                <p className="text-xs text-gray-400">Monthly Plan</p>
             </div>
          </div>
          <span className="font-bold text-gray-900">$9.99</span>
        </div>
        <div className="space-y-4 mb-8">
           <div className="flex justify-between text-sm text-gray-500">
             <span>Subtotal</span>
             <span>$9.99</span>
           </div>
           <div className="flex justify-between text-sm text-gray-500">
             <span>Tax</span>
             <span>$0.00</span>
           </div>
           <div className="flex justify-between text-xl font-extrabold text-gray-900 pt-2">
             <span>Total</span>
             <span>$9.99</span>
           </div>
        </div>
        <p className="text-[10px] text-gray-400 text-center leading-relaxed">
          By clicking "Pay Now", you agree to our Terms of Service and Privacy Policy. Your subscription will renew automatically.
        </p>
      </div>
    </div>
  );
}
