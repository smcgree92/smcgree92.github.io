import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const RoadmapPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Our Development Roadmap</h1>
          <p>From research to market - our 90-day journey to revolutionize conveyancing</p>
        </div>
      </section>

      {/* Roadmap Overview */}
      <section className="prototype-section">
        <div className="container">
          <div className="roadmap-phases">
            <div className="phase-card active">
              <div className="phase-number">1</div>
              <h3>Research & Validation</h3>
            </div>
            <div className="phase-card">
              <div className="phase-number">2</div>
              <h3>Core Technology</h3>
            </div>
            <div className="phase-card">
              <div className="phase-number">3</div>
              <h3>MVP & Testing</h3>
            </div>
          </div>
          
          <h2 className="section-title">Our 90-Day Development Plan</h2>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Development Timeline</h3>
            </div>
            
            <ol className="process-flow">
              <li className="process-step">
                <h4>Days 1-30: Research & Validation</h4>
                <div className="roadmap-subsection">
                  <h5>User Research & Process Mapping</h5>
                  <ul>
                    <li>Conduct 50+ interviews with recent homebuyers about pain points</li>
                    <li>Map the complete conveyancing process with 100+ decision points</li>
                    <li>Analyze 200+ sample conveyancing documents for training data</li>
                  </ul>
                </div>
                
                <div className="roadmap-subsection">
                  <h5>Business & Regulatory Framework</h5>
                  <ul>
                    <li>Research regulatory requirements and identify compliance challenges</li>
                    <li>Build financial model and unit economics projections</li>
                    <li>Identify and approach potential law firm partners for regulatory compliance</li>
                    <li>Create detailed data flow diagrams for end-to-end process</li>
                  </ul>
                </div>
              </li>
              
              <li className="process-step">
                <h4>Days 31-60: Core Technology Development</h4>
                <div className="roadmap-subsection">
                  <h5>AI & Document Processing</h5>
                  <ul>
                    <li>Develop document processing pipeline MVP (LLM + OCR)</li>
                    <li>Build first iteration of legal reasoning engine for basic cases</li>
                    <li>Create initial RAG system with core legal knowledge base</li>
                  </ul>
                </div>
                
                <div className="roadmap-subsection">
                  <h5>Platform Infrastructure</h5>
                  <ul>
                    <li>Develop prototype user interface for client onboarding</li>
                    <li>Establish initial integrations with Land Registry APIs</li>
                    <li>Build authentication and security foundations</li>
                    <li>Set up data storage architecture with GDPR compliance</li>
                    <li>Create basic automated communication flows</li>
                  </ul>
                </div>
              </li>
              
              <li className="process-step">
                <h4>Days 61-90: MVP Development & Testing</h4>
                <div className="roadmap-subsection">
                  <h5>Prototype Validation</h5>
                  <ul>
                    <li>Complete end-to-end prototype for standard residential transaction</li>
                    <li>Conduct supervised test runs with 10 simulated transactions</li>
                    <li>Develop evaluation metrics for accuracy and efficiency</li>
                    <li>Build basic client dashboard for process monitoring</li>
                    <li>Begin real-world testing with 5 actual transactions (under lawyer supervision)</li>
                  </ul>
                </div>
                
                <div className="roadmap-subsection">
                  <h5>Go-to-Market Preparation</h5>
                  <ul>
                    <li>Implement feedback loops from initial testing</li>
                    <li>Develop go-to-market strategy and launch plan</li>
                    <li>Begin discussions with key partners (estate agents, mortgage brokers)</li>
                    <li>Prepare for seed funding round with demonstration-ready prototype</li>
                    <li>Define roadmap for the next 6 months of development</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="contact-section">
            <h3>Want to learn more about our progress?</h3>
            <p>Join our mailing list for regular updates or get in touch to discuss partnership opportunities.</p>
            <Link to="/app" className="cta-button">Contact Us</Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>See our vision in action</h2>
          <p className="mb-4">Try our interactive prototype to experience the future of conveyancing.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default RoadmapPage;