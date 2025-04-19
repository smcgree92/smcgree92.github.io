import React from 'react';
import PropTypes from 'prop-types';

const DocumentCard = ({ document, onAction }) => {
  const { id, title, description, icon, status, statusText, actions, disabled, completed } = document;

  return (
    <div className="document-card">
      <div className="document-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div className="document-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="document-status">
          <span className={`status-indicator status-${status}`}></span>
          <span>{statusText}</span>
        </div>
        <div className="document-actions">
          {actions.includes('view') && (
            <a 
              href="#" 
              className="document-btn btn-view" 
              onClick={(e) => {
                e.preventDefault();
                onAction('view');
              }}
            >
              View
            </a>
          )}
          {actions.includes('sign') && !disabled && !completed && (
            <a 
              href="#" 
              className="document-btn btn-sign" 
              onClick={(e) => {
                e.preventDefault();
                onAction('sign');
              }}
              style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}
            >
              Sign
            </a>
          )}
          {actions.includes('complete') && (
            <a 
              href="#" 
              className="document-btn btn-sign" 
              onClick={(e) => {
                e.preventDefault();
                onAction('complete');
              }}
            >
              Complete
            </a>
          )}
          {actions.includes('acknowledge') && (
            <a 
              href="#" 
              className="document-btn btn-sign" 
              onClick={(e) => {
                e.preventDefault();
                onAction('acknowledge');
              }}
            >
              Acknowledge
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

DocumentCard.propTypes = {
  document: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['ready', 'pending', 'attention']).isRequired,
    statusText: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(PropTypes.oneOf(['view', 'sign', 'complete', 'acknowledge'])).isRequired,
    disabled: PropTypes.bool,
    completed: PropTypes.bool
  }).isRequired,
  onAction: PropTypes.func.isRequired
};

export default DocumentCard;