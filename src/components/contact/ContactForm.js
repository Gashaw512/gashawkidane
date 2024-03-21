import Tilt from "react-parallax-tilt";
import { Button, Form } from "react-bootstrap";
import { CDBIcon } from "cdbreact";
import { useState } from "react";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  //  const [resp, setResp]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);
    const { name, email, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    console.log(details);

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let result = await response.json();
    console.log(result);
    if (result.status === "OK") {
      // let resp = `<h1>Thank you!</h1>
      //                  <h1>Your message has been sent.</h1>`;
    } else {
      console.log("error");
    }
  };

  return (
    <div className="formContainer">
      <Tilt
        className="form_container"
      >
        <div className="inner_frm_container">
          <div className="mx-4 ">
            {!sent ? (
              <div>
                <div className="text-center mt-2 mb-4  form_title">
                  <p className="h4"> Write to Me </p>
                </div>
                <Form className="form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      id="name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      id="email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      id="subject"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your message (Remember. Short & sweet please !)"
                      id="message"
                      required
                    />
                  </Form.Group>
                  <div>

                  </div>
                  <Button
                    type="submit"
                    style={{ width: "80%", alignItems: "center" }}
                    className="btn-block mt-5 mx-auto btn-primary btn ctct_btn"
                  >
                    Send{"  "}
                    <span style={{ paddingLeft: 5, position: "right" }}>
                      {"   "}
                      <CDBIcon far icon="paper-plane" />
                    </span>
                  </Button>
                </Form>
              </div>
            ) : (
              <div className="contact-submition">
                <h1>Thank you!</h1>
                <h1>Your message has been sent</h1>
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </div>
  );
};
export default ContactForm;
