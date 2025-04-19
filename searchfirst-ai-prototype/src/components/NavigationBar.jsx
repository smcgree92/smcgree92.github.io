import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainSiteNavContext } from '../App';
import '../styles.css';

const NavigationBar = () => {
  const navigate = useNavigate();
  const { goToMainSite } = useContext(MainSiteNavContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <i className="fas fa-search"></i>
          <span>Search First AI</span>
        </div>
        <div className="navbar-links">
          <button className="navbar-btn" onClick={goToMainSite}>
            Main Site
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;