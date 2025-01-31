import React from "react";
import Home from "./Home/Home";
class Intro extends React.Component {
  render() {
    return (
      <section>
        <div id="home" fluid ="true" className="bg-image">
          <Home />
        </div>
      </section>
    );
  }
}

export default Intro;
