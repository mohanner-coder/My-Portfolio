import React from "react";
import "./Contact.css";
import contactImg from "./img/about-9.jpg";
function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available to work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+2348069044946</strong> or email
                <br/>
                <a href="mailto:victoria.okafor.ng@gmail.com">
                  
                  <strong>victoria.okafor.ng@gmail.com</strong>
                </a>
              </p>
              <p className="hire__text white"> <a href="https://github.com/mohanner-coder" target="blank"><strong>GIT HUB:Mohanner-coder</strong> </a>
              
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
