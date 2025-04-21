import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MainSiteLayout = ({ children }) => {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <Link to="/" className="logo">SearchFirstAI</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/main/startup-plan">Startup Plan</Link></li>
            <li><Link to="/main/ai-strategy">AI Strategy</Link></li>
            <li><Link to="/main/challenges">Challenges</Link></li>
            <li><Link to="/main/differentiation">Differentiation</Link></li>
            <li><Link to="/main/customer-journey">Customer Journey</Link></li>
            <li><Link to="/main/financial">Financial Analysis</Link></li>
            <li><Link to="/main/roadmap">Roadmap</Link></li>
            <li><Link to="/main/prototype-plan">Prototype Plan</Link></li>
          </ul>
        </div>
      </nav>
      
      {children}
      
      {/* Footer */}
      <footer>
        <div className="container">
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/main/about">About</Link></li>
            <li><Link to="/main/roadmap">Roadmap</Link></li>
            <li><Link to="/main/prototype-plan">Prototype Plan</Link></li>
          </ul>
          <p>&copy; {new Date().getFullYear()} SearchFirstAI. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Prototype Demo Button */}
      <div className="prototype-demo-button">
        <Link to="/app" className="cta-button">
          <i className="fas fa-desktop"></i>
          <span>Try Interactive Prototype</span>
        </Link>
      </div>
    </>
  );
};

MainSiteLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainSiteLayout;