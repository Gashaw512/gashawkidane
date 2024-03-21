import React  from 'react';
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div style={{ padding: 30, textAlign: "center" }}>
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "Deep Learning Engineer",
            "Cyber Secuirity Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};
export default Type;
