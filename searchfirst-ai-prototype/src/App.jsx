import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';

// Import app pages
import SignupPage from './pages/SignupPage';
import AIIntroductionPage from './pages/AIIntroductionPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import SearchAuthorizationPage from './pages/SearchAuthorizationPage';
import SearchResultsPage from './pages/SearchResultsPage';
import DocumentPreparationPage from './pages/DocumentPreparationPage';

// Import main site pages
import HomePage from './pages/MainSite/HomePage';
import PrototypePlanPage from './pages/MainSite/PrototypePlanPage';

// Add a navigation context for the main site
export const MainSiteNavContext = React.createContext();

// Main site navigation provider
export const MainSiteNavProvider = ({ children }) => {
  // Function to navigate back to main site
  const goToMainSite = () => {
    // Navigate to main site root (adjust this URL as needed)
    window.location.href = '/';
  };

  return (
    <MainSiteNavContext.Provider value={{ goToMainSite }}>
      {children}
    </MainSiteNavContext.Provider>
  );
};

// Define application routes with their paths and components
const routes = [
  // Main site routes
  { path: '/', element: <HomePage /> },
  { path: '/main/prototype-plan', element: <PrototypePlanPage /> },
  
  // App routes
  { path: '/app', element: <SignupPage /> },
  { path: '/app/ai-introduction', element: <AIIntroductionPage /> },
  { path: '/app/property-details', element: <PropertyDetailsPage /> },
  { path: '/app/search-authorization', element: <SearchAuthorizationPage /> },
  { path: '/app/search-results', element: <SearchResultsPage /> },
  { path: '/app/document-preparation', element: <DocumentPreparationPage /> },
  
  // Redirect any unknown routes to home
  { path: '*', element: <Navigate to="/" replace /> } 
];

function App() {
  return (
    <Router>
      <MainSiteNavProvider>
        <Routes>
          {routes.map((route) => (
            <Route 
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </MainSiteNavProvider>
    </Router>
  );
}

export default App;