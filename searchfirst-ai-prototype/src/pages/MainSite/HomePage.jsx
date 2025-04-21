import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const HomePage = () => {
  return (
    <MainSiteLayout>
      {/* Hero section */}
      <section className="hero">
        <div className="hero-container">
          <h1>SearchFirstAI</h1>
          <h2>Sell Faster</h2>
          <p>Revolutionizing UK property conveyancing with AI. We replace traditional solicitors with intelligent automation to make property transfers faster, cheaper, and stress-free.</p>
          <Link to="/main/startup-plan" className="cta-button">Explore Our Vision</Link>
        </div>
      </section>
      
      {/* Features section */}
      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Why Choose SearchFirstAI?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>70% Faster</h3>
              <p>Reduce conveyancing time from 20 weeks to just 4-6 weeks with our automated process.</p>
            </div>
            <div className="feature-card">
              <h3>50% Cheaper</h3>
              <p>Save thousands of pounds with our efficient AI-powered platform compared to traditional solicitors.</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Availability</h3>
              <p>No more waiting for business hours. Our AI works around the clock to progress your sale.</p>
            </div>
            <div className="feature-card">
              <h3>Complete Transparency</h3>
              <p>Track every step of the process in real-time with our intuitive dashboard.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Summary section */}
      <section className="summary">
        <div className="summary-container">
          <h2 className="section-title">Transforming Property Transactions</h2>
          <p>SearchFirstAI is revolutionizing UK property conveyancing by replacing traditional solicitors with AI-powered automation. Our platform handles the entire legal process of transferring property ownership—from contract review and due diligence to risk assessment and completion.</p>
          <p>By combining specialized legal LLMs, document processing, and secure integrations with government databases, we've created the first fully autonomous conveyancing solution that's faster, cheaper, and more transparent than traditional methods.</p>
          <p>With over 1.2 million property transactions in the UK annually and an average traditional cost of £1,500 per transaction, we're targeting a £1.8 billion market ripe for disruption.</p>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="cta-section">
        <h2>Ready to Revolutionize Property Conveyancing?</h2>
        <Link to="/main/startup-plan" className="cta-button">View Our Detailed Plan</Link>
      </section>
      
      {/* Prototype Banner */}
      <div className="prototype-banner">
        <h3>Experience Our Interactive Prototype</h3>
        <p>See how our AI-powered conveyancing platform works with our interactive demo.</p>
        <Link to="/app" className="btn">Launch Prototype</Link>
      </div>
    </MainSiteLayout>
  );
};

export default HomePage;