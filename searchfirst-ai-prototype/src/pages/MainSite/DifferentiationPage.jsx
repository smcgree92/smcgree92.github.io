import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const DifferentiationPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Differentiation</h1>
          <p>How Search First AI stands out in the conveyancing landscape</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prototype-section">
        <div className="container">
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our Competitive Landscape</h3>
            </div>
            <p>The UK conveyancing market is ripe for disruption. While there have been attempts to digitize aspects of the process, Search First AI represents a fundamental reimagining of property transactions through full AI automation. Here's how we compare to existing players in the market:</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Versus Traditional Law Firms</h3>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Traditional Law Firms</th>
                    <th>Search First AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Processing Time</strong></td>
                    <td>20+ weeks average</td>
                    <td>4-6 weeks (70-80% faster)</td>
                  </tr>
                  <tr>
                    <td><strong>Cost</strong></td>
                    <td>£1,000-£3,000</td>
                    <td>£500-£950 (50-60% cheaper)</td>
                  </tr>
                  <tr>
                    <td><strong>Availability</strong></td>
                    <td>Business hours only</td>
                    <td>24/7 service</td>
                  </tr>
                  <tr>
                    <td><strong>Consistency</strong></td>
                    <td>Variable (human-dependent)</td>
                    <td>Standardized process</td>
                  </tr>
                  <tr>
                    <td><strong>Transparency</strong></td>
                    <td>Periodic updates</td>
                    <td>Real-time progress tracking</td>
                  </tr>
                  <tr>
                    <td><strong>Language</strong></td>
                    <td>Legal jargon</td>
                    <td>Plain English explanations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Traditional law firms rely on manual processes, creating bottlenecks when solicitors are handling multiple cases simultaneously. Our AI-powered automation eliminates these bottlenecks while maintaining the highest levels of legal compliance.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Versus PropTech Companies</h3>
            </div>
            <p>Companies like Habito and Nested have digitized portions of the property transaction process, but none have fully automated conveyancing:</p>
            
            <div className="comparison-item">
              <h4><strong>Focus</strong></h4>
              <p>Full conveyancing automation versus mortgage or agent services</p>
            </div>
            
            <div className="comparison-item">
              <h4><strong>Depth</strong></h4>
              <p>End-to-end legal handling versus partial process assistance</p>
            </div>
            
            <div className="comparison-item">
              <h4><strong>Integration</strong></h4>
              <p>Direct connections to all required data sources</p>
            </div>
            
            <div className="comparison-item">
              <h4><strong>Autonomy</strong></h4>
              <p>Fully autonomous versus human-in-the-loop models</p>
            </div>
            
            <div className="comparison-item">
              <h4><strong>Specialization</strong></h4>
              <p>Built specifically for conveyancing versus general property services</p>
            </div>
            
            <div className="comparison-item">
              <h4><strong>Intelligence</strong></h4>
              <p>Advanced legal reasoning versus basic form-filling automation</p>
            </div>
            
            <p className="mt-3">While PropTech companies have improved parts of the property journey, they typically still rely on traditional conveyancing solicitors for the legal aspects, creating the same bottlenecks and delays.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Versus Legal Tech Startups</h3>
            </div>
            <p>Several legal tech startups have created tools to assist solicitors with conveyancing, but none have created a fully automated, consumer-facing solution:</p>
            
            <ul>
              <li><strong>Completeness:</strong> We handle the entire process versus point solutions that address specific tasks</li>
              <li><strong>AI-First:</strong> Our platform is built around AI capabilities versus simply digitizing existing processes</li>
              <li><strong>Data Advantage:</strong> We develop proprietary training data from each transaction, creating a learning system</li>
              <li><strong>User Experience:</strong> Our consumer-friendly interface contrasts with tools designed for legal professionals</li>
              <li><strong>Adaptability:</strong> Our system improves with each transaction through continuous learning</li>
            </ul>
            
            <p>Most legal tech focuses on making solicitors more efficient rather than replacing them entirely. Our solution fundamentally changes the equation by eliminating the need for human solicitors in standard conveyancing processes.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our Sustainable Competitive Advantages</h3>
            </div>
            
            <div className="advantage-item">
              <h4>1. Data Network Effects</h4>
              <p>Every transaction processed by Search First AI improves our AI models, creating a virtuous cycle of better performance. As we handle more varied cases, our system becomes increasingly sophisticated at handling edge cases and detecting potential issues.</p>
            </div>
            
            <div className="advantage-item">
              <h4>2. Cost Structure</h4>
              <p>Without solicitor salaries, our cost structure enables us to offer dramatically lower prices while maintaining higher margins than traditional conveyancing firms.</p>
            </div>
            
            <div className="advantage-item">
              <h4>3. Technological Moat</h4>
              <p>Our specialized AI models for property law create a significant barrier to entry. Fine-tuning these models requires extensive domain expertise and proprietary training data that takes time to accumulate.</p>
            </div>
            
            <div className="advantage-item">
              <h4>4. Speed Advantage</h4>
              <p>Our automated processes operate at machine speed rather than human speed, creating a differentiator that traditional firms cannot match without completely reinventing their business model.</p>
            </div>
            
            <div className="advantage-item">
              <h4>5. Continuous Improvement</h4>
              <p>Our AI-first approach enables continuous improvement through machine learning, allowing us to constantly refine our processes based on real-world data and feedback.</p>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Building an Unassailable Position</h3>
            </div>
            <p>By combining technological innovation with domain expertise in UK conveyancing, Search First AI is positioning itself to become the dominant platform for property transfers in the UK. Our first-mover advantage in fully automated conveyancing creates opportunities to establish market leadership before traditional firms can adapt.</p>
            <p>As we scale, our data advantage will compound, making it increasingly difficult for competitors to match our speed, accuracy, and cost structure. This positions Search First AI for sustainable long-term growth and market leadership.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience the difference firsthand</h2>
          <p className="mb-4">Try our interactive prototype to see how we're revolutionizing property conveyancing.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default DifferentiationPage;