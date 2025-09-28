import React, { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { Auth } from './components/Auth';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { TechnicalTerms } from './components/TechnicalTerms';
import { Quiz } from './components/Quiz';
import { Calculator } from './components/Calculator';
import { Forum } from './components/Forum';

function App() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <img 
            src="/garantia (1).png" 
            alt="Enfermidia Logo" 
            className="h-16 w-16 mx-auto mb-4 rounded-xl animate-pulse"
          />
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'terms':
        return <TechnicalTerms />;
      case 'quiz':
        return <Quiz />;
      case 'calculator':
        return <Calculator />;
      case 'forum':
        return <Forum />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderCurrentPage()}
    </Layout>
  );
}

export default App;