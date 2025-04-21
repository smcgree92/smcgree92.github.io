import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const CustomerJourneyPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Customer Journey</h1>
          <p>How property sellers and buyers experience Search First AI</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prototype-section">
        <div className="container">
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Overview of Customer Experience</h3>
            </div>
            <p>Search First AI transforms the traditional conveyancing process by empowering customers with AI guidance and automation. Our platform eliminates delays, reduces dependencies on third parties, and provides unparalleled transparency throughout the property transaction process.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Customer Journey Map</h3>
            </div>
            
            <ol className="process-flow">
              <li className="process-step">
                <h4>Initial Engagement</h4>
                <ul>
                  <li><strong>Decision Trigger:</strong> Customer decides to sell their property</li>
                  <li><strong>Platform Discovery:</strong> Through online search, estate agent referral, or mortgage provider</li>
                  <li><strong>Account Creation:</strong> Simple sign-up with identity verification (ID upload + selfie)</li>
                  <li><strong>Property Input:</strong> Customer enters basic property details (address, property type, ownership status)</li>
                </ul>
              </li>
              
              <li className="process-step">
                <h4>Automated Search Process</h4>
                <ul>
                  <li><strong>Search Authorization:</strong> Customer authorizes Search First AI to conduct necessary searches</li>
                  <li><strong>API Integration:</strong> System connects to Land Registry, local authorities, and environmental data sources</li>
                  <li><strong>Real-Time Progress:</strong> Dashboard shows search progress and estimated completion times</li>
                  <li><strong>Smart Validation:</strong> AI cross-references results from multiple sources to identify discrepancies</li>
                </ul>
              </li>
              
              <li className="process-step">
                <h4>Property Status Assessment</h4>
                <ul>
                  <li><strong>Leasehold/Freehold Analysis:</strong> AI analyzes title information via Land Registry API</li>
                  <li><strong>Lease Document Processing:</strong> Automated extraction of critical lease terms</li>
                  <li><strong>Title Verification:</strong> Cross-referencing ownership data across multiple official sources</li>
                  <li><strong>Risk Assessment:</strong> Multi-factor analysis of search results and property data</li>
                  <li><strong>Readiness Determination:</strong> AI confirms when all legal requirements are satisfied</li>
                </ul>
              </li>
              
              <li className="process-step">
                <h4>Marketing and Offer Stage</h4>
                <ul>
                  <li><strong>Property Pack Generation:</strong> AI creates comprehensive legal pack for potential buyers</li>
                  <li><strong>Offer Processing:</strong> System helps evaluate legal implications of different offers</li>
                  <li><strong>Negotiation Support:</strong> AI provides legally-informed negotiation guidance</li>
                </ul>
              </li>
              
              <li className="process-step">
                <h4>Transaction Management</h4>
                <ul>
                  <li><strong>Contract Generation:</strong> AI creates appropriate contracts based on property type</li>
                  <li><strong>Digital Signatures:</strong> Secure e-signing of all required documents</li>
                  <li><strong>Completion Coordination:</strong> AI manages completion logistics and funds transfer timing</li>
                  <li><strong>Post-Completion:</strong> Automatic submission of SDLT returns and Land Registry updates</li>
                </ul>
              </li>
              
              <li className="process-step">
                <h4>Service Ecosystem Integration</h4>
                <ul>
                  <li><strong>Mortgage Referrals:</strong> AI recommends suitable mortgage providers</li>
                  <li><strong>Survey Arrangement:</strong> Coordination of property surveys based on property type</li>
                  <li><strong>Insurance Recommendations:</strong> Suggestions for appropriate insurance products</li>
                  <li><strong>Moving Services:</strong> Connections to removal companies and utility switching services</li>
                </ul>
              </li>
            </ol>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>User Interface Touchpoints</h3>
            </div>
            
            <div className="touchpoint-grid">
              <div className="touchpoint-card">
                <h4>Mobile-First Dashboard</h4>
                <p>Real-time status updates and action items accessible anywhere</p>
              </div>
              
              <div className="touchpoint-card">
                <h4>AI Assistant Chat</h4>
                <p>24/7 support and guidance through each step of the process</p>
              </div>
              
              <div className="touchpoint-card">
                <h4>Document Repository</h4>
                <p>Secure storage of all property-related documents</p>
              </div>
              
              <div className="touchpoint-card">
                <h4>Timeline Visualization</h4>
                <p>Clear display of progress, next steps, and estimated completion dates</p>
              </div>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Key Differentiation Points in Customer Experience</h3>
            </div>
            
            <div className="differentiator-item">
              <h4>Customer Control</h4>
              <p>Unlike traditional conveyancing where clients are passive participants, Search First AI empowers users to drive the process forward at their own pace. The platform puts customers in control while providing expert AI guidance every step of the way.</p>
            </div>
            
            <div className="differentiator-item">
              <h4>Transparency</h4>
              <p>Traditional conveyancing is notoriously opaque, with clients often left wondering about progress. Our platform provides full visibility into process status and requirements at all times, eliminating the anxiety of uncertainty.</p>
            </div>
            
            <div className="differentiator-item">
              <h4>Proactive Guidance</h4>
              <p>Rather than waiting for clients to ask questions, our AI anticipates next steps and potential obstacles, providing timely guidance before issues arise. This proactive approach prevents delays and streamlines the overall process.</p>
            </div>
            
            <div className="differentiator-item">
              <h4>Reduced Dependencies</h4>
              <p>By automating searches and document processing, we minimize reliance on third-party availability, removing common bottlenecks in the conveyancing process. This dramatically reduces waiting times and accelerates completion.</p>
            </div>
            
            <div className="differentiator-item">
              <h4>Integrated Ecosystem</h4>
              <p>Our platform creates seamless connections to complementary property services, creating a one-stop shop for the entire property transaction journey. This integration eliminates the hassle of coordinating multiple service providers separately.</p>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Customer Testimonials (Projected)</h3>
            </div>
            
            <div className="testimonial">
              <blockquote>
                "I sold my flat in London and the entire process took just 5 weeks from listing to completion. The AI guided me through every step and I always knew exactly what was happening. No more chasing solicitors for updates!"
              </blockquote>
              <cite>— Sarah, First-Time Seller</cite>
            </div>
            
            <div className="testimonial">
              <blockquote>
                "As a buy-to-let investor handling multiple properties, Search First AI has been a game-changer. I can manage all my transactions in one place, and the cost savings compared to traditional solicitors have been substantial."
              </blockquote>
              <cite>— James, Property Investor</cite>
            </div>
            
            <div className="testimonial">
              <blockquote>
                "The mortgage and insurance recommendations saved me hours of research, and I ended up with better deals than I would have found on my own. The ecosystem approach really adds value beyond just handling the legal side."
              </blockquote>
              <cite>— Emma, First-Time Buyer</cite>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience the journey yourself</h2>
          <p className="mb-4">Try our interactive prototype to see how we're transforming the property transaction experience.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default CustomerJourneyPage;