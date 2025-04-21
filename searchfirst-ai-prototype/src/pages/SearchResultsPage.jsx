import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProgressBar from '../components/ProgressBar';
import AIAssistant from '../components/AIAssistant';

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tab-local');
  
  // Search results data
  const searchSummary = {
    totalSearches: 4,
    criticalIssues: 0,
    minorConcerns: 2,
    daysToComplete: 6
  };
  
  // Search tabs data
  const searchTabs = [
    { id: 'tab-local', label: 'Local Authority' },
    { id: 'tab-water', label: 'Water & Drainage' },
    { id: 'tab-environmental', label: 'Environmental' },
    { id: 'tab-mining', label: 'Mining & Subsidence' }
  ];
  
  // Search results content
  const searchResults = {
    'tab-local': {
      title: 'Local Authority Search',
      icon: 'landmark',
      status: 'warning',
      statusText: 'Minor Concerns',
      items: [
        {
          title: 'Planning History',
          content: `The property has 2 planning applications in the last 10 years:
          <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
            <li style="margin-bottom: 0.5rem;">2018 - Installation of replacement windows (Approved)</li>
            <li style="margin-bottom: 0.5rem;">2020 - Loft conversion with dormer window (Approved)</li>
          </ul>`
        },
        {
          title: 'Building Control',
          content: 'The loft conversion from 2020 has a completion certificate, confirming it was built to required standards.'
        },
        {
          title: 'Highways',
          content: 'The road and pavement adjacent to the property are publicly maintained by the local authority.'
        },
        {
          title: 'Road Schemes',
          content: '<span style="color: var(--warning); font-weight: bold;">Minor Concern:</span> There is a proposed traffic calming scheme on Willow Avenue scheduled for implementation in 2026. This may temporarily affect access during construction but should ultimately benefit the property.'
        },
        {
          title: 'Conservation Area',
          content: 'The property is not in a conservation area.'
        }
      ]
    },
    'tab-water': {
      title: 'Water & Drainage Search',
      icon: 'tint',
      status: 'success',
      statusText: 'No Issues',
      items: [
        {
          title: 'Water Supply',
          content: 'The property is connected to the mains water supply operated by Thames Water.'
        },
        {
          title: 'Sewerage',
          content: 'The property is connected to the public sewer network for foul water and surface water drainage.'
        },
        {
          title: 'Pipework Location',
          content: 'No water mains or public sewers cross the property boundary according to the records.'
        },
        {
          title: 'Water Charging',
          content: 'The property has a water meter installed.'
        }
      ]
    },
    'tab-environmental': {
      title: 'Environmental Search',
      icon: 'seedling',
      status: 'warning',
      statusText: 'Minor Concerns',
      items: [
        {
          title: 'Contaminated Land',
          content: 'No evidence of contaminated land at the property.'
        },
        {
          title: 'Flood Risk',
          content: '<span style="color: var(--warning); font-weight: bold;">Minor Concern:</span> The property has a low risk of surface water flooding. This occurs when heavy rainfall overwhelms drainage systems. The historical frequency is approximately once every 75-100 years.'
        },
        {
          title: 'Radon Gas',
          content: 'The property is in an area where radon levels are below the action level. No protective measures are required.'
        },
        {
          title: 'Ground Stability',
          content: 'No significant natural ground stability hazards identified.'
        },
        {
          title: 'Energy Infrastructure',
          content: 'No existing or planned energy infrastructure in proximity to the property.'
        }
      ]
    },
    'tab-mining': {
      title: 'Mining & Subsidence Search',
      icon: 'hard-hat',
      status: 'success',
      statusText: 'No Issues',
      items: [
        {
          title: 'Historical Mining',
          content: 'No recorded mining activity within 500m of the property.'
        },
        {
          title: 'Natural Subsidence',
          content: 'London Clay is the predominant substrate in this area, which is generally stable.'
        },
        {
          title: 'Brine Extraction',
          content: 'No history of brine extraction in this area.'
        },
        {
          title: 'Subsidence Claims',
          content: 'No subsidence insurance claims have been recorded for this postcode in the past 10 years.'
        }
      ]
    }
  };
  
  // AI Assistant content
  const assistantMessage = `Good news! All your property searches have been completed, and I've analyzed the results in detail. There are no significant issues that would prevent your purchase from proceeding.

The minor concerns are typical for properties in this area and unlikely to impact the value or usability of your home.`;

  const assistantTips = [
    {
      icon: 'lightbulb',
      title: 'Helpful Tip',
      content: 'You can click on each tab to view detailed results from each search. Pay special attention to items marked as "Minor Concerns" to ensure you understand their implications.'
    },
    {
      icon: 'info-circle',
      title: 'What\'s Next?',
      content: 'After reviewing these results, the next step is document preparation. I\'ll prepare all the necessary legal documents for your purchase, including the transfer deed and contract of sale.'
    }
  ];
  
  // Handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
  // Handle back button
  const handleBack = () => {
    navigate('/app/search-authorization');
  };
  
  // Handle proceed button
  const handleProceed = () => {
    navigate('/app/document-preparation');
  };
  
  return (
    <MainLayout>
      {/* Progress Bar */}
      <ProgressBar step={4} totalSteps={5} />

      <div className="page-layout">
        <div className="main-content">
          <div className="results-container">
            <div className="results-header">
              <h2>Search Results Analysis</h2>
              <p>I've analyzed all your search results and prepared a comprehensive summary. Here's what I found for your property at 42 Willow Avenue.</p>
            </div>
            
            {/* Results Summary Statistics */}
            <div className="results-summary">
              <div className="summary-stat">
                <div className="value">{searchSummary.totalSearches}</div>
                <div className="label">Searches Completed</div>
              </div>
              
              <div className="summary-stat">
                <div className="value">{searchSummary.criticalIssues}</div>
                <div className="label">Critical Issues</div>
              </div>
              
              <div className="summary-stat">
                <div className="value">{searchSummary.minorConcerns}</div>
                <div className="label">Minor Concerns</div>
              </div>
              
              <div className="summary-stat">
                <div className="value">{searchSummary.daysToComplete}</div>
                <div className="label">Days to Complete</div>
              </div>
            </div>
            
            {/* Tabbed Search Results */}
            <div className="search-results">
              <div className="result-tabs">
                {searchTabs.map(tab => (
                  <div 
                    key={tab.id}
                    className={`result-tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>
              
              {/* Tab Content Sections */}
              {Object.keys(searchResults).map(tabId => (
                <div 
                  key={tabId}
                  id={tabId}
                  className={`tab-content ${activeTab === tabId ? 'active' : ''}`}
                  style={{ display: activeTab === tabId ? 'block' : 'none' }}
                >
                  <div className="result-card">
                    <div className="result-header">
                      <h3>
                        <i className={`fas fa-${searchResults[tabId].icon}`}></i> {searchResults[tabId].title}
                      </h3>
                      <div className={`status-pill status-${searchResults[tabId].status}`}>
                        {searchResults[tabId].statusText}
                      </div>
                    </div>
                    <div className="result-body">
                      {searchResults[tabId].items.map((item, index) => (
                        <div key={index} className="result-item">
                          <h4>{item.title}</h4>
                          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* AI Assessment Summary */}
            <div className="form-section">
              <h2>AI Assessment Summary</h2>
              <p>I've thoroughly analyzed all search results and can confirm that no critical issues were identified that would prevent the property transaction from proceeding. There are two minor concerns:</p>
              
              <ol style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>A planned traffic calming scheme on Willow Avenue scheduled for 2026. This is unlikely to significantly impact the property value and may improve road safety in the long term.</li>
                <li style={{ marginBottom: '0.5rem' }}>Low surface water flood risk (once every 75-100 years). This is common in many London properties and isn't severe enough to affect insurability or require special measures.</li>
              </ol>
              
              <p>Overall, these search results are favorable and indicate the property is suitable for purchase. I recommend proceeding to the next stage of preparing the legal documents for your transaction.</p>
            </div>
            
            <div className="btn-container">
              <button type="button" onClick={handleBack} className="btn btn-secondary">Back to Searches</button>
              <button type="button" onClick={handleProceed} className="btn">Proceed to Document Preparation</button>
            </div>
          </div>
        </div>
        
        {/* Sidebar with AI Assistant */}
        <div className="sidebar">
          <AIAssistant 
            message={assistantMessage}
            tips={assistantTips}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchResultsPage;