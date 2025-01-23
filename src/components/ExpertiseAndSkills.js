import React, { useState } from 'react';

const ExpertiseAndSkills = () => {
  const [activeTab, setActiveTab] = useState('expertise'); // Default tab

  return (
    <div>
      {/* Tab Buttons */}
      <div className="tabs">
        <button
          className={activeTab === 'expertise' ? 'active-tab' : ''}
          onClick={() => setActiveTab('expertise')}
        >
          Areas of Expertise
        </button>
        <button
          className={activeTab === 'skills' ? 'active-tab' : ''}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'expertise' && (
          <div>
            <h3>Areas of Expertise</h3>
            <ul>
              <li>Generative AI and NLP</li>
              <li>Predictive Modeling</li>
              <li>Statistical Analysis</li>
              <li>Data Visualization</li>
              {/* Add more as needed */}
            </ul>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <h3>Skills</h3>
            <ul>
              <li>Python, SQL, TensorFlow, PyTorch</li>
              <li>Data Engineering and ETL</li>
              <li>Prompt Engineering</li>
              <li>AWS, GCP, Power BI, Tableau</li>
              {/* Add more as needed */}
            </ul>
          </div>
        )}
      </div>

      {/* Styling */}
      <style>
        {`
          .tabs {
            display: flex;
            gap: 10px;
          }
          .tabs button {
            padding: 10px 15px;
            cursor: pointer;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
            border-radius: 5px;
          }
          .tabs button.active-tab {
            background-color: #007bff;
            color: white;
            border: none;
          }
          .tab-content {
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default ExpertiseAndSkills;
