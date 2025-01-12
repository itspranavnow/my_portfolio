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
        <p>I am a passionate and dedicated fresher in the field of Data Science, with hands-on experience during my internship at Genpact. I specialize in leveraging AI, ML, and Generative AI techniques to solve real-world problems and drive business value.</p>
      </section>

      {/* Areas of Expertise Section */}
      <section className="expertise-section">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-item">Generative AI and NLP</div>
          <div className="expertise-item">Quantitative Analysis</div>
          <div className="expertise-item">Predictive Modeling</div>
          <div className="expertise-item">Statistical Analysis</div>
          <div className="expertise-item">Data Visualization</div>
          <div className="expertise-item">Text Analytics</div>
          <div className="expertise-item">Prompt Engineering</div>
          <div className="expertise-item">Data Engineering</div>
          <div className="expertise-item">Data Mining and ETL Process</div>
          <div className="expertise-item">Database Management</div>
          <div className="expertise-item">Data Security and Integration</div>
          <div className="expertise-item">Stakeholder Engagement</div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="project-item project1">
            <h3>Data Discrepancy Detection Using Generative AI and NLP</h3>
            <p>Developed an AI-based model to identify data mismatches by comparing input data against master records, using NLP and Generative AI to automate data verification with high accuracy.</p>
          </div>
          <div className="project-item project2">
            <h3>Integrated EHR Management and Analytics Platform with GCP Data Lake Integration</h3>
            <p>Engineered an ETL pipeline for Electronic Health Records, integrating data into Google Cloud Platform and boosting workflow efficiency by 30% through automated data transformation and analytics deployment.</p>
          </div>
          <div className="project-item project3">
            <h3>Real-Time Customer Feedback and Tipping System for Restaurant Staff</h3>
            <p>Designed a web-based system allowing customers to tip and rate waiters directly, implementing role-based access for confidentiality and real-time rating-based incentives.</p>
          </div>
          <div className="project-item project4">
            <h3>In Progress: URL Threat Detection and Safety Indicator Extension</h3>
            <p>Currently building a browser extension that analyses URLs in real-time to provide instant safety indicators, incorporating machine learning and NLP techniques to enhance browsing security.</p>
          </div>
        </div>
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
