import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// Composant de chargement
const LoadingSpinner = () => (
  <div className="loading-spinner">
    Chargement...
  </div>
);

// Composant d'erreur
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error) => {
      console.error('Error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="error-boundary">
        Une erreur est survenue. Veuillez rafraîchir la page.
      </div>
    );
  }

  return children;
};

// Chargement différé des composants
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const BuyPage = lazy(() => import('./pages/BuyPage'));
const SellPage = lazy(() => import('./pages/SellPage'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
            <main className="main-content">
              <Routes>
                {/* Route principale */}
                <Route path="/" element={<Home />} />
                
                {/* Routes des pages */}
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/sell" element={<SellPage />} />
                
                {/* Gestion des routes 404 */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

// Optimisation des performances avec memo
export default React.memo(App);

