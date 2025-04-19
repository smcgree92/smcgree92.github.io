import React from 'react';

const AIAssistant = ({ message, tip, nextStep }) => {
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
          <div className="ai-tip">
            <h4><i className="fas fa-lightbulb"></i> Helpful Tip</h4>
            <p>{tip || "Upload your documents for a comprehensive analysis."}</p>
          </div>
          <div className="ai-tip" style={{ marginTop: "1rem" }}>
            <h4><i className="fas fa-info-circle"></i> What's Next?</h4>
            <p>{nextStep || "Review your search results when they're available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;