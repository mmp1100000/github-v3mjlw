import React from "react";

const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <circle 
            cx="25" 
            cy="25" 
            r="20" 
            fill="none" 
            stroke="#ff344f" 
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              transformOrigin: 'center',
              animation: 'loaderSpin 1s linear infinite'
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default PreLoader;