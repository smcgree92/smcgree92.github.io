import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const StartupPlanPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Startup Plan</h1>
          <p>Our comprehensive strategy to revolutionize UK property conveyancing</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prototype-section">
        <div className="container">
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>The Problem</h3>
            </div>
            <p>The UK property conveyancing process is notoriously slow (averaging 20 weeks), expensive (£1,000-£3,000 per transaction), error-prone, and lacks transparency. Traditional solicitor-led processes create bottlenecks, increase costs, and generate anxiety for property buyers and sellers.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our Solution</h3>
            </div>
            <p>Search First AI automates the entire conveyancing process using AI to handle legal document interpretation, due diligence, risk assessment, and communication—replacing the need for human solicitors while maintaining legal compliance and reducing processing time by 70%.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Value Proposition</h3>
            </div>
            <ul>
              <li><strong>Faster:</strong> Reduce conveyancing time from 20 weeks to 4-6 weeks</li>
              <li><strong>Cheaper:</strong> Cut costs by 50-60% compared to traditional solicitors</li>
              <li><strong>Transparent:</strong> Real-time progress tracking and updates</li>
              <li><strong>Reduced Stress:</strong> AI-guided process with plain-English explanations</li>
              <li><strong>24/7 Availability:</strong> No waiting for solicitor business hours</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Target Customer</h3>
            </div>
            <h4>Primary</h4>
            <p>First-time home buyers (aged 25-40) in the UK who are tech-savvy, cost-conscious, and frustrated by traditional processes.</p>
            
            <h4 className="mt-3">Secondary</h4>
            <ul>
              <li>Property sellers looking for faster completions</li>
              <li>Real estate agents seeking faster transaction times</li>
              <li>Buy-to-let investors handling multiple properties</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Go-to-Market Strategy</h3>
            </div>
            <h4>Phased Rollout</h4>
            <ul>
              <li>Phase 1: Launch in specific regions (e.g., Greater London) to refine the product</li>
              <li>Phase 2: Expand to major UK cities</li>
              <li>Phase 3: Nationwide rollout</li>
            </ul>
            
            <h4 className="mt-3">Channel Strategy</h4>
            <ul>
              <li>Direct-to-consumer through SEO-optimized website and digital marketing</li>
              <li>Partnerships with online estate agents (Purplebricks, Strike)</li>
              <li>Integrations with property portals (Rightmove, Zoopla)</li>
              <li>Referral programs with mortgage brokers and financial advisors</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Pricing Model</h3>
            </div>
            <ul>
              <li>Flat fee (£500-750) for standard transactions</li>
              <li>Premium tier for complex cases (£900-1,200)</li>
              <li>Success-based fees (partial refund if deal falls through)</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Competitive Advantage</h3>
            </div>
            <ul>
              <li><strong>AI-First Approach:</strong> Unlike hybrid models that merely assist human solicitors</li>
              <li><strong>Full Automation:</strong> End-to-end solution versus point solutions that only tackle parts of the process</li>
              <li><strong>Regulatory Focus:</strong> Built specifically for UK conveyancing regulations from the ground up</li>
              <li><strong>Data Advantage:</strong> Each transaction improves the AI system, creating a flywheel effect</li>
              <li><strong>Cost Structure:</strong> No expensive solicitor salaries enables dramatically lower pricing</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Key Performance Metrics</h3>
            </div>
            <ul>
              <li>Average completion time (target: 4-6 weeks)</li>
              <li>Customer acquisition cost (target: &lt;£200)</li>
              <li>Conversion rate from inquiry to completed transaction</li>
              <li>Error rate compared to traditional conveyancing</li>
              <li>Customer satisfaction score (NPS target: &gt;60)</li>
              <li>Weekly/monthly transaction volume</li>
              <li>Regulatory compliance rate (target: 100%)</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to experience the future of conveyancing?</h2>
          <p className="mb-4">Try our interactive prototype to see how we're revolutionizing property transfers.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default StartupPlanPage;