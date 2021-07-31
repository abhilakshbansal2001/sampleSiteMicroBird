import React from "react";
import { FaInstagram , FaFacebook , FaYoutube,FaTwitter } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <div className="footer-home">
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name"><img src="images/mb.png"  width="200px" /></span>
          </div>
          <div className="media-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <SiLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Other Links</li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Event</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Contact Us</li>
            <li>
              <a href="#">Mail Id: microbirdymca@jcboseust.ac.in</a>
            </li>
            <li>
              <a href="#">Phone No. : </a>
            </li>
            
          </ul>
          
          
          <ul className="box input-box">
            <li className="link_name">Mail Us</li>
            <li>
              <input type="text" placeholder="Enter your email" />
            </li>
            <li>
              <input type="button" value="Subscribe" />
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2021 <a href="#">MicroBird</a>All rights reserved
          </span>
          
        </div>
      </div>
    </div>
  );
}
export default Footer;
