import React, { useState } from "react";
import FasSocialInfo from "../../api/FasSocialInfo";
import Brush from "../../assets/elements/contact_img.png";
import { MdLocationOn, MdMail } from "react-icons/md";

function Contact() {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    mesaage: "",
  });

  const postUserData = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };

  const submitUserData = (event) => {
    event.preventDefault();
  };

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
          <form method="POST">
            <div className="Form-group">
              <label for="name">Name</label>
              <div className="">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userdata.name}
                  onChange={postUserData}
                ></input>
              </div>
            </div>
            <div className="Form-group">
              <label for="email">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userdata.email}
                  onChange={postUserData}
                ></input>
              </div>
            </div>
            <div className="Form-group">
              <label for="comment">Message</label>
              <br />
              <textarea
                name="message"
                rows="5"
                id="comment"
                value={userdata.message}
                onChange={postUserData}
              ></textarea>
            </div>
            <div className="Form-btn">
              <button type="submit" onClick={submitUserData}>
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
