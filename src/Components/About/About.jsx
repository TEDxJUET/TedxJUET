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

import styles from "../About/about.module.css";

import 'animate.css';

const About = () => {

    const navigate = useNavigate();
    navigate("/about");

    return(
     <div id="root">

        <div class="navbar">
            <div class="navspan">
                <div class="hm"><a href="/">Home</a></div>
                <div class="active">About</div>
                <div class="active"><Link to="/team">Meet the Team</Link></div>
                <div class="active"><Link to="/speakers">Speakers</Link></div>
                <div class="active"><a href="https://www.ted.com/tedx/events/26452" target="blank">Previous Events</a></div>
                <div class="logosmall"><img src={logo} class="logosmallimg" alt="TEDx JUET"></img></div>
            </div>
        </div>

        <div className={styles.maincontainer}>
            <div class="animate__animated animate__fadeIn">
            <div className={styles.heading}>
                <p className={styles.headwhite}>About </p>
                <p className={styles.headred}> TEDx JUET</p>
            </div>
            <div className={styles.txt}>
                <p className={styles.info}>TEDxJUET is a local, independently organized event at JUET Guna that strives to recreate the unique experience found at TED, where the world's leading thinkers and doers congregate to share what they are most passionate about. We aim to provide a platform for curious individuals who seek to discover ideas and spark conversations in their own community. In the past we have successfully brought together people from across the length and breadth of our country along with locals in the past, to not just motivate our students but, also to inspire them to form a positive environment to stimulate the desire to collaborate and change not just the world of technology and innovation, but every field that they touch. It is an event that aims to celebrate and propagate the power of ideas among the denizens of the magnificent campus of JUET.
                </p>
            </div>

            <div className={styles.heading}>
                <p className={styles.headwhite}>About </p>
                <p className={styles.headred}> TEDx</p>
            </div>
            <div className={styles.txt}>
                <p className={styles.info}>
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
                </p>
            </div>

            <div className={styles.heading}>
                <p className={styles.headwhite}>About </p>
                <p className={styles.headred}> TED</p>
            </div>
            <div className={styles.txt}>
                <p className={styles.info}>
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
The annual TED Conference takes place each spring in Vancouver, British Columbia. TED’s media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
                </p>
            </div>
          </div>
        </div>

        <div class="footer">
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

 export default About;