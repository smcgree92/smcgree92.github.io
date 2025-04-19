import React from 'react';
import PropTypes from 'prop-types';

const SearchCard = ({ search, onAction }) => {
  const { id, title, description, icon, status, statusText, price, actions } = search;

  return (
    <div className="search-card">
      <div className="search-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div className="search-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="search-status">
          <span className={`status-indicator status-${status}`}></span>
          <span>{statusText}</span>
        </div>
        <div className="search-price">
          <span>£{price.toFixed(2)}</span>
        </div>
        <div className="search-actions">
          {actions.includes('order') && (
            <button 
              className="search-btn btn-order"
              onClick={() => onAction('order', id)}
            >
              Order Search
            </button>
          )}
          {actions.includes('view') && (
            <button 
              className="search-btn btn-view"
              onClick={() => onAction('view', id)}
            >
              View Results
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SearchCard.propTypes = {
  search: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['available', 'pending', 'complete']).isRequired,
    statusText: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(PropTypes.oneOf(['order', 'view'])).isRequired
  }).isRequired,
  onAction: PropTypes.func.isRequired
};

export default SearchCard;