import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className="lg:flex gap-10" id="skills">
            <h3 className="text-3xl py-1 dark: text-teal-600 ">Technical Skills</h3>

    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
      
      <h3 className="text-lg font-medium pt-8 pb-2  ">
        Software Engineering / Data Analyst
      </h3>
      <p className="py-2">
        Cross functional Development
      </p>
      <h4 className="py-4 text-teal-600">Tech stack used</h4>
      <p className="text-gray-800 py-1">Python</p>
      <p className="text-gray-800 py-1">GIT</p>
      <p className="text-gray-800 py-1">Javascript</p>
      <p className="text-gray-800 py-1">Pandas</p>
      <p className="text-gray-800 py-1">HTML 5</p>
      <p className="text-gray-800 py-1">CSS</p>
      <p className="text-gray-800 py-1">SQL</p>



    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
    
      <h3 className="text-lg font-medium pt-8 pb-2 ">
        Team and Customer Collaboration
      </h3>
      <p className="py-2">
        Our main focus is to develop high end quality software to our stakeholders
      </p>
      <h4 className="py-4 text-teal-600">Soft Skills include :</h4>
      <p className="text-gray-800 py-1">Daily stand-up team meetings</p>
      <p className="text-gray-800 py-1">Regular Customer Updates and Feedback</p>
      <p className="text-gray-800 py-1">Sprint Retrospective and prototyping</p>
      <p className="text-gray-800 py-1">Customer Support</p>
    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      
      <h3 className="text-lg font-medium pt-8 pb-2 ">Scrum and Agile Methology</h3>
      <p className="py-2">
       High end Project managemnt tools
      </p>
      <h4 className="py-4 text-teal-600">Software planning tools include:</h4>
      <p className="text-gray-800 py-1">JIRA</p>
      <p className="text-gray-800 py-1">Click Up</p>
      <p className="text-gray-800 py-1">Draw io flowcharts</p>
    </div>
  </div>
      );
};

export default Skills;