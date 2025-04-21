import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const PrototypePlanPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Search First AI: 3-Week Prototype Plan</h1>
          <p>Our focused strategy to rapidly build a functional prototype that demonstrates core value</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prototype-section">
        <div className="container">
          <h2 className="section-title">Prototype Focus Areas</h2>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>1. Core Document Analysis Engine</h3>
              <i className="fas fa-file-search"></i>
            </div>
            <h4 className="mb-2">Build a simplified LLM-based document analyzer</h4>
            <ul>
              <li>Fine-tune an existing LLM on a small set of conveyancing documents</li>
              <li>Focus on extracting key information from title registers and leasehold documents</li>
              <li>Implement basic classification of property types and ownership structures</li>
            </ul>
            
            <h4 className="mb-2 mt-4">Test with 10-15 sample property documents</h4>
            <ul>
              <li>Use publicly available Land Registry samples</li>
              <li>Include both straightforward and complex examples</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>2. Simplified User Flow</h3>
              <i className="fas fa-user-check"></i>
            </div>
            <h4 className="mb-2">Create a basic web interface showcasing the critical user journey</h4>
            <ul>
              <li>Property input screen (address, type, basic details)</li>
              <li>Document upload functionality</li>
              <li>Results dashboard showing extracted information</li>
              <li>Simplified legal status report</li>
            </ul>
            
            <p className="mt-3">Focus on the "wow moment" where AI extracts complex legal details instantly</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>3. Single API Integration</h3>
              <i className="fas fa-plug"></i>
            </div>
            <h4 className="mb-2">Implement one key API connection as proof of concept</h4>
            <ul>
              <li>Land Registry Title Register API (most critical for demonstrating core value)</li>
              <li>Build minimal viable integration to fetch tenure information</li>
              <li>Create simple visualization of the data</li>
            </ul>
            
            <p className="mt-3">Mock the other API integrations for demo purposes</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>4. Simulated End-to-End Process</h3>
              <i className="fas fa-route"></i>
            </div>
            <h4 className="mb-2">Create a guided demo path that shows the full potential</h4>
            <ul>
              <li>Use pre-populated sample properties</li>
              <li>Show "before and after" comparison with traditional conveyancing</li>
              <li>Highlight time and cost savings with concrete examples</li>
            </ul>
            
            <p className="mt-3">Script the demo to avoid edge cases during presentations</p>
          </div>
        </div>
      </section>
      
      {/* Implementation Plan */}
      <section className="prototype-section" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Implementation Plan</h2>
          
          {/* Week 1 */}
          <div className="week-container">
            <div className="week-header">
              <h3>Week 1: Foundation</h3>
            </div>
            
            <div className="day-grid">
              <div className="day-card">
                <h4><span>1-2</span> Collect Sample Documents</h4>
                <ul>
                  <li>Gather 20+ representative conveyancing documents</li>
                  <li>Categorize by property type and complexity</li>
                </ul>
              </div>
              
              <div className="day-card">
                <h4><span>3-4</span> Initial LLM Setup</h4>
                <ul>
                  <li>Set up development environment</li>
                  <li>Implement document parsing pipeline</li>
                  <li>Create basic prompt engineering for LLM</li>
                </ul>
              </div>
              
              <div className="day-card">
                <h4><span>5-7</span> User Interface Skeleton</h4>
                <ul>
                  <li>Build minimal UI framework</li>
                  <li>Implement basic user flow</li>
                  <li>Create wireframes for key screens</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Week 2 */}
          <div className="week-container">
            <div className="week-header">
              <h3>Week 2: Core Functionality</h3>
            </div>
            
            <div className="day-grid">
              <div className="day-card">
                <h4><span>8-10</span> Document Analysis Implementation</h4>
                <ul>
                  <li>Fine-tune document extraction capabilities</li>
                  <li>Test with sample documents</li>
                  <li>Implement error handling for common issues</li>
                </ul>
              </div>
              
              <div className="day-card">
                <h4><span>11-12</span> Land Registry API Connection</h4>
                <ul>
                  <li>Set up API authentication</li>
                  <li>Implement basic query functionality</li>
                  <li>Create simple data visualizations</li>
                </ul>
              </div>
              
              <div className="day-card">
                <h4><span>13-14</span> Integration Layer</h4>
                <ul>
                  <li>Connect UI to backend services</li>
                  <li>Implement basic user authentication</li>
                  <li>Create document storage solution</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Week 3 */}
          <div className="week-container">
            <div className="week-header">
              <h3>Week 3: Refinement and Demo Prep</h3>
            </div>
            
            <div className="day-grid">
              <div className="day-card">
                <h4><span>15-17</span> Testing and Debugging</h4>
                <ul>
                  <li>Test end-to-end flows with sample properties</li>
                  <li>Fix critical issues</li>
                  <li>Optimize performance for demo</li>
                </ul>
              </div>
              
              <div className="day-card">
                <h4><span>18-19</span> Demo Script and Materials</h4>
                <ul>
                  <li>Create compelling demo narrative</li>
                  <li>Prepare sample property showcases</li>
                  <li>Document key selling points and technical capabilities</li>
                </ul>
              </div>
              
              <div className="day-card">
                <h4><span>20-21</span> Stakeholder Previews</h4>
                <ul>
                  <li>Run internal demo sessions</li>
                  <li>Gather feedback</li>
                  <li>Make final adjustments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Shortcuts */}
      <section className="prototype-section">
        <div className="container">
          <h2 className="section-title">Technical Implementation Shortcuts</h2>
          
          <div className="shortcuts-grid">
            <div className="shortcut-card">
              <h3>Use Existing APIs Instead of Building Custom</h3>
              <ul>
                <li>Leverage ChatGPT API for document analysis instead of fine-tuning custom models</li>
                <li>Use ready-made UI libraries and templates (Material UI, Tailwind)</li>
                <li>Implement Firebase for quick backend setup</li>
              </ul>
            </div>
            
            <div className="shortcut-card">
              <h3>Focus on Happy Path Only</h3>
              <ul>
                <li>Skip complex error handling</li>
                <li>Assume well-formatted documents</li>
                <li>Ignore edge cases for the prototype</li>
              </ul>
            </div>
            
            <div className="shortcut-card">
              <h3>Mock Where Necessary</h3>
              <ul>
                <li>Pre-process test documents to ensure successful analysis</li>
                <li>Hardcode certain responses for predictable demo flow</li>
                <li>Use Wizard of Oz techniques for complex features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Metrics */}
      <section className="prototype-section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">Key Metrics for Prototype Success</h2>
          
          <div className="metrics-container">
            <div className="metric-group">
              <h3>Document Analysis Accuracy</h3>
              <div className="metric-item">
                <div className="metric-bullet success"></div>
                <p>Successfully extract key information from &gt;80% of test documents</p>
              </div>
              <div className="metric-item">
                <div className="metric-bullet success"></div>
                <p>Correctly identify property tenure in &gt;90% of cases</p>
              </div>
              <div className="metric-item">
                <div className="metric-bullet success"></div>
                <p>Accurately flag potential issues in sample properties</p>
              </div>
            </div>
            
            <div className="metric-group">
              <h3>User Experience Validation</h3>
              <div className="metric-item">
                <div className="metric-bullet pending"></div>
                <p>Time to complete basic property submission &lt;5 minutes</p>
              </div>
              <div className="metric-item">
                <div className="metric-bullet pending"></div>
                <p>Clearly communicates legal status in non-technical language</p>
              </div>
              <div className="metric-item">
                <div className="metric-bullet pending"></div>
                <p>Provides compelling visualization of property information</p>
              </div>
            </div>
            
            <div className="metric-group">
              <h3>Technical Feasibility Confirmation</h3>
              <div className="metric-item">
                <div className="metric-bullet pending"></div>
                <p>Successfully connects to at least one external data source</p>
              </div>
              <div className="metric-item">
                <div className="metric-bullet pending"></div>
                <p>Demonstrates scalable architecture approach</p>
              </div>
              <div className="metric-item">
                <div className="metric-bullet pending"></div>
                <p>Identifies potential technical challenges for full implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Steps */}
      <section className="prototype-section">
        <div className="container">
          <h2 className="section-title">Next Steps After Prototype</h2>
          
          <div className="next-steps-grid">
            <div className="next-step-card">
              <h3>Stakeholder Feedback Sessions</h3>
              <ul>
                <li>Demo to potential investors</li>
                <li>Get input from real estate professionals</li>
                <li>Test with potential customers</li>
              </ul>
            </div>
            
            <div className="next-step-card">
              <h3>Development Roadmap Refinement</h3>
              <ul>
                <li>Prioritize features based on prototype learnings</li>
                <li>Identify technical debt accumulated during rapid prototyping</li>
                <li>Create detailed implementation plan for v1.0</li>
              </ul>
            </div>
            
            <div className="next-step-card">
              <h3>Resource Planning</h3>
              <ul>
                <li>Define team structure needed for full development</li>
                <li>Estimate realistic timelines for full product</li>
                <li>Calculate more precise development costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to see our prototype in action?</h2>
          <p className="mb-4">Try our interactive prototype to experience the AI-powered conveyancing platform.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default PrototypePlanPage;