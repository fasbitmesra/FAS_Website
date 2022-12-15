import React, { useState } from "react";
import FasSocialInfo from "../../api/FasSocialInfo";
import Brush from "../../assets/elements/contact_img.png";
import { MdLocationOn, MdMail } from "react-icons/md";
import emailjs from "emailjs-com";

function Contact() {
  const [userdata, setUserdata] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
  });

  const postUserData = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };

  const submitUserData = (event) => {
    event.preventDefault();

    if (userdata.senderName && userdata.senderEmail && userdata.message) {
      emailjs
        .send(
          "service_czn8abl",
          "template_q9519ji",
          userdata,
          "user_ASsJaHXOWVTDpNNfYXKaT"
        )
        .then(
          (result) => {
            alert("Your message is sent!");
          },
          (error) => {
            alert(
              "An error occured. Please try again or contact us through email."
            );
          }
        );

      setUserdata({
        senderName: "",
        senderEmail: "",
        message: "",
      });
    } else {
      alert("Please fill all the fields!");
    }
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
              <MdLocationOn /> BIT Mesra, Ranchi - 835215
            </p>
            <p>
              <MdMail /> fineartssociety@bitmesra.ac.in
            </p>
          </div>
          <div className="Contact-social">
            <p>Connect with us on Social Media</p>
            <div className="Social-icon-container">
              {FasSocialInfo.map((social) => {
                const { name, link, icon } = social;
                return (
                  <a
                    key={name}
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
          <form>
            <div className="Form-group">
              <label htmlFor="name">Name</label>
              <div className="">
                <input
                  type="text"
                  id="name"
                  name="senderName"
                  value={userdata.senderName}
                  onChange={postUserData}
                ></input>
              </div>
            </div>
            <div className="Form-group">
              <label htmlFor="email">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  id="email"
                  name="senderEmail"
                  value={userdata.senderEmail}
                  onChange={postUserData}
                ></input>
              </div>
            </div>
            <div className="Form-group">
              <label htmlFor="comment">Message</label>
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
