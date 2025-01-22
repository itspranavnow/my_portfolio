import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.section-scroll-trigger');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect(); // Cleanup observer
    };

    handleScrollAnimations();
  }, []);

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
      <section className="about dynamic-shape section-scroll-trigger">
        <h2>About Me</h2>
        <p>
          I am a passionate and dedicated fresher in the field of Data Science, with hands-on experience during my
          internship at Genpact. I specialize in leveraging AI, ML, and Generative AI techniques to solve real-world
          problems and drive business value.
        </p>
      </section>

      {/* Areas of Expertise Section */}
      <section className="expertise-section">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          {[
            'Generative AI and NLP',
            'Quantitative Analysis',
            'Predictive Modeling',
            'Statistical Analysis',
            'Data Visualization',
            'Text Analytics',
            'Prompt Engineering',
            'Data Engineering',
            'Data Mining and ETL Process',
            'Database Management',
            'Data Security and Integration',
            'Stakeholder Engagement',
          ].map((expertise, index) => (
            <div key={index} className="expertise-item section-scroll-trigger">
              {expertise}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-container">
          {[
            {
              title: 'Data Discrepancy Detection Using Generative AI and NLP',
              description:
                'Developed an AI-based model to identify data mismatches by comparing input data against master records, using NLP and Generative AI to automate data verification with high accuracy.',
            },
            {
              title: 'Integrated EHR Management and Analytics Platform with GCP Data Lake Integration',
              description:
                'Engineered an ETL pipeline for Electronic Health Records, integrating data into Google Cloud Platform and boosting workflow efficiency by 30% through automated data transformation and analytics deployment.',
            },
            {
              title: 'Real-Time Customer Feedback and Tipping System for Restaurant Staff',
              description:
                'Designed a web-based system allowing customers to tip and rate waiters directly, implementing role-based access for confidentiality and real-time rating-based incentives.',
            },
            {
              title: 'In Progress: URL Threat Detection and Safety Indicator Extension',
              description:
                'Currently building a browser extension that analyses URLs in real-time to provide instant safety indicators, incorporating machine learning and NLP techniques to enhance browsing security.',
            },
          ].map((project, index) => (
            <div key={index} className="project-item section-scroll-trigger">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
<section className="contact section-scroll-trigger">
  <h2>Connect with Me</h2>
  <div className="contact-links">
    <a href="https://www.linkedin.com/in/pranav-reddy-6a05961b0" target="_blank" rel="noopener noreferrer" className="contact-item">
      <img src="https://www.bing.com/images/search?view=detailV2&ccid=7y88DqLR&id=999975844392E378326EE9AD75FE4D0E96841F91&thid=OIP.7y88DqLREW8ApbxWuMBmzgHaEo&mediaurl=https%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2020%2f01%2fLogo-Linkedin.png&exph=2125&expw=3400&q=linkedin+logo&simid=608005990949543629&FORM=IRPRST&ck=A123BD4E0CCA2BEE708A3FBDE5F3CF93&selectedIndex=0&itb=1" alt="LinkedIn" className="contact-icon" />
      <span>LinkedIn</span>
    </a>
    <a href="https://github.com/itspranavnow" target="_blank" rel="noopener noreferrer" className="contact-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="contact-icon" />
      <span>GitHub</span>
    </a>
    <a href="https://drive.google.com/drive/folders/1ukwsfykduXU1ZMhd5ZzQF7KbR1PBuOab" target="_blank" rel="noopener noreferrer" className="contact-item">
      <img src="https://www.bing.com/images/search?view=detailV2&ccid=P5zMNm6G&id=D19DCEFBD6C76B42D0938BD1B8B34AC013A8F47F&thid=OIP.P5zMNm6Gyb5PLSyllpv7_wAAAA&mediaurl=https%3a%2f%2fwww.conovercompany.com%2fwp-content%2fuploads%2f2019%2f06%2fwr-resumes-logo.png&exph=300&expw=300&q=resume+logo&simid=608008232971614974&FORM=IRPRST&ck=4C44C9E9EDF3A7B67CC21C920C5DD435&selectedIndex=25&itb=1" alt="Resume" className="contact-icon" />
      <span>Resume</span>
    </a>
    <a href="https://leetcode.com/itspranavnow" target="_blank" rel="noopener noreferrer" className="contact-item">
      <img src="https://www.bing.com/ck/a?!&&p=4bc3b5c826206a75286a44b9f0b533c7a57322d18e497ac85a443545f6135048JmltdHM9MTczNzUwNDAwMA&ptn=3&ver=2&hsh=4&fclid=159ecdb0-c752-6eb9-1280-de1dc6ff6fbd&u=a1L2ltYWdlcy9zZWFyY2g_cT1sZWV0Y29kZSUyMGxvZ28mRk9STT1JUUZSQkEmaWQ9MTA2NTA2MUI5MTRCODY1MTNDN0MxMkIxOURCRDk4QzRBMUZDNUY1MA&ntb=1" alt="LeetCode" className="contact-icon" />
      <span>LeetCode</span>
    </a>
  </div>
</section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Pranav Reddy Sandannagari. All rights reserved.</p>
        <p>
          Email: reddypranav2311@gmail.com | LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/pranav-reddy-6a05961b0">Pranav Reddy</a>
        </p>
      </footer>
    </div>
  );
};

export default App;