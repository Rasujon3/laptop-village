import React from "react";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    // const email = event.target.email.value;
    // const msg = event.target.msg.value;
    toast(`Dear ${name}, Your Message sent successfully`);
    event.target.reset();
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      id="contact"
      className="container"
    >
      <h2 className="text-center mt-5">Contact</h2>
      <hr
        className="mb-4 mt-0 d-block mx-auto text-center"
        style={{
          width: "60px",
          backgroundColor: "#00dafc",
          height: "2px",
        }}
      />
      <div className="contact">
        <div className="contact-left">
          <img
            src="https://rasujon3.github.io/assignment-2/images/contact.png"
            alt=""
          />
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="text-field"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="text-field"
              name="email"
            />
            <textarea
              placeholder="Your Message"
              className="text-field"
              name="msg"
              required
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
