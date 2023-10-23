import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './App.css';
// Import your components here

function App() {
  // Define your projects
  const projects = ['AI-Emotion-Detector', 'This Website'];

  // State to track the active section
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joshua Sakolsky-Madaras</h1>
        <nav>
          <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={500} onSetActive={setActiveSection}>About</ScrollLink>
          <ScrollLink activeClass="active" to="research" spy={true} smooth={true} offset={-60} duration={500} onSetActive={setActiveSection}>Research</ScrollLink>
          <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} onSetActive={setActiveSection}>Skills</ScrollLink>
          <div className="dropdown">
            {/* Replace this ScrollLink */}
            <ScrollLink 
              className={projects.includes(activeSection) ? 'active' : ''} 
              to={projects[0]} // Scroll to the first project
              spy={true} 
              smooth={true} 
              offset={-60} 
              duration={500}
              onSetActive={setActiveSection}
            >
              Projects
            </ScrollLink>
            <div className="dropdown-content">
              {projects.map(project => (
                <ScrollLink 
                  key={project}
                  activeClass="active" 
                  to={project} 
                  spy={true} 
                  smooth={true} 
                  offset={-60} 
                  duration={500}
                  onSetActive={setActiveSection}
                >
                  {project}
                </ScrollLink>
              ))}
            </div>
          </div>
          <ScrollLink className="contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-59} duration={500} onSetActive={setActiveSection}>Contact</ScrollLink>
        </nav>
      </header>
      <section id="about">
        {/* Your About component */}
        <About />
        {/* Your LogoBar component */}
        <LogoBar />
        {/* Your Introduction component */}
        <Introduction />
      </section>
      <section id="research">
        {/* Your Research component */}
        <Research />
      </section>
      <section id="skills">
        {/* Your Skills component */}
        <Skills />
        {/* Your SkillsBar component */}
        <SkillsBar />
      </section>
      <section id="AI-Emotion-Detector">
        {/* Your AIEmotionDetector component */}
        <AIEmotionDetector />
      </section>
      <section id="This Website">
        {/* Your Placeholder component */}
        <Placeholder />
      </section>
      <section id="contact">
        {/* Your Contact component */}
        <Contact />
      </section>
    </div>
  );
}

function LogoBar() { 
  return (
    <div className="logo-bar">
      <img src="/Mtlebanonlogo.png" alt="High School" />
      <img src="/Pittlogo.png" alt="University of Pittsburgh" />
      <img src="/SHARPlogo.png" alt="SHARP" />
    </div>
  );
}

