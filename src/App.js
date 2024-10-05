import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link as ScrollLink } from 'react-scroll';


function Projects() {
  const projects = [
    { name: 'Research Project', imgSrc: process.env.PUBLIC_URL + '/PittResearchLogo.jpg', description: 'At the beginning of 2023\'s fall semester I heard from my friend Rupesh that Dr. Rajendra Kahnal about wanting to do research in computer science.  I then reached out to him, picked a topic, and began finding data to analyze.  I chose to research something in relation to finance and the economy as I find it quite intresting and one of those might be my second major.  The dataset we chose was Redfin\'s US Housing Market data.  It is quite large dataset several different aspects of the market.  We chose to look at the data by state and then at the individual zip codes of the state of Pennsylvania.  The maps (both state and zip code) progress from 2019->2021->2023.  The graph is of the cumulative month to month change of the market in its adjusted value.  Used pandas to clean the data, removing null and skewed values.  Filtered the data based on year using pandas.  Created graphs and maps with matplotlib and geopandas.', githubLink: 'https://github.com/JSakMad/HousingMarketResearch' },
    { name: 'AI-Emotion Detector', imgSrc: process.env.PUBLIC_URL + '/MachineLearningimage.jpg', description: 'This is a project about artificial intelligence and machine learning. I looked for ideas, a lot of them were about analyzing traffic and such which I didn\'t find too interesting. I wanted to tell what emotion someone would have based on their facial expression. The dataset I used was from Kaggle. Once trained, the machine accesses a camera of some kind, typically a webcam, and then scans the frame for a face and draws a box around it if there is one. It then compares the face it sees in the box with the several expressions that it has been trained to recognize and places its prediction accuracy and emotion name below the box. Made with Python and the libraries used were OpenCV, TensorFlow, and numpy. I used TensorFlow to train the model and OpenCV to access the webcam. Should be on GitHub soon.', githubLink: 'https://github.com/JSakMad/Emotion-Detector'},
    { name: 'This Website', imgSrc: process.env.PUBLIC_URL + '/NEWWebsiteimage.jpg', description: 'This website is probably my biggest project, in terms of new concepts I have learned. As I apply for internships, I see places for a portfolio website to be linked so I made one. This is my longest ongoing project and I will try to update it with new projects and skills as I create/learn them. Before making this, I was nearly completely new to web development, so it has been quite the learning process. It uses the React framework, JavaScript to define the operations/layout, and CSS for visuals. Date of creation is October 2023. I look forward to updating this website with newer content when I start landing internships.', githubLink: 'https://github.com/JSakMad/my-website', siteLink: 'https://jsakmad.github.io/my-website/' },
    { name: 'Codel', imgSrc: process.env.PUBLIC_URL + '/CodelLogo.png', description: 'An open source wordle-like code solving game played in the browser. It is web-based and made using JavaScript, HTML, and CSS. I used GitHub pages to set it up. I plan on adding new modes and difficulties soon when I find more time.', githubLink: 'https://github.com/JSakMad/Codel', siteLink: 'https://jsakmad.github.io/Codel/' },
    { name: 'Valorant Analyzer', imgSrc: process.env.PUBLIC_URL + '/ValorantAnalyzerLogo2.png', description: 'This project will most likely become my biggest and longest supported endeavour.  This is a web app designed for use of the Valorant team from the esports club for analysis of out performances throughout the season.', githubLink: 'https://github.com/JSakMad/Valorant-Analyzer', siteLink: 'https://jsakmad.github.io/Valorant-Analyzer/' }
  ];

  const [activeProject, setActiveProject] = useState(null);

  const openPopup = (project) => {
    setActiveProject(project);
  };

  const closePopup = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      {projects.map((project, index) => (
        <div key={index} className="project-box" onClick={() => openPopup(project)}>
          <img src={project.imgSrc} alt={project.name} />
          <div className="project-name">{project.name}</div>
        </div>
      ))}

      {activeProject && (
        <div className="project-popup active">
          <div className="close-btn" onClick={closePopup}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <h2>{activeProject.name}</h2>
          <p>{activeProject.description}</p>
          {activeProject.name === 'Research Project' && (
            <Carousel showThumbs={false} autoPlay interval={2000} infiniteLoop>
              <div>
                <img src={process.env.PUBLIC_URL + "/Statemap2019.png"} alt="Statemap2019" style={{ width: '65%', height: 'auto', margin: '0 auto' }} />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/Statemap2021.png"} alt="Statemap2021" style={{ width: '65%', height: 'auto', margin: '0 auto' }} />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/Statemap2023.png"} alt="Statemap2023" style={{ width: '65%', height: 'auto', margin: '0 auto' }} />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/Zipcodemap2019.png"} alt="Zipcodemap2019" style={{ width: '65%', height: 'auto', margin: '0 auto' }} />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/Zipcodemap2021.png"} alt="Zipcodemap2021" style={{ width: '65%', height: 'auto', margin: '0 auto' }} />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/Zipcodemap2023.png"} alt="Zipcodemap2023" style={{ width: '65%', height: 'auto', margin: '0 auto' }} />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/Month%20to%20Month%20Cumulative%20Price%202019-2023.png"} alt="Month to Month Cumulative Price 2019-2023" style={{ width: '65%', height: 'auto', margin: '0 auto' }} />
              </div>
            </Carousel>
          )}
          <a href={activeProject.githubLink} className="github-btn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          {activeProject.siteLink && (
            <a href={activeProject.siteLink} className="site-btn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Visit Site
            </a>
          )}
        </div>
      )}
    </section>
  );
}

