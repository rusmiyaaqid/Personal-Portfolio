
  // Import necessary packages in React
import React from 'react';
import image from './rusmiya_lobby.jpg';
import github from './githubicon.png';
import email from './emailicon.png';
import linkedin from './linkedinicon.png'

import './App.css'; // Assuming styles are moved here
function ContainerOne(){
  return(
    <div id="home" className="container container-one">
      <div className="profile">
        <h3>rusmiya aqid</h3>
      </div>
  </div>
    
  );
}

function ContainerTwo(){
  return(
    <div className="container container-two">
      <div className="about-me">
        <h1>ABOUT ME</h1>
      
        <div className="about-me-contents">

          <div className="upper-about-me">
            <img src={image} alt=""/>
            <p>
              I am a student majoring in Computer Science with a cluster in Political Economy and Development at the University of Rochester. I was awarded the Whipple Science Research and Innovation Scholarship, became a Meliora Scholar (which recognises students interested in the humanistic social sciences), and was the recipient of a Research Innovation Grant (RIG) for my research abilties. <br /><br />I grew up in Dhaka, the capital city of Bangladesh. My experiences made me passionate about amplifying technology for social good. As such, I am a product manager and developer at RocLab, a tech consulting club at my university. I am a founding web developer and designer for Hestia, a crowdfunding intitiative with members from all over the world. Recently, I published a research paper at the Journal of Emerging Investigators (JEI) using natural language processing (NLP) and AI at large to detect human trafficking. I also published an article about this work for Human Trafficking Search (HTS), a global database for human trafficking resources. I presented my research at ROC Talks, inspired by Three-Minute Talks (TmT). <br /><br /> I am also a Foreign Policy Analyst at the Institute for Youth in Policy, where I collaborate with a diverse team to write non-partisan briefs on the world's most pressing issues. I am currently a Research Assistant at the Human-Computer Interaction Lab where I am working on a political misinformation debunking model using generative AI. <br /><br /> My growing interest in sustainability led me to become a Panda Ambassador for WWF. I am a member of the Working Group for Humanitarian Open Street Map (OSM), which is a organization that maps geospatial data in vulnerable and disaster-prone areas. <br />
            </p>          
          </div>

          <div className="lower-about-me">
            <p>Proficient in: Javascript (React.js), CSS/HTML, Java, C, Python</p>
          </div>

          <div className="social-links">
            <div className="link1">
              <a href="https://github.com/rusmiyaaqid">
                <img src={github} alt="" />
              </a>
            </div>
            <div className="link2">
              <a href="mailto:rusmiyaaqid@gmail.com">
                <img src={email} alt="" />
              </a>
            </div>
            <div className="link3">
              <a href="https://www.linkedin.com/in/rusmiya-aqid/">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
    
    </div>

  );
}

function MainCard() {
  return (
    <div className="wrapper">
      <section id= "home">
        <ContainerOne/>
      </section>
      <section id= "about">
        <ContainerTwo/>
        </section>
      
     
    </div>
  );
}

export default MainCard;

