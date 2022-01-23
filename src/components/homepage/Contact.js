import React from "react";
import FasSocialInfo from "../../api/FasSocialInfo";
import Brush from "../../assets/elements/contact_img.png";
import { MdLocationOn, MdMail } from "react-icons/md";

function Contact() {
  return (
    <>
      <div className="Contact-container" id="contact">
        <div className="Contact-img">
          <img src={Brush} alt="Brush-img" />
        </div>
        <div className="Contact-center">
          <div className="Contact-detail">
            <h1>Contact Us</h1>
            <p>
              <MdLocationOn /> BIT Mesra, Ranchi - 834002
            </p>
            <p>
              <MdMail /> fasmesra@gmail.com
            </p>
          </div>
          <div className="Contact-social">
            <p>Connect with us on Social Media</p>
            <div className="Social-icon-container">
              {FasSocialInfo.map((social, index) => {
                const { link, icon } = social;
                return (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreference noreferrer"
                  >
                    <div className="Social-icon">{icon}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="Contact-form">
          <div className="Form-group">
            <label for="fname">Name</label>
            <div className="">
              <input type="text" id="fname" name="name"></input>
            </div>
          </div>
          <div className="Form-group">
            <label for="email">Email</label>
            <div className="col-sm-10">
              <input type="email" id="email" name="email"></input>
            </div>
          </div>
          <div className="Form-group">
            <label for="comment">Message</label>
            <br />
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>
          <div className="Form-btn">
            <button type="submit">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