function App() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joshua Sakolsky-Madaras</h1>
        <nav>
          <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={500} onSetActive={setActiveSection}>About</ScrollLink>
          <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} onSetActive={setActiveSection}>Skills</ScrollLink>
          <ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={-60} duration={500} onSetActive={setActiveSection}>Projects</ScrollLink>
          <ScrollLink className="contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-59} duration={500} onSetActive={setActiveSection}>Contact</ScrollLink>
        </nav>
      </header>
      <section id="about">
        <About />
        <LogoBar />
        <Introduction />
      </section>
      <section id="skills">
        <SkillsBar />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}


function LogoBar() {
  return (
    <div className="logo-bar">
      <img src={process.env.PUBLIC_URL + "/Mtlebanonlogo.png"} alt="High School" />
      <img src={process.env.PUBLIC_URL + "/Pittlogo.png"} alt="University of Pittsburgh" />
      <img src={process.env.PUBLIC_URL + "/SHARPlogo.png"} alt="SHARP" />
    </div>
  );
}

function SkillsBar() { 
  return (
    <div className="skills-bar">
      <h2 className="center-text">Skills</h2>
      <div className="logo-bar">
        <img src={process.env.PUBLIC_URL + "/Pythonlogo.png"} alt="Python" />
        <img src={process.env.PUBLIC_URL + "/Javalogo.png"} alt="Java" />
        <img src={process.env.PUBLIC_URL + "/SQLlogo.svg"} alt="SQL" />
        <img src={process.env.PUBLIC_URL + "/C++logo.png"} alt="C++" />
        <img src={process.env.PUBLIC_URL + "/CSSlogo.png"} alt="CSS" />
        <img src={process.env.PUBLIC_URL + "/Javascriptlogo.svg"} alt="Javascript" />
        <img src={process.env.PUBLIC_URL + "/Onshapelogo.png"} alt="Onshape" />
        <img src={process.env.PUBLIC_URL + "/Autodesklogo.png"} alt="Autodesk" />
        <img src={process.env.PUBLIC_URL + "/REACTlogo.png"} alt="REACT" />
      </div>
    </div>
  );
}



function About() {
  return (
    <section id="about" className="about-section" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '67vh' }}>
      <div className="headshot-photo" style={{ backgroundColor: 'rgb(66, 60, 228)', borderRadius: '50%', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
        <img src= {process.env.PUBLIC_URL + '/Circleheadshot.jpg'} alt='Your Headshot' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />
      </div>
      <h2 style={{ color: 'rgb(66, 60, 228)', textAlign: 'center', backgroundColor: '#DAA520', borderRadius: '25px', padding: '10px' }}>Joshua Sakolsky-Madaras</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '200px' }}>
        <a href="https://github.com/JSakMad" target="_blank" rel="noopener noreferrer">
          <div className="icon-background">
            <FontAwesomeIcon icon={faGithub} size="2x" color="#DAA520" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/joshua-sakolsky-madaras-83858b278/" target="_blank" rel="noopener noreferrer">
          <div className="icon-background">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#DAA520" />
          </div>
        </a>
        <a href="mailto:JES521@pitt.edu">
          <div className="icon-background">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#DAA520" />
          </div>
        </a>
      </div>
    </section>
  );
}

