import React from "react";
// import imageOverlay from "../img/earth.jpg";
import ContactPage from "./contact/ContactPage";
import Particle from "./Particle";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <Particle />
        <ContactPage />
      </section>
    );
  }
}

export default Contact;
