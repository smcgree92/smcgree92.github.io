import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from '../components/NavigationBar';

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div className="content">
        <div className="content-container">
          {children}
        </div>
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} Search First AI. All rights reserved.</p>
      </footer>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;