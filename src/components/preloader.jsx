// import React, { useState, useEffect } from 'react';

// const Preloader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading completion
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Adjust timing to match your actual content load

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`preloader ${!isLoading ? 'preloader--hidden' : ''}`}>
//       <div className="preloader__spinner"></div>
//     </div>
//   );
// };

// export default Preloader;

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
    <div className={`ek-preloader ${!isLoading ? 'ek-preloader--hidden' : ''}`}>
      <div className="ek-container">
        <div className="ek-symbol">△E K</div>
        <div className="ek-spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;