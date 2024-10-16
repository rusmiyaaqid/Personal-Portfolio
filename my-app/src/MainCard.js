
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
              Rusmiya is a 20-year old student majoring in Computer Science with a cluster in Political Economy and Development at the University of Rochester. She was awarded the Whipple Science Research and Innovation Scholarship, became a Meliora Scholar, and was the recipient of a Research Innovation Grant (RIG) for her research abilties. <br /><br />She grew up in Dhaka, the bustling capital city of Bangladesh. Her diverse experiences made her passionate about amplifying technology for social good. As such, she is a product manager at RocLab, a tech consulting club at her university. She is a founding web developer and designer for Hestia, a crowdfunding intitiative with members from all over the world. She has published a research paper at the Journal of Emerging Investigators (JEI) using natural language processing (NLP) and AI at large to detect human trafficking. She has also published an article about this work for Human Trafficking Search (HTS), a global database for human trafficking resources. She was chosen as the only freshman among 20 undergraduates at her university to present her research through ROC Talks, inspired by Three-Minute Talks (TmT). <br /><br /> She is also a Foreign Policy Analyst at the Institute for Youth in  Policy, where she collaborates with a diverse team to write non-partisan briefs on the world's most pressing issues. She is a Research Assistant at the Human-Computer Interaction Lab where she is working on a political misinformation debunking model using generative AI, LLMs and prompt engineering. <br /><br /> Her growing interest in sustainability has led her to become a Panda Ambassador for WWF, and she has established a partnership with Grassroots at her university to further WWF's mission. She is a member of the Working Group for Humanitarian Open Street Map (OSM), which is a organization that maps geospatial data in vulnerable and disaster-prone areas. <br />
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

