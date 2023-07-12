import React from "react";
import logo from './tedxmain.png'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import 'animate.css';

const Home = () => {
  
  const navigate = useNavigate();
  navigate("/home");

return(
  <div id="root">
    <div class="animate__animated animate__fadeIn navbar">
      <div class="navspan">
        <div class="hm"><a href="/">Home</a></div>
        <div class="active"><Link to="/about">About</Link></div>
        <div class="active"><Link to="/team">Meet the Team</Link></div>
        <div class="active"><Link to="/speakers">Speakers</Link></div>
        <div class="active"><a href="https://www.ted.com/tedx/events/26452" target="blank">Previous Events</a></div>
      </div>
    </div>
    <div class="main-container">
      <div class="main-logo animate__animated animate__fadeInUp"><img src={logo} alt="TEDx JUET"/></div>     
      <div class="tagline animate__animated animate__fadeIn animate__delay-1s"> Innovating. Creating. Developing. </div>
      <Link to="/speakers"><button class="animate__animated animate__fadeIn animate__delay-2s">
  <span></span>
  <span></span>
  <span></span>
  <span></span> VIEW THE 2023 SPEAKERS
</button>
  </Link>
    </div>
    <div class="footer animate__animated animate__fadeInUp animate__delay-1s">
      <div class="footer-span">
        <div class="clg-logo"> 
        <a href="https://www.juet.ac.in" target="blank"><img class="img-logo" src="https://admission.juet.ac.in/static/images/juet_trans1.jpg" alt="JUET"></img></a>
        </div>
          <div class="footer-text">
            <p class="fcopy"> ©2023 Jaypee University of Engineering and Technology. </p>
            <p class="finfo"> This independent TEDx event is operated under license from TED.</p>
          </div>
        <div class="social-icons">
          <a href="https://www.instagram.com/tedxjuet/?theme=dark" target="blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          <a href="https://twitter.com/TEDxJUET" target="blank"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
          <a href="https://www.linkedin.com/company/tedxjuet/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
          <a href="https://www.facebook.com/tedxjuet/" target="blank"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
        </div>
      </div>
    </div>

  </div>
);

};
export default Home;
