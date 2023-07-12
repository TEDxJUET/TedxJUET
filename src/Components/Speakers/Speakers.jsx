import React from "react";
import saakshar from './saakshar.jpg'
import logo from './tedxmain.png'
import vivek from './vivek.png'
import anurag from './anurag.png'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import styles from "../Speakers/speakers.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Speakers = () => { 

  const navigate = useNavigate();
  navigate("/speakers");
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

return(
  <div id="root">
    <div class="navbar">
      <div class="navspan">
        <div class="hm"><a href="/">Home</a></div>
        <div class="active"><Link to="/about">About</Link></div>
        <div class="active"><Link to="/team">Meet the Team</Link></div>
        <div class="active">Speakers</div>
        <div class="active"><a href="https://www.ted.com/tedx/events/26452" target="blank">Previous Events</a></div>
        <div class="logosmall"><img src={logo} class="logosmallimg" alt="TEDx JUET"></img></div>
      </div>
    </div>
    
    <div className={styles.maincontain}>
      <div class="animate__animated animate__fadeInUp">
      <div className={styles.carousecontainer}>
    <Slider class Name={styles.carouse}{...settings}>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
           <div class="animate__animated animate__fadeIn animate__delay-1s">
              <img className={styles.speakpic} src={saakshar} alt="Pic"></img>
               </div>
                <div class="animate__animated animate__fadeIn animate__delay-2s">
               <h3 className={styles.title}>Saaksshar Dudghal</h3>
               <p className={styles.subtitle}>Advisor,Delhi High Court & Advisor ,Academic Outreach,CyberSecurity Expert ,2023 Speaker, TEDx JUET</p>
               </div>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               “Saakshar Duggal is an emerging technologies expert and a practicing Advocate in the Delhi
High Court. He is the Advisor Academic Outreach of Cyberlaw Univ. He has given talks on
various distinguished forums such as the United Nations Headquarters, Geneva, Switzerland.
He recently gave his TedX talk on the topic Metaverse- Emerging Crucial Challenges. He has
also authored a book entitled “Cybercrimes During Covid-19 & Legal Issues In India”
Saakshar Duggal, as part of Cyberlaw University delegation, was invited to participate and
attend the (18th meeting) First session of United Nations Ad Hoc Committee to Elaborate a
Comprehensive International Convention on Countering the Use of Information and
Communications Technologies for Criminal Purposes, on the elements and inputs that need to
be incorporated in the proposed International Convention to prevent the misuse of
Information & Communication Technologies for criminal purposes.”
               </p>
           </div>
           </div>
           </div>
          </div>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
              <img className={styles.speakpic} src={anurag} alt="Pic"></img>
               <h3 className={styles.title}>Anurag Bachan</h3>
               <p className={styles.subtitle}>Chief Mentor,
Founder,
Droanacharya IAS, 2023 Speaker, TEDx JUET</p>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               “Anurag Bachan sir is an IAS Coach and is the founder of
Droanacharya IAS Institute, One of the renowned and most
prestigious institutes in the country. Besides his expertise on
subjects like History, Political Science and International Relations,
he has been very much loved and admired by students as well as
the common people due to his great motivational skills and
unique teaching methods involving wit and humor. He has a vast
experience in the field of Public Speaking and Motivational
Speaking.
He always tries to break the stereotypical conventional beliefs and
methods and tries to give way to new innovative techniques which
are being presented in a very lighter mode.
He himself has cracked exams like UPSC(CDSE, AIR 26th in 2006),
Punjab Civil Services (Executive, Rank 211th in 2012). He has also
authored some works on subjects like History and Polity.
He has received Zee Excellence Award, presented by Education
Minister of Punjab in 2022 in the IAS Coaching Category. Besides
that he has received many other state level accolades. Hundreds
of students from Droanacharya IAS has achieved success in the
concered exams under the guidance of Mr. Bachan.”
               </p>
           </div>
           </div>
           </div>
          </div>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
              <img className={styles.speakpic} src="https://raw.githubusercontent.com/047pegasus/TEDXJUET/master/tedxjuet/src/Assets/LAXMI%20.png" alt="Pic"></img>
               <h3 className={styles.title}>Antara Jha</h3>
               <p className={styles.subtitle}>Cyber Law and Cyber Crime Expert  2023 Speaker, TEDx JUET</p>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               "Anatra Jha"
               </p>
           </div>
           </div>
           </div>
          </div>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
              <img className={styles.speakpic} src={vivek} alt="Pic"></img>
               <h3 className={styles.title}>Vivek Suman</h3>
               <p className={styles.subtitle}>Group CFO | Board of Director | ESG Investing
 2023 Speaker, TEDx JUET</p>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               “Vivek Suman is a highly accomplished financial professional and CFA Chartered Holder from the prestigious CFA Institute USA, with over two decades of work experience in Oman and India in the field of Investment Advisory and strategic finance. He possesses an extensive wealth of knowledge in managing and advising governments and finance operations for groups of companies. His expertise includes institutional fundraising, cash flow management, budget planning, accounting, tax, and annual auditing. Throughout his career, Vivek has established himself as a leader, advisor, and financing strategist. His exceptional contributions to investing and finance have been recognized with two distinguished awards in 2022: the CFO of the Year Award from CXO Awards and the CFOstory Club honours.Currently, Vivek serves as the Group CFO at LML eMotion, a renowned 2 Wheeler Brand that has undergone a revolutionary transformation into an Electric Scooter. Vivek has also served as a Board of Director on the Academic Advisory Board at MIT School of Business in Pune since September 2022. Prior to this, he was the founder and managing partner at M&A Experts in Bangalore, an investment banking company with more than six-country presence and partners in Bangalore, Hyderabad, Gurugram, Delhi, Pune, Germany & USA. 
               ”
               </p>
           </div>
           </div>
           </div>
          </div>
        </Slider>
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

export default Speakers;
