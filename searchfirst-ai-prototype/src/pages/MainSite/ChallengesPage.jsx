import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const ChallengesPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Key Challenges</h1>
          <p>Regulatory, legal, and technical hurdles in automating UK conveyancing</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prototype-section">
        <div className="container">
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Understanding the Challenges</h3>
            </div>
            <p>Disrupting the traditional conveyancing process involves navigating complex regulatory, legal, and technical landscapes. Search First AI's success depends on our ability to identify and overcome these challenges through innovative AI solutions.</p>
            <p>We've identified key hurdles across three critical categories and developed specific approaches to address each one. By facing these challenges head-on, we're building a platform that's not only revolutionary but also reliable, compliant, and secure.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Regulatory Challenges</h3>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Challenge</th>
                    <th>AI Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Legal Practice Regulations</strong><br />
                      The Solicitors Regulation Authority (SRA) has strict rules governing who can provide legal services related to property transfers.
                    </td>
                    <td>Regulatory compliance engine using LLM + rule-based verification; partnership with supervising law firm in early stages while navigating regulatory approval process.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Client Money Protection</strong><br />
                      Handling client funds requires strict safeguards and compliance with SRA Accounts Rules.
                    </td>
                    <td>Automated escrow system with blockchain verification and multi-signature authorization to ensure transparent and secure handling of funds.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Professional Indemnity</strong><br />
                      Legal service providers must maintain appropriate professional indemnity insurance.
                    </td>
                    <td>AI risk assessment models with specialized insurance partnerships designed specifically for AI-driven legal services.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>SRA Authorization</strong><br />
                      Operating as a legal service provider requires SRA authorization or alternative business structure approval.
                    </td>
                    <td>Hybrid model during regulatory approval process with clear AI-human responsibility boundaries and proper oversight protocols.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>GDPR Compliance</strong><br />
                      Handling sensitive personal and financial data requires strict data protection measures.
                    </td>
                    <td>Privacy-preserving AI techniques with automated data minimization and retention policies built directly into our systems.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="mt-4">Regulatory Readiness Progress</h4>
            <div className="progress-section">
              <div className="progress-item">
                <p>AI Compliance Framework</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: "75%"}}></div>
                </div>
                <p className="text-right">75%</p>
              </div>
              <div className="progress-item">
                <p>Law Firm Partnerships</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: "50%"}}></div>
                </div>
                <p className="text-right">50%</p>
              </div>
              <div className="progress-item">
                <p>SRA Discussions</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: "25%"}}></div>
                </div>
                <p className="text-right">25%</p>
              </div>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Legal Challenges</h3>
            </div>
            
            <div className="challenge-overview">
              <p className="text-center mb-4">
                Legal barriers present significant hurdles in automating conveyancing. 
                Our AI-powered solutions address these challenges with sophisticated legal reasoning.
              </p>
            </div>
            
            <div className="challenge-grid">
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">📋</div>
                  <h4>Due Diligence Thoroughness</h4>
                </div>
                <div className="challenge-content">
                  <p>Property conveyancing requires comprehensive checks and verification to protect clients from risks. Missing even minor issues can lead to significant legal problems post-completion.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Comprehensive checklist automation with failure-prevention redundancies built into our system architecture.</p>
                  </div>
                </div>
              </div>
              
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">⚖️</div>
                  <h4>Legal Liability</h4>
                </div>
                <div className="challenge-content">
                  <p>When errors occur, determining liability in an AI-driven process creates new legal questions about responsibility and accountability.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> AI decision transparency tools with complete audit trails of all automated processes.</p>
                  </div>
                </div>
              </div>
              
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">📚</div>
                  <h4>Precedent Interpretation</h4>
                </div>
                <div className="challenge-content">
                  <p>Legal reasoning often relies on understanding and applying legal precedents correctly, which requires nuanced comprehension.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Case-based reasoning systems informed by historical legal decisions.</p>
                  </div>
                </div>
              </div>
              
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">📝</div>
                  <h4>Contract Variations</h4>
                </div>
                <div className="challenge-content">
                  <p>Non-standard clauses and variations in property contracts require sophisticated interpretation and risk assessment.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Pattern recognition to identify non-standard clauses requiring special handling.</p>
                  </div>
                </div>
              </div>
              
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">💬</div>
                  <h4>Legal Advice Definition</h4>
                </div>
                <div className="challenge-content">
                  <p>Distinguishing between providing information and giving regulated legal advice is crucial but can be ambiguous.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Clear distinction between information provision and personalized advice through careful system design.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Technical Challenges</h3>
            </div>
            
            <div className="challenge-overview">
              <p className="text-center mb-4">
                Technical implementation presents unique challenges in creating a seamless, secure, and reliable AI-powered conveyancing platform.
              </p>
            </div>
            
            <div className="challenge-grid">
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">📄</div>
                  <h4>Document Format Variability</h4>
                </div>
                <div className="challenge-content">
                  <p>Property documents come in numerous formats, from structured digital forms to scanned handwritten notes.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Multi-modal AI that handles different document formats and handwriting through specialized OCR and document understanding models.</p>
                  </div>
                </div>
              </div>
              
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">🔌</div>
                  <h4>Integration with Legacy Systems</h4>
                </div>
                <div className="challenge-content">
                  <p>Many government and institutional systems use outdated technology that's difficult to connect with.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Adapter layer technologies with flexible API interfaces that can communicate with both modern and legacy systems.</p>
                  </div>
                </div>
              </div>
              
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">🧹</div>
                  <h4>Data Quality Issues</h4>
                </div>
                <div className="challenge-content">
                  <p>Property data often contains inconsistencies, missing fields, or errors that require correction.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Data cleaning and normalization pipelines with confidence scoring for uncertain data.</p>
                  </div>
                </div>
              </div>
              
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">⚡</div>
                  <h4>System Availability Requirements</h4>
                </div>
                <div className="challenge-content">
                  <p>Property transactions need reliable access to information at all times.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Redundant cloud architecture with automated failover systems to ensure 99.9% uptime and continuous service availability.</p>
                  </div>
                </div>
              </div>
              
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">🔒</div>
                  <h4>Security Requirements</h4>
                </div>
                <div className="challenge-content">
                  <p>Handling sensitive financial and personal data requires robust security measures.</p>
                  <div className="solution-box">
                    <p><strong>Our Solution:</strong> Zero-trust architecture with advanced threat detection, encryption at rest and in transit, and continuous security monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h4 className="mt-4">Technical Implementation Progress</h4>
            <div className="progress-section">
              <div className="progress-item">
                <p>Document Processing Pipeline</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: "90%"}}></div>
                </div>
                <p className="text-right">90%</p>
              </div>
              <div className="progress-item">
                <p>API Integration Framework</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: "75%"}}></div>
                </div>
                <p className="text-right">75%</p>
              </div>
              <div className="progress-item">
                <p>Security Infrastructure</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: "50%"}}></div>
                </div>
                <p className="text-right">50%</p>
              </div>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Our Approach to Challenges</h3>
            </div>
            
            <h4>Phased Implementation</h4>
            <p>Rather than attempting to solve all challenges simultaneously, we're taking a phased approach that addresses the most critical issues first while building a foundation for tackling more complex challenges later.</p>
            
            <h4 className="mt-3">Regulatory Collaboration</h4>
            <p>We're actively engaging with regulatory bodies, including the SRA and the Legal Services Board, to inform our approach and ensure compliance from the ground up.</p>
            
            <h4 className="mt-3">Technical Excellence</h4>
            <p>Our team combines expertise in AI, legal practice, and property transactions to develop solutions that meet both technical and regulatory requirements.</p>
            
            <h4 className="mt-3">Continuous Learning</h4>
            <p>Each transaction processed by our platform improves our understanding of edge cases and potential issues, creating a continuously improving system.</p>
            
            <h4 className="mt-3">Transparency</h4>
            <p>We believe in being transparent about the challenges we face and our progress in addressing them, building trust with clients, partners, and regulators.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>See how we're overcoming these challenges</h2>
          <p className="mb-4">Try our interactive prototype to experience our innovative solutions in action.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default ChallengesPage;