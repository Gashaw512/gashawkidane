import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const ContactHeader = () => {
  return (
    <>
      <div className="contact_title">
        <h1 className="">GET IN TOUCH </h1>
        <div className="line-mf"></div>
      </div>
      <div className="main-contact">
        <h6>
          {" "}
          <FaPhone /> Phone:<span> +251 941 623 091</span>
        </h6>
        <h6 style={{ paddingLeft: "60px" }}>
          <AiOutlineMail /> Email:{" "}
          <span className="mailContent">kidanugashaw@gmail.com</span>
        </h6>
      </div>
    </>
  );
};
export default ContactHeader;
