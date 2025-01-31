import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing to match your actual content load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${!isLoading ? 'preloader--hidden' : ''}`}>
      <div className="preloader__spinner"></div>
    </div>
  );
};

export default Preloader;

