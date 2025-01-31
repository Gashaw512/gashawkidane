import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`gk-preloader ${!isLoading ? 'gk-preloader--hidden' : ''}`}>
      <div className="gk-container">
        <div className="gk-symbol">🧑‍💻GK</div>
        <div className="gk-spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;