import React from 'react';
import './error_indicator.css';
import icon  from './death-star.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src = {icon} alt = "error_icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;