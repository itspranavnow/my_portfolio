import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>Pranav Reddy Sandannagari</h1>
          <p>Data Analyst with Expertise in Optimizing Operations and Driving Insights through Advanced Data Solutions</p>
        </div>
      </header>

      {/* About Section */}
      <section className="about dynamic-shape">
        <h2>About Me</h2>
        <p>
          I am a passionate and dedicated fresher in the field of Data Science, with hands-on experience during my internship at
          Genpact. I specialize in leveraging AI, ML, and Generative AI techniques to solve real-world problems and drive business
          value.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div>AI & ML: Transformers (BERT, GPT, T5), Neural Networks, Deep Learning</div>
          <div>Natural Language Processing: Tokenization, Text Summarization, Sentiment Analysis</div>
          <div>Generative AI: Prompt Engineering, GPT Optimization, Model Training</div>
          <div>Programming: Python, SQL, HTML, CSS, JavaScript</div>
          <div>Data Visualization: Power BI, Advanced Excel</div>
          <div>Tools: TensorFlow, PyTorch, Scikit-learn, NLTK, Spacy</div>
          <div>Web Development & Automation: Browser Extensions, Selenium</div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience dynamic-shape">
        <h2>Internship Experience</h2>
        <div className="experience-container">
          <div>
            <h3>Data Science and Generative AI Intern | Genpact</h3>
            <p>Feb 2024 - July 2024 | Bangalore, Karnataka</p>
            <ul>
              <li>Developed an integrated healthcare platform using deep learning algorithms, reducing data retrieval time by 40%.</li>
              <li>Optimized data processing workflows using Generative AI and LLMs, improving efficiency and accuracy by 20%.</li>
              <li>Deployed predictive analytics models for patient outcome predictions in collaboration with cross-functional teams.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-carousel">
          <div className="project-item">Data Discrepancy Detection Using Generative AI and NLP</div>
          <div className="project-item">Integrated EHR Management and Analytics Platform with GCP Data Lake Integration</div>
          <div className="project-item">Real-Time Customer Feedback and Tipping System for Restaurant Staff</div>
          <div className="project-item">In Progress: URL Threat Detection and Safety Indicator Extension</div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications dynamic-shape">
        <h2>Certifications</h2>
        <ul>
          <li>Machine Learning and Generative AI with Python</li>
          <li>NLP with Python</li>
          <li>IBM Skill Badge</li>
          <li>Data Science Training by ADaSci</li>
          <li>Cyber Security and Forensics by AICTE</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Pranav Reddy Sandannagari. All rights reserved.</p>
        <p>Email: reddypranav2311@gmail.com | LinkedIn: <a href="https://www.linkedin.com/in/pranav-reddy-6a05961b0">Pranav Reddy</a></p>
      </footer>
    </div>
  );
};

export default App;
