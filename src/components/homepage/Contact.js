import React from "react";
import FasSocialInfo from "../../api/FasSocialInfo";
import "./Contact.scss";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <>
      <div className="container col-12 col-lg-12 mx-auto">
        <div className="contact-img col-12 col-lg-2">
          <img src={require('../../assets/elements/contactImg.png')} alt="brush-img" height='307' width='200'  />
        </div>
        <div className="contact-center col-12 col-lg-4">
          <div className="contact-detail">
            <h1>Contact Us</h1>
            <p>BIT Mesra, Ranchi - 834002</p>
            <p>fasmesra@gmail.com</p>
          </div>
          <div className="Contact-social">
            <h5>Connect with us on Social Media</h5>
            <div className="Social-icon-container">
              {
                FasSocialInfo.map((social, index) => {
                  const{link, icon} = social;
                  return (
                    <a href={link} target="_blank" rel="noopener noreference noreferrer">
                      <div className="Social-icon">{icon}</div>
                    </a>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className="contact-rightside col-12 col-lg-6">
          <div className="contact-form">
            <div className="form-group">
              <label className="control-label col-sm-2" for="fname">Name</label>
              <div className="col-sm-10">
              <input type="text" class="form-control" id="fname" placeholder="Enter Name" name="name"></input>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="email">Email</label>
              <div className="col-sm-10">
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="comment">Message</label>
              <div className="col-sm-10">
              <textarea className="form-control" rows="3" id="comment"></textarea>
              </div>
            </div>
            <div className="form-group">        
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Contact Us</button>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </>
  );
}

export default Contact;
