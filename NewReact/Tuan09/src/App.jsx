import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import RecipeBox from './pages/RecipeBox';
import Pricing from './pages/Pricing';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import Recipes from './pages/Recipes';
import WhatToCook from './pages/WhatToCook';
import SearchResults from './pages/SearchResults';
import LoginModal from './components/common/LoginModal';
import WelcomeModal from './components/common/WelcomeModal';
import { AuthProvider } from './context/AuthContext';
import { RecipeProvider } from './context/RecipeContext';

function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <Router>
          <div className="flex flex-col min-h-screen text-gray-800 bg-gray-50 font-sans">
            <Header />
            <WelcomeModal />
            <LoginModal />
            <main className="flex-grow w-full max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe-box" element={<RecipeBox />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<WhatToCook />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
