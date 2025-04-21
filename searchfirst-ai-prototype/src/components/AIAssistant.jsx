import React from 'react';
import PropTypes from 'prop-types';

const AIAssistant = ({ message, tip, nextStep, tips }) => {
  return (
    <div className="sidebar">
      <div className="ai-assistant">
        <div className="ai-header">
          <div className="ai-avatar">
            <i className="fas fa-robot"></i>
          </div>
          <h3>AI Assistant</h3>
        </div>
        <div className="ai-body">
          <div className="ai-message">
            {message || "I'm here to help with your property search!"}
          </div>
          
          {/* Handle both tip as a string and tips as an array */}
          {tip && (
            <div className="ai-tip">
              <h4><i className="fas fa-lightbulb"></i> Helpful Tip</h4>
              <p>{tip}</p>
            </div>
          )}
          
          {nextStep && (
            <div className="ai-tip" style={{ marginTop: "1rem" }}>
              <h4><i className="fas fa-info-circle"></i> What's Next?</h4>
              <p>{nextStep}</p>
            </div>
          )}
          
          {/* Support for tips array from SearchResultsPage */}
          {tips && tips.map((tipItem, index) => (
            <div key={index} className="ai-tip" style={{ marginTop: index > 0 ? "1rem" : 0 }}>
              <h4><i className={`fas fa-${tipItem.icon}`}></i> {tipItem.title}</h4>
              <p>{tipItem.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AIAssistant.propTypes = {
  message: PropTypes.string,
  tip: PropTypes.string,
  nextStep: PropTypes.string,
  tips: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};

export default AIAssistant;