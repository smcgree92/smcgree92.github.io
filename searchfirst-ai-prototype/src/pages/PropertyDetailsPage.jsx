import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import ProgressBar from '../components/ProgressBar';
import AIAssistant from '../components/AIAssistant';

const PropertyDetailsPage = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    postcode: '',
    houseNumber: '',
    street: '',
    town: '',
    county: '',
    propertyType: '',
    tenure: '',
    bedrooms: '',
    newBuild: '',
    leaseYears: '',
    groundRent: '',
    serviceCharge: '',
    managementCompany: '',
    purchasePrice: '',
    mortgage: '',
    firstTimeBuyer: '',
    chain: '',
    additionalNotes: ''
  });
  
  // UI state
  const [showAddressFields, setShowAddressFields] = useState(false);
  const [showAddressResults, setShowAddressResults] = useState(false);
  const [showLeaseholdSection, setShowLeaseholdSection] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  
  // Sample address results
  const addressResults = [
    "42 Willow Avenue, London, SE15 6RT",
    "44 Willow Avenue, London, SE15 6RT",
    "46 Willow Avenue, London, SE15 6RT"
  ];
  
  // AI Assistant content
  const assistantMessage = `I need to collect some details about the property you're purchasing. This will help me determine which searches are required and prepare the necessary legal documents.
  
The more information you can provide, the more I can tailor my analysis to your specific circumstances.`;

  const assistantTips = [
    {
      icon: 'lightbulb',
      title: 'Helpful Tip',
      content: 'You can use the "Find" button next to the postcode field to automatically fill in the address details.'
    },
    {
      icon: 'info-circle',
      title: 'What\'s Next?',
      content: 'After you provide the property details, I\'ll recommend the appropriate searches to conduct, such as Local Authority, Environmental, and Water & Drainage searches.'
    }
  ];
  
  // Show leasehold section if tenure is leasehold or share-of-freehold
  useEffect(() => {
    if (formData.tenure === 'leasehold' || formData.tenure === 'share-of-freehold') {
      setShowLeaseholdSection(true);
    } else {
      setShowLeaseholdSection(false);
    }
  }, [formData.tenure]);
  
  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Mark field as touched
    setTouchedFields(prev => ({
      ...prev,
      [id]: true
    }));
    
    // Clear error for this field if it exists
    if (formErrors[id]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };
  
  // Handle address lookup
  const handleAddressLookup = () => {
    if (formData.postcode.trim()) {
      setShowAddressResults(true);
    }
  };
  
  // Handle address selection
  const handleAddressSelect = (address) => {
    // Parse address components
    const parts = address.split(', ');
    const addressLine = parts[0];
    const town = parts[1];
    const postcode = parts[2];
    
    // Extract house number and street
    const matches = addressLine.match(/^(\d+)\s(.+)$/);
    const houseNumber = matches ? matches[1] : '';
    const street = matches ? matches[2] : addressLine;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      houseNumber,
      street,
      town,
      postcode
    }));
    
    // Update UI state
    setShowAddressResults(false);
    setShowAddressFields(true);
  };
  
  // Hide address results when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('#address-results') && e.target.id !== 'address-lookup') {
      setShowAddressResults(false);
    }
  };
  
  // Add click outside listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Validate form
  const validateForm = () => {
    const errors = {};
    
    // Required fields
    const requiredFields = ['postcode', 'propertyType', 'tenure', 'purchasePrice', 'mortgage', 'firstTimeBuyer', 'chain'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'This field is required';
      }
    });
    
    // If leasehold is selected, validate leasehold fields
    if (showLeaseholdSection) {
      if (!formData.leaseYears) {
        errors.leaseYears = 'Please enter the remaining years on the lease';
      }
      if (!formData.groundRent) {
        errors.groundRent = 'Please enter the ground rent amount';
      }
      if (!formData.serviceCharge) {
        errors.serviceCharge = 'Please enter the service charge amount';
      }
    }
    
    // Purchase price validation
    if (formData.purchasePrice && (isNaN(formData.purchasePrice) || Number(formData.purchasePrice) <= 0)) {
      errors.purchasePrice = 'Please enter a valid purchase price';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouchedFields(allTouched);
    
    // Validate form
    if (validateForm()) {
      navigate('/search-authorization');
    } else {
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors)[0];
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  
  // Handle back button
  const handleBack = () => {
    navigate('/ai-introduction');
  };
  
  return (
    <>
      <NavigationBar />
      
      <div className="content">
        <div className="content-container">
          {/* Progress Bar */}
          <ProgressBar step={3} totalSteps={5} />

          <div className="page-layout">
            <div className="main-content">
              <form id="property-form" onSubmit={handleSubmit}>
                <div className="form-container">
                  <div className="form-section">
                    <h2>Property Information</h2>
                    <p>Please provide details about the property you're purchasing. This information will help me conduct the appropriate searches and prepare the necessary legal documents.</p>
                    
                    {/* Address Section */}
                    <div className="form-row">
                      <div className="form-group" style={{ position: 'relative' }}>
                        <label htmlFor="postcode">Postcode</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <input 
                            type="text" 
                            id="postcode" 
                            className="form-control" 
                            placeholder="e.g. SE15 6RT" 
                            value={formData.postcode}
                            onChange={handleInputChange}
                            required 
                          />
                          <button 
                            type="button" 
                            id="address-lookup" 
                            className="btn"
                            onClick={handleAddressLookup}
                          >
                            Find
                          </button>
                        </div>
                        {touchedFields.postcode && formErrors.postcode && (
                          <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            {formErrors.postcode}
                          </div>
                        )}
                        {showAddressResults && (
                          <div 
                            id="address-results" 
                            className="address-results" 
                            style={{ 
                              display: 'block',
                              background: 'white',
                              border: '1px solid #ddd',
                              borderRadius: '4px',
                              marginTop: '0.5rem',
                              maxHeight: '200px',
                              overflowY: 'auto',
                              position: 'absolute',
                              width: 'calc(100% - 70px)',
                              zIndex: 10
                            }}
                          >
                            {addressResults.map((address, index) => (
                              <div 
                                key={index}
                                className="address-option"
                                style={{
                                  padding: '0.8rem',
                                  borderBottom: index < addressResults.length - 1 ? '1px solid #eee' : 'none',
                                  cursor: 'pointer'
                                }}
                                onClick={() => handleAddressSelect(address)}
                              >
                                {address}
                              </div>
                            ))}
                          </div>
                        )}
                        <p className="form-note">Enter the postcode and click "Find" to look up the address</p>
                      </div>
                    </div>
                    
                    {/* Address fields (shown after selection) */}
                    {showAddressFields && (
                      <>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="houseNumber">House/Flat Number</label>
                            <input 
                              type="text" 
                              id="houseNumber" 
                              className="form-control" 
                              value={formData.houseNumber}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="street">Street</label>
                            <input 
                              type="text" 
                              id="street" 
                              className="form-control" 
                              value={formData.street}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                        </div>
                        
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="town">Town/City</label>
                            <input 
                              type="text" 
                              id="town" 
                              className="form-control" 
                              value={formData.town}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="county">County</label>
                            <input 
                              type="text" 
                              id="county" 
                              className="form-control" 
                              value={formData.county}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Property Type Section */}
                    <div className="form-divider"></div>
                    
                    <h3>Property Type</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="propertyType">Property Type</label>
                        <select 
                          id="propertyType" 
                          className="form-control" 
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please select</option>
                          <option value="detached">Detached House</option>
                          <option value="semi-detached">Semi-Detached House</option>
                          <option value="terraced">Terraced House</option>
                          <option value="flat">Flat/Apartment</option>
                          <option value="bungalow">Bungalow</option>
                          <option value="maisonette">Maisonette</option>
                          <option value="other">Other</option>
                        </select>
                        {touchedFields.propertyType && formErrors.propertyType && (
                          <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            {formErrors.propertyType}
                          </div>
                        )}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="tenure">Tenure</label>
                        <select 
                          id="tenure" 
                          className="form-control" 
                          value={formData.tenure}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Please select</option>
                          <option value="freehold">Freehold</option>
                          <option value="leasehold">Leasehold</option>
                          <option value="share-of-freehold">Share of Freehold</option>
                          <option value="commonhold">Commonhold</option>
                        </select>
                        {touchedFields.tenure && formErrors.tenure && (
                          <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            {formErrors.tenure}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="bedrooms">Number of Bedrooms</label>
                        <select 
                          id="bedrooms" 
                          className="form-control"
                          value={formData.bedrooms}
                          onChange={handleInputChange}
                        >
                          <option value="">Please select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6+">6+</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="newBuild">Is this a new build property?</label>
                        <select 
                          id="newBuild" 
                          className="form-control"
                          value={formData.newBuild}
                          onChange={handleInputChange}
                        >
                          <option value="">Please select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Leasehold Section (conditionally shown) */}
                    {showLeaseholdSection && (
                      <>
                        <div className="form-divider"></div>
                        
                        <h3>Leasehold Information</h3>
                        <p>Please provide additional details about the leasehold.</p>
                        
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="leaseYears">Years Remaining on Lease</label>
                            <input 
                              type="number" 
                              id="leaseYears" 
                              className="form-control" 
                              min="1" 
                              max="999"
                              value={formData.leaseYears}
                              onChange={handleInputChange}
                            />
                            {touchedFields.leaseYears && formErrors.leaseYears && (
                              <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                {formErrors.leaseYears}
                              </div>
                            )}
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="groundRent">Annual Ground Rent (£)</label>
                            <input 
                              type="number" 
                              id="groundRent" 
                              className="form-control" 
                              min="0" 
                              step="0.01"
                              value={formData.groundRent}
                              onChange={handleInputChange}
                            />
                            {touchedFields.groundRent && formErrors.groundRent && (
                              <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                {formErrors.groundRent}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="serviceCharge">Annual Service Charge (£)</label>
                            <input 
                              type="number" 
                              id="serviceCharge" 
                              className="form-control" 
                              min="0" 
                              step="0.01"
                              value={formData.serviceCharge}
                              onChange={handleInputChange}
                            />
                            {touchedFields.serviceCharge && formErrors.serviceCharge && (
                              <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                {formErrors.serviceCharge}
                              </div>
                            )}
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="managementCompany">Management Company (if known)</label>
                            <input 
                              type="text" 
                              id="managementCompany" 
                              className="form-control"
                              value={formData.managementCompany}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Additional Information Section */}
                    <div className="form-divider"></div>
                    
                    <h3>Additional Information</h3>
                    <p>Please provide any additional information that may be relevant to your property purchase.</p>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="purchasePrice">Purchase Price (£)</label>
                        <input 
                          type="number" 
                          id="purchasePrice" 
                          className="form-control" 
                          min="0" 
                          step="0.01" 
                          required
                          value={formData.purchasePrice}
                          onChange={handleInputChange}
                        />
                        {touchedFields.purchasePrice && formErrors.purchasePrice && (
                          <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            {formErrors.purchasePrice}
                          </div>
                        )}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="mortgage">Are you using a mortgage?</label>
                        <select 
                          id="mortgage" 
                          className="form-control" 
                          required
                          value={formData.mortgage}
                          onChange={handleInputChange}
                        >
                          <option value="">Please select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        {touchedFields.mortgage && formErrors.mortgage && (
                          <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            {formErrors.mortgage}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstTimeBuyer">Are you a first-time buyer?</label>
                        <select 
                          id="firstTimeBuyer" 
                          className="form-control" 
                          required
                          value={formData.firstTimeBuyer}
                          onChange={handleInputChange}
                        >
                          <option value="">Please select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        {touchedFields.firstTimeBuyer && formErrors.firstTimeBuyer && (
                          <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            {formErrors.firstTimeBuyer}
                          </div>
                        )}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="chain">Are you in a property chain?</label>
                        <select 
                          id="chain" 
                          className="form-control" 
                          required
                          value={formData.chain}
                          onChange={handleInputChange}
                        >
                          <option value="">Please select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        {touchedFields.chain && formErrors.chain && (
                          <div className="error-message" style={{ display: 'block', color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            {formErrors.chain}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="additionalNotes">Additional Notes</label>
                      <textarea 
                        id="additionalNotes" 
                        className="form-control" 
                        rows="4" 
                        placeholder="Please include any additional details that may be relevant to your property purchase."
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="btn-container">
                    <button type="button" onClick={handleBack} className="btn btn-secondary">Back</button>
                    <button type="submit" className="btn">Continue to Searches</button>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Sidebar with AI Assistant */}
            <AIAssistant 
              message={assistantMessage}
              tip={assistantTips[0].content}
              nextStep={assistantTips[1].content}
            />
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Search First AI. All rights reserved.</p>
      </footer>
    </>
  );
};

export default PropertyDetailsPage;