window.onload = function() {
  var carousel = document.getElementById('carousel');
  var images = carousel.getElementsByTagName('img');
  var index = 0;

  setInterval(function() {
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
  }, 2000); // Change image every 2 seconds
};


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  
    // Create a new FormData instance
    var formData = new FormData(event.target);
  
    // Convert it to JSON
    var object = {};
    formData.forEach((value, key) => {object[key] = value});

    console.log(JSON.stringify(object));
  
    // Send a POST request to the Google Apps Script web app
    fetch('https://script.google.com/macros/s/AKfycbzpLhsjHbr0ewni1gC0noYkbl7gXwW3_efOErjhELI6-RLqbNNSrLoDOTI_tqAdopwm/exec', {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <section id="contact" className="contact-section">
        <div className="text-box">
        <h2>Contact Me</h2>
        <p>Phone Number: +1(412) 218-8628</p>
        <p>Email: JES521@pitt.edu</p>
        <p>Github: <a className="after-github" href="https://github.com/JSakMad" target="_blank" rel="noopener noreferrer">https://github.com/JSakMad</a></p>
        <p>LinkedIn: <a className="after-linkedin" href="https://www.linkedin.com/in/joshua-sakolsky-madaras-83858b278/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/joshua-sakolsky-madaras-83858b278/</a></p>
        <p>Instagram: joshsakm7</p>
        <p>Or fill out the form below:</p>
        </div>
        <form action="https://script.google.com/macros/s/AKfycbwBcqOolre6RsRZLCu5bdVKX-dyWIxqgwh7wgT6E8_RLRIqxc0vUZaNiIjVq_Kul8sJ/exec" method="POST">
  <div className="contact-form">
    <div className="left-side">
      <input type="text" id="name" name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} autoComplete="name" />

      <input type="email" id="email" name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} autoComplete="email" />

      <input type="tel" id="phone" name="phone" placeholder="Your Phone" value={this.state.phone} onChange={this.handleChange} autoComplete="tel" />
    </div>

    <div className="right-side">
      <textarea id="message" name="message" placeholder="Your Message" value={this.state.message} onChange={this.handleChange}></textarea>
    </div>
  </div>

  {/* Place the submit button inside the form tag */}
  <div className="submit-button">
    <input type="submit" value="Send Message"/>
  </div>
</form>
      </section>
    );
  }
}

function Introduction() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#f0f0f0', color: 'black' }}>
      <section id="interests" className="interests-section" style={{ maxWidth: '800px', backgroundColor: '#f0f0f0', color: 'black', padding: '20px' }}>
        <h2 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>About Me</h2>
        <p>University of Pittsburgh 2027, BS Computer Science, Researcher, and Aspiring Software Engineer</p>
        <p>I am an undergraduate college student from Pittsburgh, Pennsylvania. My academic journey is enriched by Undergraduate Research projects and club activites.  In addition to my research and clubs, I have been working on personal projects in several different programming languages. As I continue to grow and learn, I am actively seeking internships related to software engineering, preferably paid ones.</p>
        <p>My future plans are to complete my undergraduate degree and then becoming a software engineer.  I am planning to attend graduate school, most likely for a PhD in computer science or a related field.</p>
        <p>I am always open to learn and try new things, especially when it pertains to programming.  Wether it be learning a new language or starting a brand new project, I am always trying to improve my portfolio and skills, hence one of my main reasons for making this website.</p>
        <p>I will use this website as a way to communicate with my community of what my past and current projects are.  Hopefully, I will update it as frequently as I can, college can be busy at sometimes though.</p>
        <h3 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>Current Project</h3>
        <p>Since the conclusion of my very first research project last academic year.  I am now thinking of what to develop next, maybe some kind of personal project or getting into more research soon.</p>
      </section>
      <section id="organizations" className="organizations-section" style={{ maxWidth: '800px', backgroundColor: '#f0f0f0', color: 'black', padding: '20px' }}>
        <h2 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>On-Campus Organizations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div className="organization">
            <img src={process.env.PUBLIC_URL + "/Ecac.png"} alt="Logo 1" style={{ width: '100%', borderRadius: '10%' }}/>
            <p>Varsity Valorant Esports Team Member</p>
          </div>
          <div className="organization">
            <img src={process.env.PUBLIC_URL+"/ComputerScienceClub.png"} alt="Logo 4" style={{ width: '56%', borderRadius: '10%' }}/>
            <p>Computer Science Club Member</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;








