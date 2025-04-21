import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProgressBar from '../components/ProgressBar';
import AIAssistant from '../components/AIAssistant';

const DocumentPreparationPage = () => {
  const navigate = useNavigate();
  const [currentModal, setCurrentModal] = useState(null);
  
  // Document data
  const documents = [
    {
      id: 'tr1',
      title: 'Transfer Deed (TR1)',
      description: 'The legal document that transfers ownership of the property.',
      icon: 'file-contract',
      status: 'ready',
      statusText: 'Ready for Review',
      lastUpdated: 'April 19, 2025',
      actionText: 'Sign'
    },
    {
      id: 'contract',
      title: 'Contract of Sale',
      description: 'Details the terms and conditions of the property sale.',
      icon: 'file-alt',
      status: 'ready',
      statusText: 'Ready for Review',
      lastUpdated: 'April 19, 2025',
      actionText: 'Sign'
    },
    {
      id: 'mortgage',
      title: 'Mortgage Deed',
      description: 'Legal agreement with your mortgage lender.',
      icon: 'file-invoice-dollar',
      status: 'pending',
      statusText: 'Awaiting Lender Approval',
      lastUpdated: 'April 18, 2025',
      actionText: 'Sign',
      disabled: true
    },
    {
      id: 'sdlt',
      title: 'SDLT Declaration',
      description: 'Stamp Duty Land Tax declaration for HMRC.',
      icon: 'file-signature',
      status: 'attention',
      statusText: 'Requires Information',
      lastUpdated: 'April 18, 2025',
      actionText: 'Complete'
    },
    {
      id: 'lease',
      title: 'Leasehold Information',
      description: 'Details of the lease for the property.',
      icon: 'file-invoice',
      status: 'ready',
      statusText: 'Ready for Review',
      lastUpdated: 'April 17, 2025',
      actionText: 'Acknowledge'
    },
    {
      id: 'id',
      title: 'ID Verification',
      description: 'Identity verification for anti-money laundering purposes.',
      icon: 'file-medical-alt',
      status: 'ready',
      statusText: 'Completed',
      lastUpdated: 'April 10, 2025',
      completed: true
    }
  ];

  // Timeline events
  const timelineEvents = [
    {
      date: 'April 10, 2025',
      title: 'Initial Engagement',
      description: 'Account created and property details provided.',
      completed: true
    },
    {
      date: 'April 12, 2025',
      title: 'Searches Authorized',
      description: 'Property searches authorized and initiated.',
      completed: true
    },
    {
      date: 'April 15, 2025',
      title: 'Searches Completed',
      description: 'All property searches completed with no significant issues.',
      completed: true
    },
    {
      date: 'April 19, 2025 (Today)',
      title: 'Document Preparation',
      description: 'Legal documents prepared and ready for signing.',
      completed: false,
      current: true
    },
    {
      date: 'April 24, 2025 (Estimated)',
      title: 'Exchange of Contracts',
      description: 'Legally binding agreement between buyer and seller.',
      completed: false
    },
    {
      date: 'May 1, 2025 (Estimated)',
      title: 'Completion',
      description: 'Final funds transfer and property ownership handover.',
      completed: false
    }
  ];

  // AI Assistant content
  const assistantMessage = `I've prepared all your legal documents based on your property details and search results. The Transfer Deed, Contract of Sale, and Leasehold Information are ready for your review.

The SDLT Declaration requires some additional information from you about past property ownership.

We're also waiting for your mortgage lender to approve the Mortgage Deed.`;

  const assistantTips = [
    {
      icon: 'lightbulb',
      title: 'Helpful Tip',
      content: 'Review each document carefully. Use the "View" button to see the full details, and once youre satisfied, click "Sign" to electronically sign the document.'
    },
    {
      icon: 'info-circle',
      title: 'What\'s Next?',
      content: 'After signing all documents, we\'ll proceed to the exchange of contracts, which is scheduled for April 24. Completion is estimated for May 1, at which point you\'ll officially own the property!'
    }
  ];

  // Document content data
  const documentContent = {
    tr1: `
      <h3 style="text-align: center; margin-bottom: 2rem;">LAND REGISTRY</h3>
      <h4 style="text-align: center; margin-bottom: 2rem;">TRANSFER OF WHOLE OF REGISTERED TITLE(S)</h4>
      
      <p style="margin-bottom: 1rem;"><strong>Title Number(s):</strong> NGL892341</p>
      <p style="margin-bottom: 1rem;"><strong>Property:</strong> 42 Willow Avenue, London, SE15 6RT</p>
      
      <p style="margin-bottom: 1rem;"><strong>Date:</strong> [To be dated on signing]</p>
      
      <p style="margin-bottom: 1rem;"><strong>Transferor:</strong> John Smith and Jane Smith</p>
      
      <p style="margin-bottom: 1rem;"><strong>Transferee:</strong> Michael Johnson</p>
      <p style="margin-bottom: 1rem;"><strong>Transferee's address for service:</strong> 42 Willow Avenue, London, SE15 6RT</p>
      
      <p style="margin-bottom: 1rem;"><strong>The Transferor transfers the Property to the Transferee</strong></p>
      
      <p style="margin-bottom: 1rem;"><strong>Consideration:</strong> £450,000 (Four Hundred and Fifty Thousand Pounds)</p>
      
      <p style="margin-bottom: 2rem;"><strong>The Transferor transfers with:</strong> Full title guarantee</p>
      
      <div style="border-top: 1px solid #ddd; padding-top: 2rem;">
        <p style="margin-bottom: 1rem;"><strong>Signed as a deed by the Transferor:</strong></p>
        <p style="margin-bottom: 3rem;">Signature: __________________________</p>
        
        <p style="margin-bottom: 1rem;"><strong>Signed as a deed by the Transferee:</strong></p>
        <p>Signature: __________________________</p>
      </div>
    `,
    contract: `
      <h3 style="text-align: center; margin-bottom: 2rem;">CONTRACT OF SALE</h3>
      
      <p style="margin-bottom: 1rem;"><strong>This Agreement</strong> is made the [Date] day of April 2025</p>
      
      <p style="margin-bottom: 1rem;"><strong>BETWEEN:</strong></p>
      <p style="margin-bottom: 1rem;">(1) John Smith and Jane Smith of 42 Willow Avenue, London, SE15 6RT (the "Seller")</p>
      <p style="margin-bottom: 1rem;">(2) Michael Johnson of 17 Oak Road, London, N4 2LP (the "Buyer")</p>
      
      <p style="margin-bottom: 1rem;"><strong>PROPERTY:</strong> 42 Willow Avenue, London, SE15 6RT as registered at HM Land Registry under title number NGL892341</p>
      
      <p style="margin-bottom: 1rem;"><strong>PURCHASE PRICE:</strong> £450,000 (Four Hundred and Fifty Thousand Pounds)</p>
      
      <p style="margin-bottom: 1rem;"><strong>DEPOSIT:</strong> £45,000 (Forty-Five Thousand Pounds) payable on exchange of contracts</p>
      
      <p style="margin-bottom: 1rem;"><strong>COMPLETION DATE:</strong> May 1, 2025</p>
      
      <h4 style="margin-top: 2rem; margin-bottom: 1rem;">THE PARTIES AGREE AS FOLLOWS:</h4>
      
      <ol style="margin-left: 1.5rem; margin-bottom: 2rem;">
        <li style="margin-bottom: 0.5rem;">The Seller will sell and the Buyer will buy the Property for the Purchase Price.</li>
        <li style="margin-bottom: 0.5rem;">Completion shall take place on the Completion Date.</li>
        <li style="margin-bottom: 0.5rem;">The Property is sold with vacant possession.</li>
        <li style="margin-bottom: 0.5rem;">The Buyer has received a copy of the title register and title plan.</li>
        <li style="margin-bottom: 0.5rem;">The Seller confirms that all fixtures and fittings listed in the Property Information Form are included in the sale.</li>
      </ol>
      
      <div style="border-top: 1px solid #ddd; padding-top: 2rem;">
        <p style="margin-bottom: 1rem;"><strong>Signed by the Seller:</strong></p>
        <p style="margin-bottom: 3rem;">Signature: __________________________</p>
        
        <p style="margin-bottom: 1rem;"><strong>Signed by the Buyer:</strong></p>
        <p>Signature: __________________________</p>
      </div>
    `,
    mortgage: `
      <h3 style="text-align: center; margin-bottom: 2rem;">MORTGAGE DEED</h3>
      
      <p style="text-align: center; margin-bottom: 2rem; font-style: italic;">Awaiting final approval from mortgage lender.</p>
      
      <p style="margin-bottom: 1rem;"><strong>Date:</strong> [To be dated on signing]</p>
      
      <p style="margin-bottom: 1rem;"><strong>Borrower:</strong> Michael Johnson</p>
      
      <p style="margin-bottom: 1rem;"><strong>Lender:</strong> National Mortgage Bank plc</p>
      
      <p style="margin-bottom: 1rem;"><strong>Property:</strong> 42 Willow Avenue, London, SE15 6RT</p>
      
      <p style="margin-bottom: 1rem;"><strong>Title Number:</strong> NGL892341</p>
      
      <p style="margin-bottom: 1rem;"><strong>Mortgage Account Number:</strong> 2045781</p>
      
      <p style="margin-bottom: 1rem;"><strong>Mortgage Amount:</strong> £360,000 (Three Hundred and Sixty Thousand Pounds)</p>
      
      <p style="margin-bottom: 2rem;"><strong>This mortgage secures the obligations of the Borrower to the Lender under the terms of the mortgage agreement dated April 15, 2025.</strong></p>
      
      <div style="border-top: 1px solid #ddd; margin-top: 2rem; padding-top: 2rem;">
        <p style="margin-bottom: 1rem; color: #777; font-style: italic;">Note: This document is awaiting final approval from the lender. Once approved, you will be able to review and sign the final document.</p>
      </div>
    `,
    sdlt: `
      <h3 style="text-align: center; margin-bottom: 2rem;">STAMP DUTY LAND TAX RETURN</h3>
      
      <p style="text-align: center; margin-bottom: 2rem; color: #c62828;">Additional information required - Please complete the highlighted sections.</p>
      
      <div style="background-color: rgba(198, 40, 40, 0.1); padding: 1.5rem; border-radius: 6px; margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 1rem; color: #c62828;">Required Information</h4>
        <p style="margin-bottom: 0.5rem;">To complete your SDLT declaration, please provide information about:</p>
        <ul style="margin-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">Any other properties you currently own or have owned in the last 3 years</li>
          <li style="margin-bottom: 0.5rem;">Whether this property is your main residence</li>
          <li style="margin-bottom: 0.5rem;">If you're a first-time buyer</li>
        </ul>
      </div>
      
      <p style="margin-bottom: 1rem;"><strong>SDLT Reference:</strong> [To be assigned]</p>
      
      <p style="margin-bottom: 1rem;"><strong>Effective Date of Transaction:</strong> May 1, 2025</p>
      
      <p style="margin-bottom: 1rem;"><strong>Purchaser:</strong> Michael Johnson</p>
      
      <p style="margin-bottom: 1rem;"><strong>Property Address:</strong> 42 Willow Avenue, London, SE15 6RT</p>
      
      <p style="margin-bottom: 1rem;"><strong>Consideration:</strong> £450,000</p>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem;"><strong>Is this your only property?</strong></p>
        <div style="display: flex; gap: 1rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="radio" name="only-property"> Yes
          </label>
          <label style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="radio" name="only-property"> No
          </label>
        </div>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem;"><strong>First-time buyer?</strong></p>
        <div style="display: flex; gap: 1rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="radio" name="first-time"> Yes
          </label>
          <label style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="radio" name="first-time"> No
          </label>
        </div>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <p style="margin-bottom: 0.5rem;"><strong>Will this be your main residence?</strong></p>
        <div style="display: flex; gap: 1rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="radio" name="main-residence"> Yes
          </label>
          <label style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="radio" name="main-residence"> No
          </label>
        </div>
      </div>
    `,
    lease: `
      <h3 style="text-align: center; margin-bottom: 2rem;">LEASEHOLD INFORMATION PACK</h3>
      
      <p style="margin-bottom: 1rem;"><strong>Property:</strong> 42 Willow Avenue, London, SE15 6RT</p>
      
      <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">Lease Details</h4>
      <div style="margin-bottom: 1.5rem;">
        <p><strong>Original Lease Date:</strong> June 10, 1985</p>
        <p><strong>Term:</strong> 125 years</p>
        <p><strong>Years Remaining:</strong> 85 years</p>
        <p><strong>Ground Rent:</strong> £150 per annum</p>
        <p><strong>Ground Rent Review:</strong> Every 10 years, doubled</p>
        <p><strong>Next Ground Rent Review:</strong> June 10, 2025</p>
      </div>
      
      <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">Service Charge Information</h4>
      <div style="margin-bottom: 1.5rem;">
        <p><strong>Current Service Charge:</strong> £1,200 per annum</p>
        <p><strong>Payment Schedule:</strong> Quarterly (£300 per quarter)</p>
        <p><strong>Management Company:</strong> Willow Estate Management Ltd</p>
        <p><strong>Last 3 Years Average:</strong> £1,150 per annum</p>
      </div>
      
      <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">Key Lease Restrictions</h4>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li style="margin-bottom: 0.5rem;">No subletting without landlord consent</li>
        <li style="margin-bottom: 0.5rem;">No alterations affecting structure without landlord consent</li>
        <li style="margin-bottom: 0.5rem;">No pets without landlord consent</li>
        <li style="margin-bottom: 0.5rem;">No commercial use of property</li>
      </ul>
      
      <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">Building Insurance</h4>
      <div style="margin-bottom: 1.5rem;">
        <p><strong>Buildings Insurance:</strong> Included in service charge</p>
        <p><strong>Insurance Provider:</strong> National Property Insurance Ltd</p>
        <p><strong>Policy Number:</strong> NPL-84529-001</p>
      </div>
    `,
    id: `
      <h3 style="text-align: center; margin-bottom: 2rem;">IDENTITY VERIFICATION CERTIFICATE</h3>
      
      <div style="text-align: center; margin-bottom: 2rem; color: #2e7d32; font-weight: bold;">
        <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <p>Verification Successful</p>
      </div>
      
      <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 1rem;">Personal Details</h4>
        <p><strong>Name:</strong> Michael Johnson</p>
        <p><strong>Date of Birth:</strong> 12/05/1985</p>
        <p><strong>Current Address:</strong> 17 Oak Road, London, N4 2LP</p>
      </div>
      
      <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 1rem;">Documents Verified</h4>
        <p><strong>Primary ID:</strong> UK Passport</p>
        <p><strong>Address Verification:</strong> Utility Bill (dated 03/04/2025)</p>
        <p><strong>Additional Check:</strong> Electoral Register</p>
      </div>
      
      <div style="margin-bottom: 2rem;">
        <h4 style="margin-bottom: 1rem;">Verification Method</h4>
        <p><strong>Digital ID Check:</strong> Completed using AI facial recognition</p>
        <p><strong>Document Authenticity:</strong> Verified using document security features</p>
        <p><strong>Database Checks:</strong> Electoral roll, credit history, sanctions list</p>
      </div>
      
      <div style="border-top: 1px solid #ddd; margin-top: 2rem; padding-top: 1.5rem;">
        <p style="text-align: center; color: #666;">This verification was completed in compliance with the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017.</p>
      </div>
    `
  };

  // Document card component
  const DocumentCard = ({ document, onView, onAction }) => {
    const { id, title, description, icon, status, statusText, actionText, disabled, completed } = document;
    
    return (
      <div className="document-card">
        <div className="document-icon">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <div className="document-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="document-status">
            <span className={`status-indicator status-${status}`}></span>
            <span>{statusText}</span>
          </div>
          <div className="document-actions">
            <a 
              href="#" 
              className="document-btn btn-view"
              onClick={(e) => {
                e.preventDefault();
                onView(id);
              }}
            >
              View
            </a>
            
            {actionText && !completed && (
              <a 
                href="#" 
                className="document-btn btn-sign"
                onClick={(e) => {
                  e.preventDefault();
                  if (!disabled) onAction(id, actionText);
                }}
                style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
              >
                {actionText}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Timeline component
  const Timeline = ({ events }) => {
    return (
      <div className="timeline">
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`timeline-item ${event.completed ? 'completed' : ''}`}
          >
            <div className="timeline-date">{event.date}</div>
            <h3 className="timeline-title">{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    );
  };

  // Handle document viewing
  const handleViewDocument = (docId) => {
    setCurrentModal(docId);
  };

  // Handle document action (sign, complete, acknowledge)
  const handleDocumentAction = (docId, action) => {
    alert(`In a real application, this would open the ${action.toLowerCase()} process for the ${documents.find(d => d.id === docId).title}.`);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setCurrentModal(null);
  };

  // Navigation handlers
  const handleBack = () => {
    navigate('/app/search-results');
  };

  const handleComplete = () => {
    alert('All documents would be prepared for signing. In a real application, this would proceed to the electronic signature process.');
  };

  return (
    <MainLayout>
      {/* Progress Bar */}
      <ProgressBar step={5} totalSteps={5} />

      <div className="page-layout">
        <div className="main-content">
          {/* Document Container */}
          <div className="document-container">
            <div className="document-header">
              <h2>Required Legal Documents</h2>
              <p>I've prepared all the necessary legal documents for your property purchase.</p>
            </div>
            
            {/* Document Cards Grid */}
            <div className="document-cards">
              {documents.map(document => (
                <DocumentCard 
                  key={document.id}
                  document={document}
                  onView={handleViewDocument}
                  onAction={handleDocumentAction}
                />
              ))}
            </div>
          </div>

          {/* Transaction Timeline */}
          <div className="timeline-container">
            <h2>Transaction Timeline</h2>
            <p>Your personalized timeline based on progress so far.</p>
            
            <Timeline events={timelineEvents} />
          </div>

          <div className="btn-container">
            <button type="button" onClick={handleBack} className="btn btn-secondary">Back to Search Results</button>
            <button type="button" onClick={handleComplete} className="btn">Complete All Documents</button>
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

      {/* Document preview modals */}
      {currentModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{documents.find(d => d.id === currentModal)?.title}</h2>
              <button className="close-modal" onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="document-meta">
              <div className="meta-item">
                <h4>Document Type</h4>
                <p>{documents.find(d => d.id === currentModal)?.title}</p>
              </div>
              <div className="meta-item">
                <h4>Property Address</h4>
                <p>42 Willow Avenue, London, SE15 6RT</p>
              </div>
              <div className="meta-item">
                <h4>Status</h4>
                <p>
                  <span 
                    className={`status-indicator status-${documents.find(d => d.id === currentModal)?.status}`} 
                    style={{ marginRight: '5px' }}
                  ></span>
                  {documents.find(d => d.id === currentModal)?.statusText}
                </p>
              </div>
              <div className="meta-item">
                <h4>Last Updated</h4>
                <p>{documents.find(d => d.id === currentModal)?.lastUpdated}</p>
              </div>
            </div>
            <div 
              className="document-preview"
              dangerouslySetInnerHTML={{ __html: documentContent[currentModal] }}
            ></div>
            <button 
              className="btn"
              disabled={documents.find(d => d.id === currentModal)?.disabled}
            >
              {documents.find(d => d.id === currentModal)?.disabled 
                ? 'Awaiting Lender Approval' 
                : documents.find(d => d.id === currentModal)?.completed 
                  ? 'Verification Complete' 
                  : `${documents.find(d => d.id === currentModal)?.actionText} Document`}
            </button>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default DocumentPreparationPage;