import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './styles.css';

// Import pages
import SignupPage from './pages/SignupPage';
import AIIntroductionPage from './pages/AIIntroductionPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import SearchAuthorizationPage from './pages/SearchAuthorizationPage';
import SearchResultsPage from './pages/SearchResultsPage';
import DocumentPreparationPage from './pages/DocumentPreparationPage';

// Add a navigation context for the main site
export const MainSiteNavContext = React.createContext();

// Main site navigation provider
export const MainSiteNavProvider = ({ children }) => {
  // Function to navigate back to main site
  const goToMainSite = () => {
    // Navigate to parent directory (assumes prototype is in a subdirectory)
    window.location.href = '../index.html';
  };

  return (
    <MainSiteNavContext.Provider value={{ goToMainSite }}>
      {children}
    </MainSiteNavContext.Provider>
  );
};

function App() {
  return (
    <Router>
      <MainSiteNavProvider>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/ai-introduction" element={<AIIntroductionPage />} />
          <Route path="/property-details" element={<PropertyDetailsPage />} />
          <Route path="/search-authorization" element={<SearchAuthorizationPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/document-preparation" element={<DocumentPreparationPage />} />
        </Routes>
      </MainSiteNavProvider>
    </Router>
  );
}

export default App;
