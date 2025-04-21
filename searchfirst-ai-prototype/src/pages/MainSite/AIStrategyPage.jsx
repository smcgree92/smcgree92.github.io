import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const AIStrategyPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>AI Strategy</h1>
          <p>Advanced technologies powering our conveyancing revolution</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prototype-section">
        <div className="container">
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our AI-First Approach</h3>
            </div>
            <p>Search First AI's competitive edge lies in our sophisticated AI implementation. We're not simply digitizing existing processes — we're fundamentally reimagining conveyancing through artificial intelligence. Our platform combines multiple specialized AI technologies to create a seamless, automated experience that's faster, more accurate, and more reliable than human-led processes.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Legal Document Interpretation</h3>
            </div>
            <h4>Large Language Models (LLMs)</h4>
            <p>Fine-tuned on UK property law documents and precedents</p>
            
            <h4 className="mt-3">Implementation</h4>
            <p>Custom model based on GPT-4 or Claude with specialized fine-tuning on conveyancing documents and legal tests</p>
            
            <h4 className="mt-3">Benefits</h4>
            <p>Understanding complex legal language, identifying anomalies, and extracting key data points</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Document Processing</h3>
            </div>
            <h4>Implementation</h4>
            <ul>
              <li><strong>OCR + Computer Vision:</strong> For handling scanned documents and official records</li>
              <li><strong>Named Entity Recognition:</strong> Extract key information like property details, dates, names, and financial terms</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Legal Reasoning Frameworks</h3>
            </div>
            <h4>Implementation</h4>
            <ul>
              <li><strong>Retrieval-Augmented Generation (RAG):</strong> Connect LLMs with up-to-date legal databases for accurate legal reasoning</li>
              <li><strong>Specialized Legal Knowledge Graphs:</strong> Model relationships between legal concepts and requirements</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Risk and Fraud Detection</h3>
            </div>
            <h4>Anomaly Detection</h4>
            <h5>Implementation</h5>
            <ul>
              <li><strong>Statistical models + ML:</strong> Identify unusual patterns in transactions</li>
              <li><strong>Graph Neural Networks:</strong> Detect suspicious relationships between parties</li>
            </ul>
            
            <h4 className="mt-3">Verification Systems</h4>
            <h5>Implementation</h5>
            <ul>
              <li><strong>Computer Vision + NLP:</strong> Verify ID documents and signatures</li>
              <li><strong>Behavioral Biometrics:</strong> Verify digital identity through behavior patterns</li>
              <li><strong>Anti-Money Laundering Models:</strong> Custom ML models trained on financial red flags</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Decision Intelligence</h3>
            </div>
            <h4>Implementation</h4>
            <ul>
              <li><strong>Bayesian Networks:</strong> Calculate risk probabilities</li>
              <li><strong>Multi-factor risk scoring:</strong> Combine multiple risk indicators into a holistic assessment</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Communication Systems</h3>
            </div>
            <h4>Conversational AI</h4>
            <h5>Implementation</h5>
            <ul>
              <li><strong>Fine-tuned LLMs:</strong> Handle natural language inquiries about the conveyancing process</li>
              <li><strong>Sentiment Analysis:</strong> Detect client concerns and adapt communication style</li>
            </ul>
            
            <h4 className="mt-3">Automated Updates</h4>
            <h5>Implementation</h5>
            <ul>
              <li><strong>NLG (Natural Language Generation):</strong> Create human-readable progress reports</li>
              <li><strong>Personalization Engines:</strong> Tailor communication style and frequency to user preferences</li>
            </ul>
            
            <h4 className="mt-3">Multi-channel Support</h4>
            <h5>Implementation</h5>
            <ul>
              <li><strong>Omnichannel AI:</strong> Consistent experience across web, mobile, email, and messaging</li>
              <li><strong>Voice AI Integration:</strong> Optional voice-based updates and queries</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Integration with Government/Third-Party Data</h3>
            </div>
            <h4>API Integration Suite</h4>
            <h5>Implementation</h5>
            <ul>
              <li><strong>Custom API Connectors:</strong> For Land Registry, HM Land Charges, HMRC, and local authorities</li>
              <li><strong>Data Transformation Pipelines:</strong> Convert between different data formats</li>
            </ul>
            
            <h4 className="mt-3">Autonomous Data Retrieval</h4>
            <h5>Implementation</h5>
            <ul>
              <li><strong>Intelligent Web Scraping:</strong> For publicly available but non-API accessible data</li>
              <li><strong>Secure Authentication Systems:</strong> For accessing authorized data sources</li>
            </ul>
            
            <h4 className="mt-3">Data Verification</h4>
            <h5>Implementation</h5>
            <ul>
              <li><strong>Cross-validation ML Models:</strong> Compare data across multiple sources to verify accuracy</li>
              <li><strong>Blockchain Integration:</strong> For immutable record-keeping of verified data</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Implementation Roadmap</h3>
            </div>
            <p>Our AI strategy follows a phased implementation approach:</p>
            
            <h4 className="mt-3">Phase 1: Core Document Analysis</h4>
            <ul>
              <li>Implement baseline LLM for document interpretation</li>
              <li>Develop document processing pipeline for standard formats</li>
              <li>Establish initial Land Registry API integrations</li>
            </ul>
            
            <h4 className="mt-3">Phase 2: Enhanced Automation</h4>
            <ul>
              <li>Deploy RAG systems with comprehensive legal knowledge base</li>
              <li>Implement basic risk detection models</li>
              <li>Develop automated client communication systems</li>
            </ul>
            
            <h4 className="mt-3">Phase 3: Advanced Intelligence</h4>
            <ul>
              <li>Launch sophisticated fraud detection systems</li>
              <li>Implement full API integration suite with all relevant authorities</li>
              <li>Deploy advanced personalization and optimization algorithms</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience our AI in action</h2>
          <p className="mb-4">Try our interactive prototype to see how our AI technologies streamline conveyancing.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default AIStrategyPage;