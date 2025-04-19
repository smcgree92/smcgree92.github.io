import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import ProgressBar from '../components/ProgressBar';
import AIAssistant from '../components/AIAssistant';

const SearchAuthorizationPage = () => {
  const navigate = useNavigate();
  
  // State for search selections and total cost
  const [requiredSearches, setRequiredSearches] = useState([
    {
      id: 'local',
      title: 'Local Authority Search',
      description: 'Reveals information about planning permissions, building regulations, road schemes, and other local matters affecting the property.',
      price: 120,
      icon: 'landmark',
      required: true,
      selected: true
    },
    {
      id: 'water',
      title: 'Water & Drainage Search',
      description: 'Confirms if the property is connected to public water supply and sewerage systems, and identifies any water mains or sewers on the property.',
      price: 65,
      icon: 'tint',
      required: true,
      selected: true
    },
    {
      id: 'environmental',
      title: 'Environmental Search',
      description: 'Checks for contaminated land, flood risks, radon gas, and other environmental factors that could affect the property.',
      price: 85,
      icon: 'seedling',
      required: true,
      selected: true
    }
  ]);
  
  const [additionalSearches, setAdditionalSearches] = useState([
    {
      id: 'chancel',
      title: 'Chancel Repair Search',
      description: 'Checks if your property has a liability to contribute to the cost of repairs to the local parish church.',
      price: 25,
      icon: 'church',
      selected: false
    },
    {
      id: 'mining',
      title: 'Mining & Subsidence Search',
      description: 'Checks for past mining activity and ground stability issues that could affect the property. Highly recommended for your area.',
      price: 45,
      icon: 'hard-hat',
      selected: true,
      recommended: true
    },
    {
      id: 'flood',
      title: 'Detailed Flood Risk Search',
      description: 'Provides in-depth analysis of all types of flood risks including river, coastal, surface water, and groundwater flooding.',
      price: 30,
      icon: 'water',
      selected: false
    },
    {
      id: 'hs2',
      title: 'HS2 & Infrastructure Search',
      description: 'Checks if the property could be affected by major infrastructure projects like High Speed 2 railway.',
      price: 15,
      icon: 'train',
      selected: false
    }
  ]);
  
  const [totalCost, setTotalCost] = useState(0);
  const [consent, setConsent] = useState(false);
  
  // AI Assistant content
  const assistantMessage = `I've analyzed your property details and recommended the most appropriate searches for your leasehold flat in London.
  
The Local Authority, Water & Drainage, and Environmental searches are essential for all properties. I've also pre-selected a Mining & Subsidence search based on historical data for your area.`;

  const assistantTips = [
    {
      icon: 'lightbulb',
      title: 'Helpful Tip',
      content: 'Each search reveals different information about your property. Skipping searches may save money now, but could lead to expensive surprises later.'
    },
    {
      icon: 'info-circle',
      title: 'What\'s Next?',
      content: 'After you authorize these searches, I\'ll immediately begin processing them. Results are typically available within 5-10 working days, though some may arrive sooner.'
    }
  ];
  
  // Calculate total cost when search selections change
  useEffect(() => {
    let cost = 0;
    
    // Add costs for required searches
    requiredSearches.forEach(search => {
      if (search.selected) {
        cost += search.price;
      }
    });
    
    // Add costs for additional searches
    additionalSearches.forEach(search => {
      if (search.selected) {
        cost += search.price;
      }
    });
    
    setTotalCost(cost);
  }, [requiredSearches, additionalSearches]);
  
  // Handle additional search toggle
  const handleAdditionalSearchToggle = (id) => {
    setAdditionalSearches(prevSearches => 
      prevSearches.map(search => 
        search.id === id ? { ...search, selected: !search.selected } : search
      )
    );
  };
  
  // Handle consent toggle
  const handleConsentToggle = () => {
    setConsent(!consent);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!consent) {
      alert('Please authorize the searches by checking the consent box.');
      return;
    }
    
    // In a real app, this would process payment and submit search requests
    navigate('/search-results');
  };
  
  // Handle back button
  const handleBack = () => {
    navigate('/property-details');
  };
  
  // Search Card component
  const SearchCard = ({ search }) => {
    return (
      <div className="search-card">
        <h3><i className={`fas fa-${search.icon}`}></i> {search.title}</h3>
        <p>{search.description}</p>
        <div className="search-price">£{search.price}</div>
      </div>
    );
  };
  
  return (
    <>
      <NavigationBar />
      
      <div className="content">
        <div className="content-container">
          {/* Progress Bar */}
          <ProgressBar step={4} totalSteps={5} />

          <div className="page-layout">
            <div className="main-content">
              <form id="search-form" onSubmit={handleSubmit}>
                <div className="form-container">
                  <div className="form-section">
                    <h2>Property Search Authorization</h2>
                    <p>Based on the property details you've provided, I recommend the following searches for your leasehold flat at 42 Willow Avenue. These searches are essential to ensure there are no hidden issues with the property.</p>
                    
                    {/* Required Searches */}
                    <div className="search-cards">
                      {requiredSearches.map(search => (
                        <SearchCard key={search.id} search={search} />
                      ))}
                    </div>
                    
                    {/* Additional Optional Searches */}
                    <div className="checkbox-group">
                      <h3>Additional Recommended Searches</h3>
                      <p>Based on your property's location and characteristics, I recommend these additional searches:</p>
                      
                      {additionalSearches.map(search => (
                        <div className="checkbox-container" key={search.id}>
                          <input 
                            type="checkbox" 
                            id={`${search.id}-search`} 
                            checked={search.selected} 
                            onChange={() => handleAdditionalSearchToggle(search.id)}
                            className="additional-search"
                          />
                          <div className="checkbox-label">
                            <strong>{search.title} (£{search.price})</strong>
                            <p>{search.description}</p>
                            {search.recommended && (
                              <p style={{ color: 'var(--teal)', fontWeight: 'bold', marginTop: '0.5rem' }}>
                                <i className="fas fa-star" style={{ marginRight: '0.5rem' }}></i>
                                Highly recommended for your property
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Cost Summary */}
                    <div className="cost-summary">
                      <h3>Total Search Costs</h3>
                      
                      {requiredSearches.map(search => (
                        search.selected && (
                          <div className="cost-row" key={search.id}>
                            <div>{search.title}</div>
                            <div>£{search.price}</div>
                          </div>
                        )
                      ))}
                      
                      {additionalSearches.map(search => (
                        search.selected && (
                          <div className="cost-row" key={search.id}>
                            <div>{search.title}</div>
                            <div>£{search.price}</div>
                          </div>
                        )
                      ))}
                      
                      <div className="cost-row">
                        <div>Total</div>
                        <div id="total-amount">£{totalCost}</div>
                      </div>
                    </div>
                    
                    {/* Authorization Checkbox */}
                    <div className="checkbox-container">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        checked={consent}
                        onChange={handleConsentToggle}
                        required
                      />
                      <div className="checkbox-label">
                        <strong>I authorize Search First AI to conduct the selected searches on my behalf and agree to pay the total amount shown above.</strong>
                        <p>Your payment will be processed securely once you authorize these searches.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="btn-container">
                    <button type="button" onClick={handleBack} className="btn btn-secondary">Back</button>
                    <button type="submit" className="btn">Authorize Searches</button>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Sidebar with AI Assistant */}
            <div className="sidebar">
              <AIAssistant 
                message={assistantMessage}
                tips={assistantTips}
              />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Search First AI. All rights reserved.</p>
      </footer>
    </>
  );
};

export default SearchAuthorizationPage;