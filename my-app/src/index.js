import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import MainCard from './MainCard.js'
import Projects from './ProjectsCard.js'
import Navigation from './NavBar.js'

/*
function NavBar(){
  return(
    <nav className= "navBar">
      <div className="group">
        <img src= {logo} className= "react_logo" alt="react_image"></img>
        <h1>ReactFacts</h1>
      </div>
      <p1>React Course - Project 1</p1>
    </nav>
    
  );
}

function Body(){
  return(
    <div className="body1">
      <h1>Fun facts about react</h1>
      <ul className="list">
          <li>Was first released in 2013</li>
          <li>Was Originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
      </ul>
    </div>
    
  );
}

function Card(){
  return(
    <div className= "card">
      <img src={autumn} alt="weather" className="card--image"></img>
      <div className="card--stats">
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>      
    </div>


  );

}
  */
/*
const navbar = (
  <nav>
      <h1>Bob's Bistro</h1>
      <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>
)
  */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-footer">
          <h1> Get in touch</h1>
          <a href="mailto:rusmiyaaqid@gmail.com" target="_blank" rel="noopener noreferrer">rusmiyaaqid@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navigation />
    <MainCard />
    <Projects />
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
