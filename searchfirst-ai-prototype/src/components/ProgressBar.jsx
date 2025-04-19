import React from 'react';

const ProgressBar = ({ step, totalSteps }) => {
  const progressPercent = (step / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
      </div>
      <div className="progress-steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>Account Creation</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>AI Introduction</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>Property Details</div>
        <div className={`step ${step >= 4 ? 'active' : ''}`}>Searches</div>
        <div className={`step ${step >= 5 ? 'active' : ''}`}>Completion</div>
      </div>
    </div>
  );
};

export default ProgressBar;