function SkillsBar() { 
  return (
    <div className="logo-bar">
      <img src="/Pythonlogo.png" alt="Python" />
      <img src="/Javalogo.png" alt="Java" />
      <img src="/SQLlogo.svg" alt="SQL" />
      <img src="/C++logo.png" alt="C++" />
      <img src="/CSSlogo.png" alt="CSS" />
      <img src="/Javascriptlogo.svg" alt="Javascript" />
      <img src="/Onshapelogo.png" alt="Onshape" />
      <img src="/Autodesklogo.png" alt="Autodesk" />
      <img src="/REACTlogo.png" alt="REACT" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about-section" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '67vh' }}>
      <div className="headshot-photo" style={{ backgroundColor: 'rgb(66, 60, 228)', borderRadius: '50%', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
        <img src='/Circleheadshot.jpg' alt='Your Headshot' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />
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

function Research() { 
  return (
    <section id="research" className="research-section" style={{ maxWidth: '1500px', backgroundColor: '#DAA520', color: 'rgb(66, 60, 228)', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
        <h2 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>My Research</h2>
        <p>At the beginning of 2023's fall semester I heard from a friend that Dr. Rajendra Kahnal spoke of his intrest about wanting to do research in relation to computer science.  I then reached out to him, picked a topic, and began finding data to analyze.  I wanted to research something in relation to the economy as I find finance and buisness quite intresting and am planning for one of those as my second major.</p>
    <p>The dataset we ended up settling on was Redfin's 2023 US housing Market dataset.  It is quite a large dataset with several different magnifications on the US housing market.  The ones we chose to look at were the one divided by state and then specifically at the zip codes of my home state of Pennsylvania.</p>
    <p>The maps found in the presentation on the right are made by using a GEOjson file of the US and Pennsylvania zip codes respecitvely and then mapping the normalized values to each state or zip code.  Higher value=lighter color=more expensive.  The maps, 3 of both kinds are in order of 2019, 2021, and 2023 respecitvely.</p>
    <p>The two graphs after the maps are analysis of the US housing market as a whole and is a graph of the cumulative month to month change of the market in its adjusted value.</p>
    <p>I used the pandas library to clean the data, getting rid of the null values and outliers which would skew the data.  I also used pandas to filter the data based on year.  The graphs were made with matplot.</p>
        </div>
        <div>
          <div id="carousel" style={{ width: '800px', height: '450px', overflow: 'hidden', padding: '20px' }}>
            <img src="/Statemap2019.png" alt="Statemap2019" style={{ width: '100%', height: '100%' }}/>
            <img src="/Statemap2021.png" alt="Statemap2021" style={{ width: '100%', height: '100%' }}/>
            <img src="/Statemap2023.png" alt="Statemap2023" style={{ width: '100%', height: '100%' }}/>
            <img src="/Zipcodemap2019.png" alt="Zipcodemap2019" style={{ width: '100%', height: '100%' }}/>
            <img src="/Zipcodemap2021.png" alt="Zipcodemap2021" style={{ width: '100%', height: '100%' }}/>
            <img src="/Zipcodemap2023.png" alt="Zipcodemap2023" style={{ width: '100%', height: '100%' }}/>
            <img src="/Month to Month Cumulative Price 2019-2023.png" alt="Month to Month Cumulative Price 2019-2023" style={{ width: '100%', height: '100%' }}/>
          </div>
        </div>
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

function Skills() {
  const skills = [
    { name: 'Python- Best language, used in projects and research', level: '85%' },
    { name: 'Java- Used in projects and class', level: '70%' },
    { name: 'SQL- Used in research', level: '60%' },
    { name: 'C++- Currently learning', level: '50%' },
    { name: 'CSS- Used in this website, currently learning', level: '60%' },
    { name: 'JavaScript- Used in this website, currently learning', level: '60%' },
    { name: 'CAD (Onshape and Autocad)- Used in robotics team', level: '80%' },
    { name: 'React- Used in this website, currently learning', level: '55%' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <p>{skill.name}</p>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{width: skill.level}}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}

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

function AIEmotionDetector() { 
  return (
    <section id="ai-emotion-detector" className="ai-emotion-detector-section" style={{ maxWidth: '1500px', backgroundColor: '#DAA520', color: 'rgb(66, 60, 228)', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: '60%' }}> {/* Limit the width of the text container */}
          <h2 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>AI-Emotion-Detector</h2>
          <p>This project was made when I was very intrested in artifical intelligence and machine learning.  I looked for ideas, alot of them were about analyzing traffic and such which I didn't find too interesting.  I ended up landing on trying to tell what emotion someone would have based on thier facial expression.</p>
          <p>I made this one while in highschool so it isn't very advanced but it did serve as a good introduction into machine learning for me, which is one of my main intrests.</p>
          <p>The data set I used for facial expressions was found on kaggle, where alot of good data sets for projects such as this one can be found.  I used a old microsoft surface to make the code and train the machine so it took far longer than it should have.</p>
          <p>Once trained the machine accsesses a camera of some kind, usually a webcam, and then scans the frame for a face and draws a box around it.  It then compares the face it sees in the box with the several expressions that it has been trained to recognize and places its prediction accuracy and emotion name below the box.</p>
          <p>The language I used was Python and the libraries I used were cv, tensorflow, and numpy.  I used tensorflow to train the model and cv to access the webcam.  This project should be able to be found on my github if you would like to see exactly how I did it.</p>
          <p></p>
        </div>
        {/* Add your image here */}
        <img src="/MachineLearningimage.jpg" alt="AI Generated Graphic" style={{ width: '25%', height: 'auto' }} />
      </div>
      <hr style={{ borderColor: 'rgb(66, 60, 228)', width: '100%', marginTop: '20px', marginBottom: '-20px'  }} /> {/* Add this line */}
    </section>
  );
}

function Placeholder() { 
  return (
    <section id="placeholder" className="placeholder-section" style={{ maxWidth: '1500px', backgroundColor: '#DAA520', color: 'rgb(66, 60, 228)', padding: '20px'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: '60%' }}> {/* Limit the width of the text container */}
          <h2 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>This Website</h2>
          <p>This website is probably my biggest project, in terms of new concepts I have learned, I have made yet, it is currently near the end of 2023.  As I am applying for many internships this year, I kept seeing places for a portfolio website to be linked so I decided to make one.</p>
          <p>This will probably my longest ongoing project as well as I will try to update it with new projects I create and skills I learn.  Before making this, I was nearly completely new to web development so it has been a journey in creating this.</p>
          <p>I heard that React was quite easy to work with so I decided to use that to create this.  I also used javascript to define the functions, how it operants, and the layout as such and CSS for making the colors look coordinated and making the website themeatically sound.</p>
          <p>Date of creation is October 2023.  I look forward to updating this website with newer content and may add new sections at some point when I start landing internships or jobs, as that will be my primary focus now.</p>
          <p>Yes this website is colored off of Pitt's colors but I will update them if I do transfer Universities or to a company's after I graduate.</p>
        </div>
        {/* Add your image here */}
        <img src="/NEWWebsiteimage.jpg" alt="AI Generated Graphic" style={{ width: '25%', height: 'auto' }} />
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#f0f0f0', color: 'black' }}>
      <section id="interests" className="interests-section" style={{ maxWidth: '800px', backgroundColor: '#f0f0f0', color: 'black', padding: '20px' }}>
        <h2 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>About Me</h2>
        <p>University of Pittsburgh '26, BS Computer Science, Researcher, and Aspiring Software Engineer</p>
        <p>I am an undergraduate college student from Pittsburgh, Pennsylvania. My academic journey is enriched by an Undergraduate Research project, the details of which will be published on this website soon. In addition to my research, I have been working on personal projects in several different languages. As I continue to grow and learn, I am actively seeking internships related to software engineering, preferably paid ones.</p>
        <p>My future plans are to complete undergraduate and probably transfer to another institution such as Purdue or Georgia Tech in the process.  I plan to become a software engineer out of undergraduate and then attend graduate school, most likely for a PhD.</p>
        <p>I am always open to learn and try new things, especially when it pertains to programming.  Wether it be learning a new language or starting a brand new project, I am always trying to improve my portfolio and skills, hence one of my main reasons for making this website.</p>
        <p>I will use this website as a way to communicate with the world of what my past and current projects are.  Hopefully, I will update it as frequently as I can, college can be busy at sometimes though.</p>
        <h3 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>Current Project</h3>
        <p>My current project is my first research project.  I am working with one of my University's professors, Dr.Kahnal.  I am using SQL and Python to preform data analysis on the US Housing Market.  More information can be found on the research page of this very website.</p>
      </section>
      <section id="organizations" className="organizations-section" style={{ maxWidth: '800px', backgroundColor: '#f0f0f0', color: 'black', padding: '20px' }}>
        <h2 style={{ margin: 0, padding: 0, marginBottom: '20px' }}>On-Campus Organizations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div className="organization">
            <img src="/MountainCatEsportslogo.png" alt="Logo 1" style={{ width: '100%', borderRadius: '10%' }}/>
            <p>Varsity Valorant Esports Team Member</p>
          </div>
          <div className="organization">
            <img src="/Bajalogo.png" alt="Logo 2" style={{ width: '100%', borderRadius: '10%' }}/>
            <p>Baja Club Team Member</p>
          </div>
          <div className="organization">
            <img src="/SWElogo.png" alt="Logo 3" style={{ width: '100%'}}/>
            <p>Society of Women Engineers Events Coordinator</p>
          </div>
          <div className="organization">
            <img src="/ChemElogo.png" alt="Logo 4" style={{ width: '100%', borderRadius: '10%' }}/>
            <p>Chem-E Car Team Member</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;








