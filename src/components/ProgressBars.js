// ProgressBars.js
import React from 'react';

const ProgressBars = () => {
  return (
    <div>
      <div className="progress mt-2">
        <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <span className="progress-text">50%</span>
        </div>
      </div>

      <div className="progress mt-2">
        <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
          60%
        </div>
      </div>

      <div className="progress mt-2">
        <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
          90%
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
