import React from 'react';
import { Link } from 'react-router-dom';
import MainSiteLayout from '../../layouts/MainSiteLayout';

const FinancialPage = () => {
  return (
    <MainSiteLayout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Financial Analysis</h1>
          <p>Startup costs, revenue projections, and business model</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prototype-section">
        <div className="container">
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Market Opportunity</h3>
            </div>
            <p>The UK conveyancing market represents a significant opportunity for disruption:</p>
            <ul>
              <li>Over 1.2 million property transactions annually in the UK</li>
              <li>Average traditional conveyancing cost of £1,500 per transaction</li>
              <li>Total addressable market of approximately £1.8 billion</li>
              <li>Current market dominated by traditional solicitors with outdated processes</li>
              <li>Growing consumer frustration with delays and high costs</li>
            </ul>
            <p>By automating the conveyancing process, Search First AI can capture a meaningful portion of this market while delivering superior service at lower costs.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Startup Costs</h3>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Cost (£)</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Technology Development</td>
                    <td>£175,000</td>
                    <td>AI model development, fine-tuning, platform engineering (6 months)</td>
                  </tr>
                  <tr>
                    <td>Legal & Regulatory</td>
                    <td>£45,000</td>
                    <td>Legal advice, regulatory applications, compliance framework</td>
                  </tr>
                  <tr>
                    <td>Data Acquisition</td>
                    <td>£30,000</td>
                    <td>Initial training data, API access fees, test transaction data</td>
                  </tr>
                  <tr>
                    <td>Infrastructure</td>
                    <td>£40,000</td>
                    <td>Cloud services, security infrastructure, database setup</td>
                  </tr>
                  <tr>
                    <td>Marketing & Sales</td>
                    <td>£60,000</td>
                    <td>Initial digital marketing, website, branding, content creation</td>
                  </tr>
                  <tr>
                    <td>Team</td>
                    <td>£150,000</td>
                    <td>Core team salaries for 6 months (CTO, AI Lead, Legal Expert, Product Manager)</td>
                  </tr>
                  <tr>
                    <td>Miscellaneous & Contingency</td>
                    <td>£50,000</td>
                    <td>Office space, tools, unexpected costs (25% buffer)</td>
                  </tr>
                  <tr className="total-row">
                    <td><strong>Total Initial Investment</strong></td>
                    <td><strong>£550,000</strong></td>
                    <td>Estimated funding needed for first 12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Pricing Model</h3>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h4>Standard Transaction</h4>
                <div className="price">£650</div>
                <p>Straightforward freehold properties</p>
                <div className="percentage">60% of transactions</div>
              </div>
              
              <div className="pricing-card">
                <h4>Complex Transaction</h4>
                <div className="price">£950</div>
                <p>Leasehold properties with additional complexity</p>
                <div className="percentage">30% of transactions</div>
              </div>
              
              <div className="pricing-card">
                <h4>Premium Service</h4>
                <div className="price">£1,250</div>
                <p>High-value properties or complex legal situations</p>
                <div className="percentage">10% of transactions</div>
              </div>
            </div>
            <p className="text-center mt-3"><strong>Average Revenue Per User (ARPU):</strong> £770</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Partnership Revenue Streams</h3>
            </div>
            <p>In addition to our core conveyancing fees, Search First AI will generate significant revenue through strategic partnerships:</p>
            
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Partnership Type</th>
                    <th>Revenue per Referral</th>
                    <th>Conversion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mortgage Advisor Referrals</td>
                    <td>£250-400</td>
                    <td>30%</td>
                  </tr>
                  <tr>
                    <td>Surveyor Referrals</td>
                    <td>£75-150</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>Insurance Referrals</td>
                    <td>£50-80</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>Removal Service Referrals</td>
                    <td>£30-60</td>
                    <td>25%</td>
                  </tr>
                  <tr className="total-row">
                    <td colSpan="3"><strong>Est. Additional Revenue: £200+ per transaction</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="mt-4">Partnership Strategy</h4>
            <ul>
              <li><strong>Exclusive Relationships:</strong> Negotiating preferred rates with select high-quality service providers</li>
              <li><strong>AI-Powered Matching:</strong> Using property and user data to recommend the most suitable partners</li>
              <li><strong>White-Labeled Services:</strong> Seamless integration of partner services within the Search First AI interface</li>
              <li><strong>Quality Control:</strong> Performance monitoring of partners to maintain high customer satisfaction</li>
              <li><strong>Volume-Based Pricing:</strong> Tiered commission structures based on referral volume</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Revenue Projections</h3>
            </div>
            
            <div className="revenue-chart">
              <div className="revenue-bars">
                <div className="revenue-bar">
                  <div className="bar-value">£1.75M</div>
                  <div className="bar" style={{height: "10%"}}></div>
                  <div className="bar-label">Year 1</div>
                </div>
                <div className="revenue-bar">
                  <div className="bar-value">£6.40M</div>
                  <div className="bar" style={{height: "38%"}}></div>
                  <div className="bar-label">Year 2</div>
                </div>
                <div className="revenue-bar">
                  <div className="bar-value">£16.88M</div>
                  <div className="bar" style={{height: "100%"}}></div>
                  <div className="bar-label">Year 3</div>
                </div>
              </div>
            </div>
            
            <div className="table-responsive mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Year 1</th>
                    <th>Year 2</th>
                    <th>Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Annual Transactions</td>
                    <td>1,800</td>
                    <td>6,600</td>
                    <td>17,400</td>
                  </tr>
                  <tr>
                    <td>Market Share</td>
                    <td>0.15%</td>
                    <td>0.55%</td>
                    <td>1.45%</td>
                  </tr>
                  <tr>
                    <td>Core Revenue</td>
                    <td>£1.39M</td>
                    <td>£5.08M</td>
                    <td>£13.4M</td>
                  </tr>
                  <tr>
                    <td>Partnership Revenue</td>
                    <td>£0.36M</td>
                    <td>£1.32M</td>
                    <td>£3.48M</td>
                  </tr>
                  <tr>
                    <td>Total Revenue</td>
                    <td>£1.75M</td>
                    <td>£6.40M</td>
                    <td>£16.88M</td>
                  </tr>
                  <tr>
                    <td>Revenue Per Transaction</td>
                    <td>£970</td>
                    <td>£970</td>
                    <td>£970</td>
                  </tr>
                  <tr>
                    <td>Gross Margin</td>
                    <td>70%</td>
                    <td>75%</td>
                    <td>80%</td>
                  </tr>
                  <tr>
                    <td>Operating Expenses</td>
                    <td>£1.2M</td>
                    <td>£3.2M</td>
                    <td>£7.5M</td>
                  </tr>
                  <tr>
                    <td>EBITDA</td>
                    <td>£0.02M</td>
                    <td>£1.60M</td>
                    <td>£6.00M</td>
                  </tr>
                  <tr>
                    <td>EBITDA Margin</td>
                    <td>1.1%</td>
                    <td>25.0%</td>
                    <td>35.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Key Financial Assumptions</h3>
            </div>
            <ul>
              <li>UK Annual Property Transactions: 1.2 million</li>
              <li>Customer Acquisition Cost: £200 initially, decreasing to £150 by Year 3</li>
              <li>Transaction Processing Cost: £270 per transaction in Year 1, decreasing to £170 by Year 3</li>
              <li>Churn: Not directly applicable (transactional business), but referral rate of 20%</li>
              <li>Team Growth: 8 FTE in Year 1, 22 FTE in Year 2, 45 FTE in Year 3</li>
              <li>AI Efficiency Gains: 15% improvement in processing costs annually</li>
              <li>Partnership Revenue: Increases from £200 to £250 per transaction by Year 3</li>
            </ul>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Funding Strategy</h3>
            </div>
            
            <div className="funding-stage">
              <h4>Seed Round: £550,000</h4>
              <p>Initial funding to support MVP development, regulatory setup, and early team formation.</p>
            </div>
            
            <div className="funding-stage">
              <h4>Series A: £2-3 million (End of Year 1)</h4>
              <p>After demonstrating product-market fit and initial traction, Series A funding will accelerate growth, expand the team, and enhance AI capabilities.</p>
            </div>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Path to Profitability</h3>
            </div>
            <p>Search First AI expects to reach monthly profitability during Year 2, with substantial EBITDA generation in Year 3. The strong unit economics and increasing gross margins support a capital-efficient growth model.</p>
          </div>
          
          <div className="focus-area">
            <div className="focus-area-header">
              <h3>Exit Opportunities</h3>
            </div>
            <p>Potential acquisition targets include major property portals (Rightmove, Zoopla), traditional law firms looking to digitize, and financial institutions seeking to expand their property services ecosystem.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to join our growth journey?</h2>
          <p className="mb-4">Try our interactive prototype to experience the future of conveyancing.</p>
          <Link to="/app" className="cta-button">Launch Prototype</Link>
        </div>
      </section>
    </MainSiteLayout>
  );
};

export default FinancialPage;