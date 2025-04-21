import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const AboutPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>About SearchFirstAI</h1>
          <p>Our mission, team, and vision for transforming property conveyancing</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prototype-section">
        <div className="container">
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our Mission</h3>
            </div>
            <p>SearchFirstAI is dedicated to revolutionizing the UK property transfer process by replacing slow, expensive manual conveyancing with AI-driven automation. We believe that buying and selling property should be fast, affordable, and stress-free.</p>
            
            <p>Our mission is to cut conveyancing times by 70%, reduce costs by 50%, and provide complete transparency throughout the entire process. We're using cutting-edge AI technology to solve a problem that has frustrated homebuyers and sellers for decades.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our Team</h3>
            </div>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo bg-placeholder"></div>
                <h4>Sarah Mitchell</h4>
                <p className="member-title">Chief Executive Officer</p>
                <p>Former PropTech executive with 15 years of experience in real estate technology and a passion for transforming traditional industries through innovation.</p>
              </div>
              
              <div className="team-member">
                <div className="member-photo bg-placeholder"></div>
                <h4>James Thompson</h4>
                <p className="member-title">Chief Technology Officer</p>
                <p>AI researcher and engineering leader specializing in document understanding models, with previous experience at leading AI research labs.</p>
              </div>
              
              <div className="team-member">
                <div className="member-photo bg-placeholder"></div>
                <h4>Priya Sharma</h4>
                <p className="member-title">Chief Legal Officer</p>
                <p>Experienced conveyancing solicitor and legal tech expert with over a decade of experience in UK property law and regulatory compliance.</p>
              </div>
              
              <div className="team-member">
                <div className="member-photo bg-placeholder"></div>
                <h4>David Wilson</h4>
                <p className="member-title">Chief Product Officer</p>
                <p>Product leader with background in creating user-friendly legal services and a track record of building intuitive digital experiences.</p>
              </div>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our Values</h3>
            </div>
            
            <div className="values-grid">
              <div className="value-card">
                <h4>Innovation</h4>
                <p>We continuously push boundaries to create better solutions, never accepting "that's how it's always been done" as an answer.</p>
              </div>
              
              <div className="value-card">
                <h4>Transparency</h4>
                <p>We believe in complete openness about our process, pricing, and progress, eliminating the uncertainty that plagues traditional conveyancing.</p>
              </div>
              
              <div className="value-card">
                <h4>Reliability</h4>
                <p>We deliver consistent, accurate results that users can trust, with systems designed for dependability at every step.</p>
              </div>
              
              <div className="value-card">
                <h4>Accessibility</h4>
                <p>We make legal services available to everyone, not just those who can afford traditional fees, democratizing access to property ownership.</p>
              </div>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our Story</h3>
            </div>
            <p>SearchFirstAI was born from the founders' frustrating experiences with traditional conveyancing during their own property transactions. After witnessing firsthand the delays, opacity, and high costs of the process, they became determined to find a better way.</p>
            
            <p>The team spent months researching the conveyancing process, speaking with homebuyers, sellers, and industry experts to understand the pain points and bottlenecks. They discovered that while many aspects of buying and selling property had been digitized, the legal process remained stubbornly archaic.</p>
            
            <p>With backgrounds spanning legal practice, AI research, and product development, the founding team realized they had the perfect combination of expertise to tackle this challenge. SearchFirstAI was launched with a clear mission: to make property transfers faster, cheaper, and completely transparent through the power of artificial intelligence.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Join Our Journey</h3>
            </div>
            <p>We're always looking for talented individuals who share our passion for revolutionizing property transactions. Whether you're an AI engineer, legal expert, product designer, or customer experience specialist, we'd love to hear from you.</p>
            
            <div className="cta-container text-center">
              <Link to="/app" className="cta-button">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience our vision firsthand</h2>
          <p className="mb-4">Try our interactive prototype to see how we're transforming property conveyancing.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default AboutPage;